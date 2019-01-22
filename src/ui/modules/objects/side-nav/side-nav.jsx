import defaults from './assets/config.js';
import layout from './assets/layout.js';
import interactions from './assets/interactions.js';

/**
 * Render Side-Nav component
 */
const SideNav = ({ items, ...props }) => {
    return (
        <Module {...props}>
            <Component name='menu' tag='ul'>{renderNavItems(items)}</Component>
        </Module>
    );
}

function renderNavItems(items, depth) {
    if (typeof depth !== 'undefined') depth++;

    return items.map((item, index) => {
        const modifiers = [];

        modifiers.push(depth ? `depth-${depth}` : 'parent');

        if (item[2]) modifiers.push('has-dropdown');

        return (
            <Component name='item' tag='li' modifiers={modifiers} key={index}>
                <SubComponent name='link' tag='a' href={item[1]} modifiers={item[2] && ['with-dropdown']}>
                    {item[2] && <Component name='toggleDropdown'><i className='fa fa-chevron-circle-down'></i></Component>}
                    {item[0]}
                </SubComponent>
                
                { item[2] && (
                    <Component name='menu' tag='ul'>
                        {renderNavItems(item[2], depth || 0)}
                    </Component>
                )}
            </Component>
        )
    });
}

export default Object.assign(SideNav, {
    ...interactions, layout, defaults, defaultProps: {
        name: 'SideNav'
    }
});