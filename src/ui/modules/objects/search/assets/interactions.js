export default {
    init,
    toggle
}

export function init(element, config) {
    config = config || Search.config;

    element.getComponent('close').addEventListener('click', () => toggle(element, 'hide'), false);

    document.body.getComponents('toggle', { namespace: config.name }).forEach(trigger => {
        trigger.addEventListener('click', () => toggle(element), false);
    });
}

export function toggle(element, operator, config) {
    config = config || Search.config;

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

    if (state === 'set') {
        window.setTimeout(() => element.getComponent('input').focus(), 250);
    }

    return state === 'set';
}