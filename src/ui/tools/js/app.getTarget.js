import get from './app.get';

/**
 * Get target value to pass to a modlue
 * 
 * @param {String} module
 * @param {Object} defaults
 * @param {Object} custom
 */
export default function getTarget(module, defaults, custom) {
    return (typeof custom !== 'undefined') ? custom : get().config(module).name || defaults[module].name;
}