import * as UI from '../../../ui';
import defaults from './accordion.json';

/**
 * Accordion
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
export default function accordion(custom = {}) {
    UI.Synergy(custom.name || defaults.accordion.name, (accordion, options) => {

        accordion.component('section').forEach(section => {
            if (section.modifier('active')) {
                section.component('content')[0].modifier('active', 'set');
            }

            section.component('title')[0].addEventListener('click', () => {
                var active = section.modifier('active', 'isset');
            
                toggle(section, active ? 'close' : 'open', accordion, options);
            }, false);
        });

        exports.open  = target => toggle(target, 'open', accordion, options);
        exports.close = target => toggle(target, 'close', accordion, options);

    }, defaults, custom, UI.evalConfig);

    UI.config.accordion = UI.parse(defaults.accordion, custom);

    return exports;
}

/**
 * Toggle an accordion section
 * 
 * @param {(String|Number|HTMLElement|NodeList)} target
 * @param {('open'|'close')} type
 * @param {HTMLElement} parent
 * @param {Object} options
 */
export function toggle(target, type, parent, options = defaults) {
    let section, operator;

    // merge passed options with window options
    options = UI.deepextend(options, UI.get().config('accordion'));

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

    if (type) {
        operator = (type === 'open') ? 'set' : 'unset';
    } else {
        operator = target.modifier('active') === true ? 'unset' : 'set';
    }

    // close sibling sections
    if (operator === 'set' && (parent.modifier(options.keepOpenModifier) !== true)) {
        parent.component('section').forEach(el => toggleActiveClass(el, 'unset'));
    }

    if (section instanceof NodeList) {
        section.forEach(el => toggleActiveClass(el, operator));
    } else {
        toggleActiveClass(section, operator);
    }
}

/**
 * Toggle acive modifiers on accordion elements
 * 
 * @access private
 * 
 * @param el
 * @param operator
 */
function toggleActiveClass(el, operator) {
    el.modifier('active', operator);
    el.component('title')[0].modifier('active', operator);
    el.component('content')[0].modifier('active', operator);
}