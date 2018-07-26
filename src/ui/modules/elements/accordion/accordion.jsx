import defaults from './config.js';
import interactions from './interactions.js';
import styles from './styles.jss';

/**
 * Render Accordion module
 *
 * @prop {Array} panels
 * @prop {Function} toggle
 */
const Accordion = ({ panels, toggle, styles, ...props }) => {
    const config = Object.assign(defaults(window.theme), window.theme.accordion);

    return (
        <Module name={config.name} {...props} styles={node => Module.setStyles(node, styles, window.theme, config)}>
            {panels.map(({ title, content, active }, index) => (
                <Component modifiers={active ? ['active'] : false} name='panel' key={index}>
                    <Component name='title' tag='div' onClick={toggle}>
                        <SubComponent name='test'>Test</SubComponent>
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
        styles: styles
    }
});

export default Accordion;