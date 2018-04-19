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

        // exports.validate = (field, validators) => validate(field, validators);
        // exports.setState = fields => setState(fields);

    }, defaults, custom, UI.evalConfig);

    UI.config.form = UI.parse(defaults.form, custom);

    return exports;
}

/**
 * Check if an input value is valid
 * 
 * @param {*} field 
 * @param {*} validators 
 */
export function validate(field, validators, handler = handleValidation) {
    if (!field) return;

    if (typeof field === 'string') {
        field = document.getElementById(field);
    }

    let [isValid, message] = [true, 'Invalid field'];

    if (validators) validators.forEach(rule => {
        if (typeof rule === 'function') {
            if (!UI.dynamicCallback(rule, field, 'field')) isValid = false;
        }
        else if (typeof rule.rule === 'function') {
            if (!UI.dynamicCallback(rule.rule, field, 'field')) isValid = false;
        }
        else if ((typeof rule.rule !== 'undefined' && !rule.rule) || !rule) isValid = false;

        message = rule.message || message;
    });

    handler(isValid, field, message);

    return isValid;
}

/**
 * Set field states
 * 
 * @param {*} fields 
 */
export function setState(fields) {
    fields.forEach(properties => {
        if (properties.type === 'fieldset' && properties.fields) {
            if (properties.rules) callRules(document.getElementById(properties.id), properties.rules);

            return setState(properties.fields);
        }

        callRules(document.getElementById(properties.id), properties.rules);

        if (properties.fieldset) {
            callRules(document.getElementById(properties.fieldset.id), properties.fieldset.rules);

            setState(properties.fieldset.fields);
        }

        if (properties.after) {
            callRules(document.getElementById(properties.after.id), properties.after.rules);
        }
    });
}

/**
 * Handle input validation
 * 
 * @access private
 * 
 * @param {*} field 
 * @param {*} isValid 
 */
function handleValidation(isValid, field, message) {
    const parentGroup = field.parents('[class*="group"]')[0];

    parentGroup.modifier(isValid ? 'isInvalid' : 'isValid', 'remove');
    parentGroup.modifier(isValid ? 'isValid' : 'isInvalid', 'add');

    if (field) field.setCustomValidity(isValid ? '' : message);

    field.addEventListener('blur', () => {
        parentGroup.modifier('isValid', 'remove');
        parentGroup.modifier('isInvalid', 'remove');
    });
}

/**
 * Call display rules on field
 * 
 * @param {*} target 
 * @param {*} rules 
 */
function callRules(target, rules) {
    if (rules) {
        let action = 'show';

        rules.forEach(rule => {
            if (typeof rule === 'function') {
                if (!UI.dynamicCallback(rule)) action = 'hide';
            }
            else if (!rule) action = 'hide';
        });

        target.style.display = (action === 'hide') ? 'none' : 'block';
    }
}