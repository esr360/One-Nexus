import defaults from './assets/config.js';
import layout from './assets/layout.jss';
import interactions from './modal.js';

/**
 * Render Modal module
 */
const Modal = ({ toggle, trigger, modifiers = [], close, animate, ...props }) => {
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
            <Module modifiers={modifiers} ref={node => modal = node} {...props}>
                {close && <Component modifiers={['icon']} name='close'>{close}</Component>}
                <Component name='content'>{props.content||props.children}</Component>
            </Module>

            {React.isValidElement(trigger) && React.cloneElement(trigger, {
                onClick: () => toggle(ReactDOM.findDOMNode(modal))
            })}
        </React.Fragment>
    );
}

export default Object.assign(Modal, {
    ...interactions, layout, defaults, defaultProps: {
        name: 'Modal',
        animate: 'top',
        close: '×',
        toggle: interactions.toggle
    }
});