import * as app from '../../../app';
import defaults from './accordions.json';
/**
 * Accordion
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 * @param {Object} exports
 */
export function accordion(els = 'accordion', custom) {

    custom = app.custom('accordions', custom);

    app.Synergy(els, function(el, options) {

        if (!el.getAttribute('data-initialised')) {
            Array.prototype.forEach.call(el.children, function(section, index) {
                if (section.classList.contains(options.activeClass)) {
                    section.component('content')[0].classList.add(options.activeClass);
                }

                section.component('title')[0].addEventListener('click', function() {
                    clickHandler(el, section, options);
                }, false);
            });
            el.setAttribute('data-initialised', true);
        }

        exports.open = function(target) {
            app.Synergy(els, function(el) {
                toggleAccordion('open', el, target, options.activeClass);
            });
        }

        exports.close = function(target) {
            app.Synergy(els, function(el) {
                toggleAccordion('close', el, target, options.activeClass);
            });
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
 * @param {Object} parent
 * @param {(String|Number|Object)} target
 * @param {String} activeClass
 */
function toggleAccordion(type, parent, target, activeClass) {
    let section, operator;

    if (type === 'open' ) { operator = 'add' }
    if (type === 'close') { operator = 'remove' }

    if (typeof target === 'string') {
        section = parent.querySelectorAll(target);
    } else if (typeof target === 'number') {
        section = parent.children[target - 1];
    } else if (target instanceof HTMLElement || target instanceof NodeList) {
        section = target;
    }

    if (section instanceof NodeList) {
        Array.prototype.forEach.call(section, function(el) {
            toggleActiveClass(el);
        });
    } else {
        toggleActiveClass(section);
    }

    function toggleActiveClass(el) {
        el.classList[operator](activeClass);
        el.component('content')[0].classList[operator](activeClass);
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
        Array.prototype.forEach.call(
            accordion.component('section'), function(section, index) {
                toggleAccordion('close', accordion, section, options.activeClass);
            }
        );
    }

    if (active) {
        toggleAccordion('close', accordion, section, options.activeClass);
    } else {
        toggleAccordion('open', accordion, section, options.activeClass);
    }
}