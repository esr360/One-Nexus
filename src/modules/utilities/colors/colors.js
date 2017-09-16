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
    app.config.colors = app.parse(defaults.colors, app.custom('colors', custom));
}