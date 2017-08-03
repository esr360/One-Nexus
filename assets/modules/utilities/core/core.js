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

    const options = Object.assign(defaults.core, custom);

    app.config.core = Object.assign(defaults.core, custom);

    console.log(app.evalConfig(options));

    return options;
}