export default {
    toggle
}
/**
 * @todo implement `flag` functionality to ensure
 * only desired actions close the overlay
 */
export function toggle(el, operator, flag) {
    const state = (el.modifier('visible') && operator !== 'show' || operator === 'hide') ? 'unset' : 'set';

    console.log(flag)

    el.modifier(['visible', flag], state);

    el.repaint && el.repaint();
};