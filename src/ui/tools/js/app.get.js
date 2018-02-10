/**
 * Get a deep key from an object
 * 
 * @access public
 * 
 * @param {Object} deepKey
 * @param {Function} callback
 */
export default function get(deepKey, callback, parent) {
    let value;

    try {
        value = parent ? eval(`${parent}.${deepKey}`) : eval(deepKey);
    } catch(error) {
        value = false;
    }

    if (value && typeof callback === 'function') {
        callback(value);
    }

    exports.config = module => get(`window.UI.config.${module}`);

    return deepKey ? value : exports;
}