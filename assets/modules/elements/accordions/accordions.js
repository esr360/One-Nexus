import * as app from '../../../app';
import defaults from './accordions.json';

/**
 * Accordion
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
export function accordion(els = 'accordion', custom) {

    custom = app.custom('accordions', custom);

    app.Synergy(els, (el, options) => {

        if (!el.getAttribute('data-initialised')) {
            el.component('section').forEach((section, index) => {
                if (section.classList.contains(options.activeClass)) {
                    section.component('content')[0].classList.add(options.activeClass);
                }

                section.component('title')[0].addEventListener('click', () => {
                    clickHandler(el, section, options);
                }, false);
            });
            el.setAttribute('data-initialised', true);
        }

        exports.open = target => {
            app.Synergy(els, el => toggleAccordion('open', el, target, options));
        }

        exports.close = target => {
            app.Synergy(els, el => toggleAccordion('close', el, target, options));
        }

    }, defaults, custom);

    app.config.accordions = Object.assign(defaults.accordions, custom);

    return exports;
};

/**
 * toggleAccordion
 * 
 * @access private
 * 
 * @param {('open'|'close')} type
 * @param {HTMLElement} parent
 * @param {(String|Number|HTMLElement|NodeList)} target
 * @param {String} activeClass
 */
function toggleAccordion(type, parent, target, options) {
    let section;

    const operator = (type === 'open') ? 'add' : ((type === 'close') ? 'remove' : '');
    const animate  = (type === 'open') ? 'slideDown' : ((type === 'close') ? 'slideUp' : '');

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
        el.classList[operator](options.activeClass);
        el.component('content')[0].classList[operator](options.activeClass);
    }
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
    var active = section.classList.contains(options.activeClass);

    if (!accordion.modifier(options.keepOpenModifier)) {
        accordion.component('section').forEach(el => toggleAccordion('close', accordion, el, options));
    }

    if (active) {
        toggleAccordion('close', accordion, section, options);
    } else {
        toggleAccordion('open', accordion, section, options);
    }
}