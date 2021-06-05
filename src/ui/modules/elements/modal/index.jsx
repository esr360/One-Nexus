import config from './assets/config.js';
import styles from './assets/styles.js';

const Modal = ({ toggle, trigger, close, animate, modifiers = [], ...props }) => {
  const { name } = useConfig(props);

  let modal;

  if (animate) modifiers.push(`animate-${animate}`);

  function init(node) {
    typeof trigger === 'string' && document.querySelectorAll(trigger).forEach(trigger => {
      trigger.addEventListener('click', () => toggle(node), false)
    });
  }

  return (
    <React.Fragment>
      <Module name={name} modifiers={modifiers} init={init} ref={node => modal = node} {...props}>
        {close && <Component modifiers={['icon']} name='close'>{close}</Component>}

        <Component name='content'>{props.content||props.children}</Component>
      </Module>

      {React.isValidElement(trigger) && React.cloneElement(trigger, {
        onClick: () => toggle(ReactDOM.findDOMNode(modal))
      })}
    </React.Fragment>
  );
}

Modal.Close = props => (
  <Component {...props} name='close'>{props.children}</Component>
);

Modal.defaultProps = { config, styles }

export default Modal;