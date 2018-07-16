import defaults from './side-nav.json';
import interactions from './side-nav.js';

/**
 * Render Side-Nav component
 *
 * @prop {Function} init
 * @prop {(Array|Function)} navigation
 */
const SideNav = ({ init, navigation, ...props }) => {
    const config = Object.assign(defaults['side-nav'], window.theme['side-nav']);

    window.addEventListener('load', () => {
        init(typeof navigation === 'function' ? navigation(config) : navigation)
    }, true);

    return (
        <Module name={config.name} {...props}>
            <nav>{navigation.constructor === Array && <ul>{renderNavItems(navigation)}</ul>}</nav>
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

SideNav.defaultProps = {
    init: interactions.init,
    navigation: config => config.navigation
};

export default SideNav;