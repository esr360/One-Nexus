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
export function carousel(els = 'carousel', custom) {

    custom = app.custom('carousels', custom);

    app.Synergy(els, function(el, options) {
        // Create new Flickity instance
        var carousel = new app.Flickity(el, options.Flickity);

        // Add appropriate classes to carousel elements
        for (let [key, value] of Object.entries(options.components)) {
            if (value) {
                const identifier = `${options.name}_${key}`;
                const component = el.querySelector(value);
                component.classList.add(identifier);
            }
        }
    }, defaults, custom);

    app.config.carousels = Object.assign(defaults.carousels, custom);

    return exports;
};