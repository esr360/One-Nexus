export default {
    init, toggle
}

export function init(element, config) {
    config = config || SideNav.config;

    element.getComponents('toggleDropdown').forEach(toggleDropdown => {
        const dropdown = toggleDropdown.parent('item').getComponent('menu');

        toggleDropdown.addEventListener('click', (event) => {
            event.preventDefault();

            dropdown.modifier('hidden', dropdown.hasModifier('hidden') ? 'unset' : 'set');

            element.repaint();
        })
    });

    document.body.getComponents('toggle', { namespace: config.name }).forEach(trigger => {
        trigger.addEventListener('click', () => toggle(element), false);
    });
}

export function toggle(element, operator, config) {
    config = config || SideNav.config;

    const state = (element.hasModifier('visible') && operator !== 'show' || operator === 'hide') ? 'unset' : 'set';

    if (config.overlay.enabled) {
        const OVERLAY = config.overlay.element();

        Overlay.toggle(OVERLAY);

        if (state === 'set' && config.overlay.clickToClose) {
            OVERLAY.addEventListener('click', function clickHandler() {
                toggle(element, operator, config);
    
                OVERLAY.removeEventListener('click', clickHandler);
            });
        }
    }

    element.modifier('visible', state);

    element.repaint();

    return state === 'set';
}