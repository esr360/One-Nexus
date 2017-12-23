import * as app from '../../../ui';
import defaults from './grid.json';

/**
 * Grid
 * 
 * @access public
 * 
 * @param {Object} custom
 */
export function grid(custom) {
    app.config.grid = app.parse(defaults.grid, app.custom('grid', custom));
}