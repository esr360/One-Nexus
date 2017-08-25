import * as app from '../../../app';
import defaults from './core.json';

/**
 * Core
 * 
 * @access public
 * 
 * @param {Object} custom
 */
export function core(custom) {
    app.config.core = app.parse(defaults.core, app.custom('core', custom));
}