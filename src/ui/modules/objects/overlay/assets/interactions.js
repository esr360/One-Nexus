export default {
    toggle
}

export function toggle(el, operator, flag) {
    const state = (el.modifier('visible') && operator !== 'show' || operator === 'hide') ? 'remove' : 'add';

    el.modifier((flag ? flag + '-' : '') + 'visible', state);
};