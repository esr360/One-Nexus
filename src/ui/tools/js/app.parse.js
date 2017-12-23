import * as app from '../../ui';

/**
 * Parse
 * 
 * @access public
 * 
 * @param {Object} default
 * @param {Object} custom
 */
export function parse(defaults, custom) {
    const config = app.evalConfig(app.deepextend(defaults, custom));

    delete config.modifierGlue;
    delete config.componentGlue;

    return config;
}