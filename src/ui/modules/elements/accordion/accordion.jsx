import defaults from './assets/config.js';
import interactions from './assets/interactions.js';
import layout from './assets/layout.jss';

/**
 * Render Accordion module
 *
 * @prop {Array} panels
 * @prop {Function} toggle
 */
const Accordion = ({ panels, toggle, layout, ...props }) => {
    const config = Module.config(defaults(window.theme), window.theme.accordion);

    return (
        <Module name={config.name} styles={[layout, config, window.theme]} {...props} >
            {panels.map(({ title, content, active }, index) => (
                <Component active={active} name='panel' key={index}>
                    <Component name='title' tag='div' onClick={toggle}>
                        <Component name='toggle' className='fa fa-chevron-circle-down' /> {title}
                    </Component>

                    <Component name='content'>{content}</Component>
                </Component>
            ))}
        </Module>
    );
}

Object.assign(Accordion, interactions, {
    defaultProps: {
        object: true,
        toggle: interactions.toggle,
        layout: layout
    }
});

export default Accordion;