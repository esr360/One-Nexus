export default {
    init,
    toggle
}

export function init(element, config) {
    config = config || Search.config;

    element.getComponent('close').addEventListener('click', () => toggle(element, 'hide'), false);

    document.body.getComponents('toggle', false, config.name).forEach(trigger => {
        trigger.addEventListener('click', () => toggle(element), false);
    });
}

export function toggle(element, operator, config) {
    config = config || Search.config;

    const state = (element.hasModifier('visible') && operator !== 'show' || operator === 'hide') ? 'unset' : 'set';

    element.modifier('visible', state);

    element.repaint();

    if (state === 'set') {
        window.setTimeout(() => element.getComponent('input').focus(), 100);
    }

    return state === 'set';
}