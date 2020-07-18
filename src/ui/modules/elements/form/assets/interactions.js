export default { validator, setState }

export function validator(node, validators, fields, setErrorMessage, { strict = false, defaultMessage = 'Invalid field' } = {}) {
  if (!node) {
    return;
  }

  let [isValid, message] = [true, defaultMessage];

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

  if (typeof node.getAttribute('required') !== 'undefined' && node.getAttribute('required') !== false) {
    if (node.validity.valid === false) {
      [isValid, message] = [false, node.validationMessage];
    }
  }

  setErrorMessage(isValid ? null : message);

  if (!strict || (strict && !isValid)) {
    return isValid;
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