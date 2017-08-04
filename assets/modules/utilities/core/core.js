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
    custom = app.custom('core', custom);

    app.config.core = Object.assign(defaults.core, custom);
}