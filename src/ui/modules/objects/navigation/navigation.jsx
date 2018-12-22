import defaults from './assets/config.js';
import layout from './assets/layout.jss';

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
        return (
            <Component name='item' tag='li' modifiers={[depth ? `depth-${depth}` : 'top-level']} key={index}>
                {item[1] ? <a href={item[1]}>{item[0]}</a> : item[0]}
                
                { item[2] && (
                    <Component name='dropdown' tag='ul'>
                        {renderNavItems(item[2], depth || 0)}
                    </Component>
                )}
            </Component>
        )
    });
}

export default Object.assign(Navigation, {
    layout, defaults, defaultProps: {
        name: 'Navigation'
    }
});