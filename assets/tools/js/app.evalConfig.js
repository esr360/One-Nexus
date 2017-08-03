import * as app from '../../app';

/**
 * Evaluate function values from configuration
 * 
 * @access public
 * 
 * @param {Object} config
 */
export function evalConfig(config) {

    for (let key of Object.keys(config)) {

        // If value uses the `colors().color()` function
        if (config[key].indexOf('color(') == 0) {
            const params = config[key].match(/\(([^)]+)\)/)[1].replace(/'/g, "").split(', ');
            config[key] = app.colors().color(params[0], params[1]);
        }

        // If value uses the `colors().palette()` function
        else if (config[key].indexOf('palette(') == 0) {

        }

        // If value uses the `core()` function
        else if (config[key].indexOf('core(') == 0) {

        }

    }

    return config;
}