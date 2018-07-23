import defaults from './tabs.json';
import interactions from './tabs.js';

/**
 * Render Tabs module
 *
 * @prop {Array} tabs
 * @prop {Function} activate
 */
const Tabs = ({ data, activate, ...props }) => {
    const config = Object.assign(defaults.tabs, window.theme.tabs);

    return (
        <Module name={config.name} {...props}>
            <Component name='nav'>
                {data.map(({ active, title }, index) => (
                    <SubComponent active={active} name='item' onClick={activate} key={index}>{title}</SubComponent>
                ))}
            </Component>
            <Component name='content'>
                {data.map(({ active, content }, index) => (
                    <Component active={active} name='item' key={index}>{content}</Component>
                ))}
            </Component>
        </Module>
    );
}

Object.assign(Tabs, interactions, {
    defaultProps: {
        object: true,
        activate: interactions.activate
    }
});

export default Tabs;