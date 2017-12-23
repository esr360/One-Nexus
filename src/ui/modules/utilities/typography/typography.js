import * as app from '../../../ui';
import defaults from './typography.json';

/**
 * Core
 * 
 * @access public
 * 
 * @param {Object} custom
 */
export function typography(custom) {
    app.config.typography = app.parse(defaults.typography, app.custom('typography', custom));
}