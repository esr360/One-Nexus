import defaults from './assets/config.js';
import layout from './assets/layout.jss';

/**
 * Render Navigation component
 *
 * @prop {Array} items
 */
const Navigation = ({ items, ...props }) => {
    return (
        <Module {...props} className='min-break-3'>
            <ul>{renderNavItems(items)}</ul>
        </Module>
    );
}

function renderNavItems(items) {
    return items.map((item, index) => (
        <li key={index}>
            <a href={item[1]}>{item[0]}</a> { item[2] && <ul>{renderNavItems(item[2])}</ul> }
        </li>
    ));
}

export default Object.assign(Navigation, {
    layout, defaults, defaultProps: {
        name: 'Navigation'
    }
});