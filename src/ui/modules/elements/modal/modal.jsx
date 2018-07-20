import defaults from './modal.json';
import interactions from './modal.js';

/**
 * Render Modal module
 *
 * @prop {Function} toggle
 * @prop {(String|ReactElement)} trigger
 * @prop {Array} [modifiers = []]
 * @prop {ReactElement} close
 * @prop {String} animate
 */
const Modal = ({ toggle, trigger, modifiers = [], close, animate, ...props }) => {
    const config = Object.assign(defaults.modal, window.theme.modal);

    let modal;

    if (animate) modifiers.push(`animate-${animate}`);

    if (typeof trigger === 'string') {
        window.addEventListener('load', () => {
            document.querySelectorAll(trigger).forEach(trigger => {
                trigger.addEventListener('click', () => toggle(ReactDOM.findDOMNode(modal)), false)
            });
        }, true);
    }

    return (
        <React.Fragment>
            <Module name={config.name} modifiers={modifiers} ref={node => modal = node} {...props}>
                {close && <Component modifiers={['icon']} name='close'>{close}</Component>}
                <Component name='content'>{props.content||props.children}</Component>
            </Module>

            {React.isValidElement(trigger) && React.cloneElement(trigger, {
                onClick: () => toggle(ReactDOM.findDOMNode(modal))
            })}
        </React.Fragment>
    );
}

Object.assign(Modal, interactions, {
    defaultProps: {
        animate: 'top',
        close: '×',
        toggle: interactions.toggle
    }
});

export default Modal;