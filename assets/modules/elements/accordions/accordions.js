import {synergy as $module} from '../../../app';
/**
 * Accordion
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 * @param {Object} exports
 */
export default function(els, custom, exports = {}) {

    $module(els, function(el, options, methods) {

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

    }, require('./accordions.json'), custom);

    return exports;
};