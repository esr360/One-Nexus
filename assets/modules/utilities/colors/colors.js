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

    const options = Object.assign(defaults.colors, custom);

    exports.palette = palette => options[palette];

    exports.color = (palette, color) => options[palette][color];

    app.config.colors = options;

    return exports;
}