import defaults from './tabs.json';
import interactions from './tabs.js';

/**
 * Render Tabs module
 *
 * @prop {Array} tabs
 * @prop {Function} activate
 */
const Tabs = ({ tabs, activate, ...props }) => {
    const config = Object.assign(defaults.tabs, window.theme.tabs);

    return (
        <Module name={config.name} {...props}>
            <Component name='nav'>
                {tabs.map(({ active, title }, index) => (
                    <SubComponent active={active} name='item' onClick={activate} key={index}>{title}</SubComponent>
                ))}
            </Component>
            <Component name='content'>
                {tabs.map(({ active, content }, index) => (
                    <Component active={active} name='item' key={index}>{content}</Component>
                ))}
            </Component>
        </Module>
    );
}

Tabs.defaultProps = {
    object: true,
    activate: interactions.activate
};

export default Tabs;