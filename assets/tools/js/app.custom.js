import app from '../../app';

/**
 * Custom
 * 
 * @access public
 * 
 * @param {String} module
 * @param {Object} custom
 */
export function custom(module, custom) {
    return (typeof app.theme[module] !== 'undefined' && !custom) ? app.theme[module] : custom;
}