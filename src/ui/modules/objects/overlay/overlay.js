import defaults from './overlay.json';

export default {
    toggle,
    element
}

export function toggle(el, operator, flag) {
    const state = (el.modifier('visible') && operator !== 'show' || operator === 'hide') ? 'remove' : 'add';

    el.modifier((flag ? flag + '-' : '') + 'visible', state);
};

export function element(target) {
    return Synergy(target).query[0];
}