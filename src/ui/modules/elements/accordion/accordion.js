import defaults from './accordion.json';

export default {
    toggle
}

/**
 * Toggle an accordion panel
 * 
 * @param {(String|Number|HTMLElement|NodeList)} target
 * @param {('open'|'close')} type
 * @param {(HTMLElement|NodeList)} parent
 * @param {Boolean} [keepOpen = false]
 */
export function toggle(target, type, parent, keepOpen = false) {
    const options = Object.assign(defaults.accordion, window.theme.accordion);

    let panel, operator;

    if (parent instanceof NodeList) {
        return parent.forEach(child => toggle(target, type, child, keepOpen));
    }

    options.keepOpen = (options.keepOpen === true) ? true : false;

    // determine target accordion panel
    if (typeof target === 'object' && ('target' in target)) {
        target.target.parents().reverse().forEach(parent => {
            if (parent.component('panel') === true) {
                return target = parent;
            }
        });
    }

    parent = parent || target.closest('[data-module]');

    if (typeof target === 'string') {
        panel = parent.querySelectorAll(target);
    } else if (typeof target === 'number') {
        panel = parent.children[target - 1];
    } else if (target instanceof HTMLElement || target instanceof NodeList) {
        panel = target;
    } else if (!target) {
        panel = parent.component('panel');
    }

    if (!panel) return;

    if (panel.constructor === Array) {
        return panel.forEach(panel => toggle(panel, type, parent, options, true));
    }

    operator = (panel.modifier('active') === true || operator === 'close') ? 'unset' : 'set';

    // close sibling panels
    if (operator === 'set' && (parent.modifier(options.keepOpenModifier) !== true) && keepOpen === false) {
        parent.component('panel').forEach(el => el.modifier('active', 'unset'));
    }

    if (panel instanceof NodeList || panel instanceof Array) {
        panel.forEach(el => el.modifier('active', operator));
    } else {
        panel.modifier('active', operator);
    }

    return parent;
}