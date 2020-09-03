import React from 'react';

import config from './assets/config';
import styles from './assets/styles';

const inputTypes = [
  'text',
  'email',
  'password',
  'search',
  'tel',
  'url',
  'number'
];

const otherTypes = [
  'color',
  'date',
  'datetime-local',
  'file',
  'hidden',
  'image',
  'month',
  'range',
  'reset',
  'time',
  'week'
];

const formContext = React.createContext({});

const Form = ({ fields, submit, children, ...props }) => {
  const { name, validateFieldsOn } = useConfig(props);
  const [formFields, updateFormFields] = React.useState({});

  const handleSubmit = () => Object.values(formFields).forEach(field => validate(field, formFields));

  const refreshVisibility = () => Object.values(formFields).forEach(({ visibility, show, hide }) => {
    visibility && (visibility.every(determiner => determiner(formFields)) ? show() : hide());
  });

  return (
    <formContext.Provider value={{ formFields, updateFormFields, validateFieldsOn, refreshVisibility }}>
      <Module name={name} {...props}>
        {fields && <RenderFields fields={fields} />}

        {children && children}

        {submit && (
          <Component name='footer'>
            <Component name='submit' tag='input' type='submit' value={submit} onClick={handleSubmit} {...getAttrs(submit)} />
          </Component>
        )}
      </Module>
    </formContext.Provider>
  );
}

Form.defaultProps = { config, styles };

Form.Field = ({ properties, group }) => {
  const host = React.createRef();
  const { formFields, updateFormFields, validateFieldsOn, refreshVisibility } = React.useContext(formContext);

  const { id, label, type, icon, options, fieldset, render, after, hidden } = properties;
  const { visibility, validators, onValidation, validateOn = validateFieldsOn } = properties;

  const [isHidden, setIsHidden] = React.useState(hidden);
  const [isValid, setIsValid] = React.useState();
  const [errorMessage, setErrorMessage] = React.useState();

  const eventHandler = event => () => (refreshVisibility(), validateOn.includes(event) && validate(formFields[id], formFields));
  const fieldObject = host => ({ node: host.current, setIsValid, setErrorMessage, validators, onValidation, visibility });

  if (id) {
    React.useEffect(() => updateFormFields(prev => ({ ...prev, [id]: {
      validate: fields => validate(fieldObject(host), fields),
      isValid: fields => validator(host.current, validators, fields)[0],
      show: () => setIsHidden(false),
      hide: () => setIsHidden(true),
      value: () => host.current.value,

      ...fieldObject(host)
    }})), []);
  }

  const modifiers = {
    'has-icon': Boolean(properties.icon),
    'compound': Boolean(properties.compound),
    'hidden': Boolean(isHidden),
  }

  return (
    <Component name='group' {...modifiers} valid={isValid === true} invalid={isValid === false}>
      {label && (type !== 'checkbox' && type !== 'radio') && <Component name='label' htmlFor={id} content={label} />}

      {inputTypes.includes(type) && (
        <Component name='field'>
          <Component tag='input' host={host} {...getAttrs(properties)} onBlur={eventHandler('blur')} onKeyUp={eventHandler('change')} />

          {icon && <Icon as='icon' glyph={icon} />}
        </Component>
      )}

      {otherTypes.includes(type) && (
        <input {...getAttrs(properties)}/>
      )}

      {(type === 'checkbox' || type === 'radio') && (
        <Component name='selection' {...{[type]:true}}>
          <Component name={type} tag='input' host={host} {...getAttrs(properties)} onChange={eventHandler('change')} group={group} />

          {label && <Component name='label' htmlFor={id} content={label} />}
        </Component>
      )}

      {type === 'textarea' && (
        <Component name='input'ag='textarea' {...getAttrs(properties)} />
      )}

      {type === 'select' && (
        <Component name='field'>
          <Component name='select' tag='select' host={host} {...getAttrs(properties)} onChange={eventHandler('change')}>
            {options.map((options) => (
              <option value={options.value} {...getAttrs(options)}>{options.value}</option>
            ))}
          </Component>
        </Component>
      )}

      {fieldset && (
        <Form.Fieldset properties={fieldset} />
      )}

      {type ==='HTML' && (
        <div {...getAttrs(properties)}>{render}</div>
      )}

      {after && (
        <div {...getAttrs(after)}>{after.render}</div>
      )}

      {errorMessage && <Component name='error'>{errorMessage}</Component>}
    </Component>    
  );
}

Form.Fieldset = ({ properties: { legend, fields, id, after, ...props }}) => (
  <Component name='fieldset' {...getAttrs(props)}>
    {legend && <Component name='legend'>{legend}</Component>}

    <RenderFields fields={fields} group={id} />

    {after && <div {...getAttrs(after)}>{after.render}</div>}
  </Component>
);

export default Form;

/**
 * Render Fields/Fieldset
 */
const RenderFields = ({ fields, group }) => fields.map((properties, index) => {
  const Render = properties.type === 'fieldset' ? Form.Fieldset : Form.Field;

  return <Render key={index} properties={properties} group={group} />;
});

/**
 * Validator
 */
function validator(node, validators = [], formFields, { defaultMessage = 'Invalid field' } = {}) {
  let [isValid, message] = [true, defaultMessage];

  validators.forEach(rule => {
    message = (rule.message || message), rule = (rule.rule ?? rule);

    if (typeof rule === 'function' ? !rule(node.value, formFields) : !rule) {
      isValid = false;
    }
  });

  if (node.validity.valid === false) {
    [isValid, message] = [false, node.validationMessage];
  }

  return [isValid, message];
}

/**
 * Validate
 */
function validate({ node, setErrorMessage, setIsValid, validators, onValidation }, formFields) {
  const [isValid, message] = validator(node, validators, formFields);

  setErrorMessage(isValid ? null : message);

  setIsValid(isValid);

  if (onValidation) {
    onValidation({ value: node.value, isValid, message }, formFields);
  }
}

/**
 * Get Input Attributes
 */
function getAttrs({ attributes = {}, type, required } = {}) {
  return Object.assign(attributes, { type, required });
}