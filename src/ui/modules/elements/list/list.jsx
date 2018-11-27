import defaults from './assets/config.js';
import layout from './assets/layout.jss';

/**
 * Render List module
 */
const List = (props) => (
    <Module {...props}>{Module.child(props)}</Module>
);

List.Item = ({ config, context, icon, children }) => {
    config = config || List.config;

    if (context.arrow && !icon) icon = config['arrow-icon'];

    return (
        <Component name='item' tag='li'>
            {icon && <SubComponent name='icon' tag='i' className={`fa fa-${icon}`} />}
            {children}
        </Component>
    )
};

export default Object.assign(List, {
    layout, defaults, defaultProps: {
        name: 'List',
        tag: 'ul'
    }
});