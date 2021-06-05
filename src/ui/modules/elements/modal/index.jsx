import config from './assets/config.js';
import styles from './assets/styles.js';

const Modal = ({ toggle, trigger, close, animate, ...props }) => {
  const { name } = useConfig(props);
  const { page, ...context } = useModuleContext();

  console.log(context);

  page.setShowOverlay(true);

  return (
    <React.Fragment>
      <Module name={name} {...props}>
        {close && <Component name='close'>{close}</Component>}

        <Component name='content'>{props.children}</Component>
      </Module>
    </React.Fragment>
  );
}

Modal.Close = props => (
  <Component {...props} name='close'>{props.children}</Component>
);

Modal.defaultProps = { config, styles }

export default Modal;