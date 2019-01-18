export default {
    init,
    toggle
}

export function init(element) {
    window.addEventListener('load', () => toggle(element), true);
}

export function toggle(element, config) {
    config = config || Preloader.config;

    if (!(element instanceof HTMLElement)) {
        element = element.target && element.target.closest(`[data-module="${config.name}"]`);
    }

    element.modifier('hidden', element.hasModifier('hidden') ? 'unset' : 'set');

    element.repaint();
}