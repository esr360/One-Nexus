import * as app from '../../../app';
import defaults from './colors.json';

/**
 * Colors
 * 
 * @access public
 * 
 * @param {Object} custom
 */
export function colors(custom) {
    custom = app.custom('colors', custom);

    app.config.colors = Object.assign(defaults.colors, custom);
}