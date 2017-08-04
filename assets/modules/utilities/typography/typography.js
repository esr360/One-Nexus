import * as app from '../../../app';
import defaults from './typography.json';

/**
 * Core
 * 
 * @access public
 * 
 * @param {Object} custom
 */
export function typography(custom) {
    custom = app.custom('typography', custom);

    app.config.typography = Object.assign(defaults.typography, custom);
}