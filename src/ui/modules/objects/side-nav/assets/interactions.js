export default {
    init, toggle
}

export function init(element, config) {
    config = config || SideNav.config;

    element.getComponents('toggleDropdown').forEach(toggleDropdown => {
        const dropdown = toggleDropdown.parent('item').getComponent('menu');

        toggleDropdown.addEventListener('click', (event) => {
            event.preventDefault();

            dropdown.modifier('visible', dropdown.hasModifier('hidden') ? 'set' : 'unset');
            dropdown.modifier('hidden', dropdown.hasModifier('visible') ? 'unset' : 'set');

            element.repaint();
        })
    })
}

export function toggle(element, operator, config) {
    config = config || SideNav.config;
}