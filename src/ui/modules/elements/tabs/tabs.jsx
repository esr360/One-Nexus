import defaults from './assets/config.js';
import layout from './assets/layout.js';
import interactions from './assets/interactions.js';

/**
 * Render Tabs module
 *
 * @prop {Array} tabs
 * @prop {Function} activate
 */
const Tabs = ({ data, activate, ...props }) => (
    <Module {...props}>
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

export default Object.assign(Tabs, {
    ...interactions, layout, defaults, defaultProps: {
        name: 'Tabs',
        object: true
    }
});