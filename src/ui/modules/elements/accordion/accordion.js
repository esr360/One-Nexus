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

    app.Synergy(custom.name || defaults.accordion.name, (el, options) => {

        if (!el.getAttribute('data-initialised')) {
            el.component('section').forEach((section, index) => {
                if (section.modifier('active')) {
                    section.component('content')[0].modifier('active', 'set');
                }

                section.component('title')[0].addEventListener('click', () => {
                    clickHandler(el, section, options);
                }, false);
            });
            el.setAttribute('data-initialised', true);
        }

        exports.open  = target => exports.toggle('open', target);

        exports.close = target => exports.toggle('close', target);

        exports.toggle = (type, target) => toggleAccordion(type, el, target, options);

    }, defaults, custom, app.evalConfig);

    app.config.accordion = app.parse(defaults.accordion, custom);

    return exports;
}

/**
 * clickHandler
 * 
 * @access private
 * 
 * @param {Object} accordion
 * @param {Object} section
 * @param {Object} options
 */
function clickHandler(accordion, section, options) {
    var active = section.modifier('active', 'isset');

    if (!accordion.modifier(options.keepOpenModifier)) {
        accordion.component('section').forEach(el => toggleAccordion('close', accordion, el, options));
    }

    if (active) {
        toggleAccordion('close', accordion, section, options);
    } else {
        toggleAccordion('open', accordion, section, options);
    }
}

/**
 * toggleAccordion
 * 
 * @access private
 * 
 * @param {('open'|'close')} type
 * @param {HTMLElement} parent
 * @param {(String|Number|HTMLElement|NodeList)} target
 * @param {Object} options
 */
function toggleAccordion(type, parent, target, options) {
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

    if (section instanceof NodeList) {
        section.forEach(el => toggleActiveClass(el));
    } else {
        toggleActiveClass(section);
    }

    function toggleActiveClass(el) {
        el.modifier('active', operator);
        el.component('title')[0].modifier('active', operator);
        el.component('content')[0].modifier('active', operator);
    }
}