import * as app from '../../app';

/**
 * Custom
 * 
 * @access public
 * 
 * @param {String} module
 * @param {Object} custom
 */
export function custom(module, custom) {
    if (typeof app.theme[module] !== 'undefined' && !custom) {
        return app.theme[module];
    }
    return custom;
}