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
export function accordion(els, custom) {

    app.synergy(els, function(el, options) {

        let wrapper = el;

        Array.prototype.forEach.call(el.children, function(el, index) {
            if(el.classList.contains(options.activeClass)) {
                el.component('content')[0].classList.add(options.activeClass);
            }

            el.component('title')[0].addEventListener('click', function(e) {
                var active = el.classList.contains(options.activeClass);

                if (!wrapper.modifier(options.keepOpenModifier)) {
                    Array.prototype.forEach.call(
                        wrapper.component('section'), function(el, index) {
                            el.classList.remove(options.activeClass);
                            el.component('content')[0].classList.remove(options.activeClass);
                        }
                    );
                }

                if (active) {
                    el.classList.remove(options.activeClass);
                    el.component('content')[0].classList.remove(options.activeClass);
                } else {
                    el.classList.add(options.activeClass);
                    el.component('content')[0].classList.add(options.activeClass);
                }
            }, false);
        });

    }, defaults, custom);

    app.config.accordions = Object.assign(defaults.accordions, custom);

    return exports;
};