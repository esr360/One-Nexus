import * as app from '../../../app';
import defaults from './grid.json';

/**
 * Grid
 * 
 * @access public
 * 
 * @param {Object} custom
 */
export function grid(custom) {
    custom = app.custom('grid', custom);

    app.config.grid = Object.assign(defaults.grid, custom);
}