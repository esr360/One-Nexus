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

    const isBreakpoint = value => value.indexOf('breakpoint(') === 0;
    const isColor = value => value.indexOf('color(') === 0;
    const isPalette = value => value.indexOf('palette(') === 0;
    const isCore = value => value.indexOf('core(') === 0;
    const isTypography = value => value.indexOf('typography(') === 0;
    const isFontSize = value => value.indexOf('font-size(') === 0;
    
    let [params, requiresEval] = ['', false];

    if (
        isBreakpoint(value) || isColor(value) || isPalette(value) || isCore(value) || 
        isTypography(value) || isFontSize(value)
    ) {
        [params, requiresEval] = [getParams(value), true];
    }

    // If value uses the `breakpoint()` utility function
    if (isBreakpoint(value)) {
        value = app.config.grid.breakpoints[params[0]];
    }

    // If value uses the `color()` utility function
    else if (isColor(value)) {
        value = app.config.colors[params[0]][params[1]];
    }

    // If value uses the `palette()` utility function
    else if (isPalette(value)) {
        value = app.config.colors[params[0]];
    }

    // If value uses the `core()` function
    else if (isCore(value)) {
        value = app.config.core[params[0]];
    }

    // If value uses the `typography()` function
    else if (isTypography(value)) {
        value = app.config.typography[params[0]][params[1]];
    }

    // If value uses the `font-size()` function
    else if (isFontSize(value)) {
        value = app.config.typography.sizes[params[0]];
    }

    // recurse the function if returned value also needs to be evaluated
    if (requiresEval) value = evalValue(value);

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