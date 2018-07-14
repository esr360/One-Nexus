import defaults from './accordion.json';
import interactions from './accordion.js';

/**
 * Render Accordion module
 *
 * @prop {Array} panels
 * @prop {Function} toggle
 */
const Accordion = ({ panels, toggle, ...props }) => {
    const config = Object.assign(defaults.accordion, window.theme.accordion);

    return (
        <Module name={config.name} {...props}>
            {panels.map(({title, content, active}, index) => (
                <Component modifiers={active ? ['active'] : false} name='section' key={index}>
                    <Component name='title' onClick={toggle}>
                        <Component name='toggle' className='fa fa-chevron-circle-down' /> {title}
                    </Component>
                    <Component name='content'>{content}</Component>
                </Component>
            ))}
        </Module>
    );
}

Accordion.defaultProps = {
    object: true,
    toggle: interactions.toggle
};

export default Accordion;