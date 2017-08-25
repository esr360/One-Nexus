import * as app from '../../app';

/**
 * Parse
 * 
 * @access public
 * 
 * @param {Object} default
 * @param {Object} custom
 */
export function parse(defaults, custom) {
    return app.evalConfig(app.deepextend(defaults, custom));
}