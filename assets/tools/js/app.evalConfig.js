import * as app from '../../app';

/**
 * Evaluate function values from configuration
 * 
 * @access public
 * 
 * @param {Object} config
 */
export function evalConfig(config) {

    if (typeof config === 'string') {
        return evalValue(config);
    } 

    else if (typeof config === 'object') {
        for (let key of Object.keys(config)) {
            config[key] = evalConfig(config[key]);
        }
    }

    return config;
}

/**
 * Evaluate a single value
 * 
 * @param {String} value 
 */
function evalValue(value) {
    // If value uses the `colors().color()` function
    if (value.indexOf('color(') == 0) {
        const params = getParams(value);
        return app.colors().color(params[0], params[1]);
    }

    // If value uses the `colors().palette()` function
    else if (value.indexOf('palette(') == 0) {

    }

    // If value uses the `core()` function
    else if (value.indexOf('core(') == 0) {
        const params = getParams(value);
        return app.config.core[params[0]];
    }

    // If value uses the `typography()` function
    else if (value.indexOf('typography(') == 0) {
        const params = getParams(value);
        return app.typography()[params[0]][params[1]]
    }

    return value;
}

/**
 * Get function parameters from a stringified value
 * 
 * @param {String} value 
 */
function getParams(value) {
    return value.match(/\(([^)]+)\)/)[1].replace(/'/g, "").split(', ');
}