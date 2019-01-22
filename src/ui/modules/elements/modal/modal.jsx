import defaults from './assets/config';
import layout from './assets/layout.js';
import interactions from './assets/interactions';

/**
 * Render Modal module
 */
const Modal = ({ toggle, trigger, close, animate, modifiers = [], ...props }) => {
    let modal;

    if (animate) modifiers.push(`animate-${animate}`);

    function init(node) {
        typeof trigger === 'string' && document.querySelectorAll(trigger).forEach(trigger => {
            trigger.addEventListener('click', () => toggle(node), false)
        });
    }

    return (
        <React.Fragment>
            <Module modifiers={modifiers} init={init} ref={node => modal = node} {...props}>
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

export default Object.assign(Modal, {
    ...interactions, layout, defaults, defaultProps: {
        name: 'Modal',
        animate: 'top',
        close: '×',
        toggle: interactions.toggle
    }
});