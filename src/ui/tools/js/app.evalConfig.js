import * as app from '../../ui';

/**
 * Evaluate function values from configuration
 * 
 * @access public
 * 
 * @param {Object} config
 */
export function evalConfig(config) {

    if (config instanceof Array) {
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

    const FUNCTIONS = [
        'breakpoint',
        'color',
        'palette',
        'core',
        'typography',
        'typeface',
        'font-size'
    ];
    
    let requiresEval = false;

    FUNCTIONS.forEach(func => {

        const FUNC_NAME = getFunctionName(value);
        const PARAMS = getParams(value);

        if (FUNC_NAME === func) {

            requiresEval = true;

            if (FUNC_NAME === 'breakpoint') {
                value = app.config.grid.breakpoints[PARAMS[0]];
            }

            else if (FUNC_NAME === 'color') {
                value = app.config.colors[PARAMS[0]][PARAMS[1]];
            }

            else if (FUNC_NAME === 'palette') {
                value = app.config.colors[PARAMS[0]];
            }

            else if (FUNC_NAME === 'core') {
                value = app.config.core[PARAMS[0]];
            }

            else if (FUNC_NAME === 'typography') {
                value = app.config.typography[PARAMS[0]][PARAMS[1]];
            }

            else if (FUNC_NAME === 'typeface') {
                value = app.config.typography.typefaces[PARAMS[0]];
            }

            else if (FUNC_NAME === 'font-size') {
                value = app.config.typography.sizes[PARAMS[0]];
            }
        }

    });

    // recurse the function if returned value also needs to be evaluated
    if (requiresEval) value = evalValue(value);

    return value;
}

/**
 * Get function name
 * 
 * @param {String} string 
 */
function getFunctionName(value) {
    if (value instanceof Array && typeof value[0] === 'string' && value[0].indexOf('#') === 0) {
        return value[0].slice(1).toLowerCase();
    }

    return value;
}

/**
 * Get function parameters
 * 
 * @param {String} value 
 */
function getParams(value) {
    return (value instanceof Array) ? value.slice(1) : value;
}