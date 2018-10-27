import defaults from './config.js';

export default {
    init, 
    toggle
}

/**
 * Initialise an HTML element as an accordion
 * 
 * @param {HTMLElement} element 
 */
export function init(element) {
    element.getComponents('panel').forEach(panel => panel.addEventListener('click', toggle));
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
    const options = Object.assign(defaults(window.theme), window.theme.accordion);

    let panel, operator;

    if (parent instanceof NodeList) {
        return parent.forEach(child => toggle(target, type, child, keepOpen));
    }

    options.keepOpen = (options.keepOpen === true) ? true : false;

    // determine target accordion panel
    if (typeof target === 'object' && ('target' in target)) {
        target = target.target.closest('[data-component="panel"]');
    }

    parent = parent || target.closest(`[data-module="${options.name}"]`);

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

    operator = (panel.modifier('active') || operator === 'close') ? 'unset' : 'set';

    // close sibling panels
    if (operator === 'set' && !parent.modifier(options.keepOpenModifier) && keepOpen === false) {
        parent.component('panel').forEach(el => el.modifier('active', 'unset'));
    }

    if (panel instanceof NodeList || panel instanceof Array) {
        panel.forEach(el => el.modifier('active', operator));
    } else {
        panel.modifier('active', operator);
    }

    parent.repaint && parent.repaint();

    return parent;
}