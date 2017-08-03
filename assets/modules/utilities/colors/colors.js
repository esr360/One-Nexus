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

    const options = Object.assign(defaults, custom);

    exports.palette = palette => options.colors[palette];

    exports.color = (palette, color) => options.colors[palette][color];

    app.config.colors = Object.assign(defaults.colors, custom);

    return exports;
}