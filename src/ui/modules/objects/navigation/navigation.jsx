import defaults from './assets/config.js';
import layout from './assets/layout.js';

/**
 * Render Navigation component
 */
const Navigation = ({ items, ...props }) => {
    return (
        <Module {...props} className='min-break-3'>
            <Component name='menu' tag='ul'>{renderNavItems(items)}</Component>
        </Module>
    );
}

function renderNavItems(items, depth) {
    if (typeof depth !== 'undefined') depth++;

    return items.map((item, index) => {
        const modifiers = [];

        if (depth) modifiers.push(`depth-${depth}`);
        if (item[2]) modifiers.push('has-dropdown');

        return (
            <SubComponent name='item' tag='li' modifiers={modifiers} key={index}>
                <SubComponent name='link' tag='a' href={item[1]} modifiers={item[2] && ['with-dropdown']}>
                    {item[0]}
                </SubComponent>
                
                { item[2] && (
                    <Component name='dropdown' tag='ul'>
                        {renderNavItems(item[2], depth || 0)}
                    </Component>
                )}
            </SubComponent>
        )
    });
}

export default Object.assign(Navigation, {
    layout, defaults, defaultProps: {
        name: 'Navigation'
    }
});