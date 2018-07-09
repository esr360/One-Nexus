import defaults from './accordion.json';

export default {
    toggle
}

/**
 * Toggle an accordion section
 * 
 * @param {(String|Number|HTMLElement|NodeList)} target
 * @param {('open'|'close')} type
 * @param {HTMLElement} parent
 * @param {Object} options
 */
export function toggle(target, type, parent, keepOpen = false) {
    const options = Object.assign(defaults.accordion, window.theme.accordion);

    let section, operator;

    if (parent instanceof NodeList) {
        return parent.forEach(child => toggle(target, type, child, keepOpen));
    }

    options.keepOpen = (options.keepOpen === true) ? true : false;

    // determine target accordion section
    if (typeof target === 'object' && ('target' in target)) {
        target.target.parents().reverse().forEach(parent => {
            if (parent.component('section') === true) {
                return target = parent;
            }
        });
    }

    parent = parent || target.closest('[data-module]');

    if (typeof target === 'string') {
        section = parent.querySelectorAll(target);
    } else if (typeof target === 'number') {
        section = parent.children[target - 1];
    } else if (target instanceof HTMLElement || target instanceof NodeList) {
        section = target;
    } else if (!target) {
        section = parent.component('section');
    }

    if (!section) return;

    if (section.constructor === Array) {
        return section.forEach(section => toggle(section, type, parent, options, true));
    }

    if (type) {
        operator = (type === 'open') ? 'set' : 'unset';
    } else {
        operator = section.modifier('active') === true ? 'unset' : 'set';
    }

    // close sibling sections
    if (operator === 'set' && (parent.modifier(options.keepOpenModifier) !== true) && keepOpen === false) {
        parent.component('section').forEach(el => el.modifier('active', 'unset'));
    }

    if (section instanceof NodeList || section instanceof Array) {
        section.forEach(el => el.modifier('active', operator));
    } else {
        section.modifier('active', operator);
    }

    return parent;
}