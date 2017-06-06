import * as app from '../../../app';
import defaults from './carousels.json';
/**
 * Carousel
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
export function carousel(els, custom) {

    app.synergy(els, function(el, options) {

    }, defaults, custom);

    app.config.carousels = Object.assign(defaults.carousels, custom);

    return exports;
};