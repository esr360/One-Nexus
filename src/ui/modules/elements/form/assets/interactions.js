export default { validator, setState }

export function validator(field, validators, fields, handler = handleValidation) {
  if (!field) {
    return;
  }

  field.setCustomValidity('');

  let [isValid, message] = [true, 'Invalid field'];

  if (validators) validators.forEach(rule => {
    if (typeof rule === 'function') {
      if (!rule(fields)) {
        isValid = false;
      }
    }
    else if (typeof rule.rule === 'function') {
      if (!rule.rule(fields)) {
        isValid = false;
      }
    }
    else if ((typeof rule.rule !== 'undefined' && !rule.rule) || !rule) {
      isValid = false;
    }

    if (rule !== true && rule.rule !== true) {
      message = rule.message || message;
    }
  });

  if (typeof field.getAttribute('required') !== 'undefined' && field.getAttribute('required') !== false) {
    if (field.validity.valid === false) {
      [isValid, message] = [false, field.validationMessage];
    }
  }

  handler(isValid, field, message);

  return isValid;
}

function handleValidation(isValid, field, message, recurse = true) {
  if (field.type === 'radio' && recurse) {
    return handleValidation(isValid, document.querySelectorAll(`input[name="${field.name}"]`), message)
  }

  if (field instanceof NodeList) {
    return field.forEach($field => handleValidation(isValid, $field, message, false));
  }

  if (field) {
    field.setCustomValidity(isValid ? '' : message);
  }
}

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

function callRules(target, rules, fields) {
  if (rules) {
    let action = 'show';

    rules.forEach(rule => {
      if (typeof rule === 'function') {
        if (!rule(fields)) {
          action = 'hide';
        }
      }
      else if (!rule) action = 'hide';
    });

    target.style.display = (action === 'hide') ? 'none' : 'block';
  }
}