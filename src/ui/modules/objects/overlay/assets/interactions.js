export default {
    toggle
}
/**
 * @todo implement `flag` functionality to ensure
 * only desired actions close the overlay
 */
export function toggle(el, operator, flag) {
    const state = (el.is('visible') && operator !== 'show' || operator === 'hide') ? 'unset' : 'set';

    // el.modifier(['visible', flag], state);

    el.repaint && el.repaint();
};