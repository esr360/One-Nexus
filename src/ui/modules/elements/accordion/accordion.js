import * as app from '../../../ui';
import defaults from './accordion.json';

/**
 * Accordion
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
export default function accordion(custom = {}) {
    app.Synergy(custom.name || defaults.accordion.name, (accordion, options) => {

        accordion.component('section').forEach(section => {
            if (section.modifier('active')) {
                section.component('content')[0].modifier('active', 'set');
            }

            section.component('title')[0].addEventListener('click', () => {
                var active = section.modifier('active', 'isset');
            
                toggleAccordion(active ? 'close' : 'open', accordion, section, options);
            }, false);
        });

        exports.open  = target => toggleAccordion('open', accordion, target, options);
        exports.close = target => toggleAccordion('close', accordion, target, options);

    }, defaults, custom, app.evalConfig);

    app.config.accordion = app.parse(defaults.accordion, custom);

    return exports;
}

/**
 * toggleAccordion
 * 
 * @param {('open'|'close')} type
 * @param {HTMLElement} parent
 * @param {(String|Number|HTMLElement|NodeList)} target
 */
export function toggleAccordion(type, parent, target, options) {
    let section;

    const operator = (type === 'open') ? 'set' : 'unset';

    if (typeof target === 'string') {
        section = parent.querySelectorAll(target);
    } else if (typeof target === 'number') {
        section = parent.children[target - 1];
    } else if (target instanceof HTMLElement || target instanceof NodeList) {
        section = target;
    } else if (!target) {
        section = parent.component('section');
    }

    // close sibling sections
    if (type === 'open' && !parent.modifier(options.keepOpenModifier)) {
        parent.component('section').forEach(el => toggleActiveClass(el, 'unset'));
    }

    if (section instanceof NodeList) {
        section.forEach(el => toggleActiveClass(el, operator));
    } else {
        toggleActiveClass(section, operator);
    }
}

/**
 * toggleActiveClass
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