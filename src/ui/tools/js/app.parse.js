import { evalConfig } from './app.evalConfig';
import deepextend from 'deep-extend';

/**
 * Parse
 * 
 * @access public
 * 
 * @param {Object} default
 * @param {Object} custom
 */
export function parse(defaults, custom) {
    custom = (custom instanceof HTMLElement || custom instanceof NodeList) ? {} : custom;

    const config = evalConfig(deepextend(defaults, custom));

    delete config.modifierGlue;
    delete config.componentGlue;

    return config;
}