/**
 * Dynamically call a function on a set of HTML elements
 * 
 * @param {Function} callback - function where expected params are HTMLElement ID's
 * @param {HTMLElement} element - element to use if callback param === scope
 * @param {string} [scope] - scope to match callback param
 * 
 * @example
 * dynamicCallback(foo => foo.tagName === 'INPUT' && foo.value.length > 8);
 */
export default function dynamicCallback(callback, element, scope) {
    // get field ids from stringified function
    const ids = String(callback).match(/\(([^)]+)\)/)[1].replace(/\s/g, '').split(',');

    let elements = [];

    // get field from id
    ids.forEach(id => elements.push(id === scope ? element: document.getElementById(id)));

    return callback(...elements);
}