import * as app from '../../../app';
import defaults from './scroll-top.json';

/**
 * Preloader
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
export function scrollTop(els = 'scroll-top', custom) {

    custom = app.custom('scroll-top', custom);

    app.Synergy(els, (el, options) => {

        window.addEventListener('scroll', () => {
            exports[(window.scrollY > options.activePosition) ? 'show' : 'hide']();
        });

        exports.show = () => el.modifier('visible', 'add');
        exports.hide = () => el.modifier('visible', 'remove');

    }, defaults, custom);

    app.config['scroll-top'] = Object.assign(defaults['scroll-top'], custom);

    return exports;
};