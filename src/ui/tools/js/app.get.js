/**
 * Get a deep key from an object
 * 
 * @access public
 * 
 * @param {Object} deepKey
 * @param {Function} callback
 */
export default function get(deepKey, callback) {
    let value;

    try {
        value = deepKey;
    } catch(error) {
        value = false;
    }

    if (value && typeof calback === 'function') {
        callback(deepkey);
    }
}