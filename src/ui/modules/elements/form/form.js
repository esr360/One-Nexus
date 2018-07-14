import dynamicCallback from '../../../tools/js/app.dynamicCallback';

export default {
    validate,
    setState
}

/**
 * Check if an input value is valid
 * 
 * @param {(String|HTMLElement)} field
 * @param {Array} validators
 * @param {Function} handler
 */
export function validate(field, validators, handler = handleValidation) {
    if (!field) return;

    if (typeof field === 'string') {
        field = document.getElementById(field);
    }

    field.setCustomValidity('');

    let [isValid, message] = [true, 'Invalid field'];

    if (validators) validators.forEach(rule => {
        if (typeof rule === 'function') {
            if (!dynamicCallback(rule, field, 'field')) isValid = false;
        }
        else if (typeof rule.rule === 'function') {
            if (!dynamicCallback(rule.rule, field, 'field')) isValid = false;
        }
        else if ((typeof rule.rule !== 'undefined' && !rule.rule) || !rule) {
            isValid = false;
        }

        if (rule !== true && rule.rule !== true) {
            message = rule.message || message;
        }
    });

    // Field is 'required'
    if (typeof field.getAttribute('required') !== 'undefined' && field.getAttribute('required') !== false) {
        if (field.validity.valid === false) {
            [isValid, message] = [false, field.validationMessage];
        }
    }

    handler(isValid, field, message);

    return isValid;
}

/**
 * Set field states
 * 
 * @param {Object} fields 
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
 * Call display rules on field
 * 
 * @private
 * 
 * @param {HTMLElement} target 
 * @param {Array} rules 
 */
function callRules(target, rules) {
    if (rules) {
        let action = 'show';

        rules.forEach(rule => {
            if (typeof rule === 'function') {
                if (!dynamicCallback(rule)) action = 'hide';
            }
            else if (!rule) action = 'hide';
        });

        target.style.display = (action === 'hide') ? 'none' : 'block';
    }
}

/**
 * Handle input validation
 * 
 * @private
 * 
 * @param {Boolean} isValid
 * @param {HTMLElement} field
 * @param {String} message
 * @param {Boolean} [recurse = true]
 */
function handleValidation(isValid, field, message, recurse = true) {
    if (field.type === 'radio' && recurse) {
        return handleValidation(isValid, document.querySelectorAll(`input[name="${field.name}"]`), message)
    }

    if (field instanceof NodeList) {
        return field.forEach($field => handleValidation(isValid, $field, message, false));
    }

    toggleStyles(field, isValid);

    if (field) field.setCustomValidity(isValid ? '' : message);

    field.addEventListener('blur', () => {
        toggleStyles(field, 'remove');

        if (field.type === 'radio') {
            [...document.querySelectorAll(`input[name="${field.name}"]`)].forEach(radio => {
                toggleStyles(radio, 'remove');
            });
        }
    });
}

/**
 * Toggle validation styles on a field
 * 
 * @private
 * 
 * @param {HTMLElement} field 
 * @param {(Boolean|String)} operator 
 */
function toggleStyles(field, operator) {
    const parentGroup = field.parents('[class*="group"]')[0];

    if (parentGroup) {
        if (typeof operator === 'boolean') {
            parentGroup.modifier(operator ? 'isInvalid' : 'isValid', 'remove');
            parentGroup.modifier(operator ? 'isValid' : 'isInvalid', 'add');
        }

        if (operator === 'remove') {
            ['isValid', 'isInvalid'].forEach(modifier => parentGroup.modifier(modifier, 'remove'));
        }
    }
}