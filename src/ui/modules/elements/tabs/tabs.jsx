import defaults from './tabs.json';
import interactions from './tabs.js';

/**
 * Render Tabs module
 *
 * @prop {String} name
 */
const Tabs = ({ tabs, activate, ...props }) => {
    const config = Object.assign(defaults.tabs, window.theme.tabs);

    return (
        <Module name={config.name} {...props}>
            <Component name='nav'>
                {tabs.map((data, index) => <Component name='nav_item' onClick={activate} key={index}>{data.title}</Component>)}
            </Component>
            <Component name='content'>
                {tabs.map((data, index) => <Component name='item' key={index}>{data.content}</Component>)}
            </Component>
        </Module>
    );
}

Tabs.defaultProps = {
    object: true,
    activate: interactions.activate
};

export default Tabs;