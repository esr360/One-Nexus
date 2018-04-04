import * as UI from '../../../ui';
import defaults from './form.json';
/**
 * Form
 * 
 * @param {Object} custom
 */
export default function form(custom) {

    const TARGET = UI.getTarget('form', defaults, custom);

    UI.Synergy(TARGET, (form, options) => {

        exports.validate = (field, rules) => validate(field, rules);

    }, defaults, custom, UI.evalConfig);

    UI.config.form = UI.parse(defaults.form, custom);

    return exports;
}

/**
 * Validate a form field
 * 
 * @param {*} form 
 */
export function validate(field, rules) {
    console.log(field, rules);
}