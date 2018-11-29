export default {
    toggle
}

export function toggle(el, operator, flag) {
    const state = (el.modifier('visible') && operator !== 'show' || operator === 'hide') ? 'unset' : 'set';

    el.modifier((flag ? flag + '-' : '') + 'visible', state);

    el.repaint && el.repaint();
};