import defaults from './navigation.json';

/**
 * Render Navigation component
 *
 * @prop {Array} items
 */
const Navigation = ({ items, ...props }) => {
    const config = Object.assign(defaults.navigation, window.theme.navigation);

    return (
        <Module name={config.name} {...props} className='min-break-3'>
            <ul>{renderNavItems(items)}</ul>
        </Module>
    );
}

function renderNavItems(items) {
    return items.map((item, index) => (
        <li key={index}>
            <a href={item[1]}>{item[0]}</a>
            { item[2] && <ul>{renderNavItems(item[2])}</ul> }
        </li>
    ));
}

export default Navigation;