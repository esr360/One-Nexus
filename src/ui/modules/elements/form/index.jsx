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

const FormContext = React.createContext({});

const Form = ({ fields, submit, children, ...props }) => {
  const { name, validateFieldsOn } = useConfig(props);
  const [formFields, updateFormFields] = React.useState({});

  const controlledElements = Object.values(formFields).filter(({ visible }) => visible);

  const refreshVisibility = () => {
    controlledElements.forEach(({ visible, show, hide }) => {
      visible.every(determiner => determiner(formFields)) ? show() : hide();
    });
  }

  const handleSubmit = () => Object.values(formFields).forEach(field => validate(field, formFields));

  React.useEffect(() => refreshVisibility(), [formFields]);

  return (
    <FormContext.Provider value={{ formFields, updateFormFields, validateFieldsOn, refreshVisibility }}>
      <Module name={name} tag='form' {...props}>
        {fields && <RenderFields fields={fields} />}

        {children && children}

        {submit && (
          <Component name='footer'>
            <Button as='button' type='submit' render={submit} onClick={handleSubmit} />
          </Component>
        )}
      </Module>
    </FormContext.Provider>
  );
}

Form.defaultProps = { config, styles };

Form.Field = properties => {
  const host = React.createRef();
  const { formFields, updateFormFields, validateFieldsOn, refreshVisibility } = React.useContext(FormContext);

  const { id, label, type, icon, group, options, fieldset, render, after } = properties;
  const { visible, validators, onValidation, validateOn = validateFieldsOn } = properties;

  const [isValid, setIsValid] = React.useState();
  const [errorMessage, setErrorMessage] = React.useState();

  const eventHandler = event => () => {
    refreshVisibility();
    validateOn.includes(event) && validate(formFields[id], formFields);
  }

  const modifiers = {
    valid: isValid === true,
    invalid: isValid === false,
    hasIcon: Boolean(properties.icon)
  }

  React.useEffect(() => {
    const fieldProps = { node: host.current, setIsValid, setErrorMessage, validators, onValidation };

    updateFormFields(prev => ({ 
      ...prev, 

      [id]: {
        ...prev[id],
        ...fieldProps,

        validate: fields => validate(fieldProps, fields),
        isValid: fields => validator(fieldProps.node, validators, fields)[0],
        value: () => fieldProps.node.value,
        checked: () => fieldProps.node.checked,
      }
    }));
  }, []);

  return (
    <Form.ControlledElement name='group' {...{ id, visible, modifiers }}>
      {label && (type !== 'checkbox' && type !== 'radio') && (
        React.isValidElement(label) ? label : <Component name='label' roles={['errorSignal']} htmlFor={id} render={label} />
      )}

      {inputTypes.includes(type) && (
        <Component name='field'>
          <Component 
            tag='input' 
            roles={['errorSignal']}
            host={host} 
            onBlur={eventHandler('blur')} 
            onKeyUp={eventHandler('change')}

            {...getAttrs(properties)} 
          />

          {icon && <Icon as='icon' roles={['errorSignal']} glyph={icon} />}
        </Component>
      )}

      {otherTypes.includes(type) && <input {...getAttrs(properties)} />}

      {(type === 'checkbox' || type === 'radio') && (
        <Component name='selection' {...{[type]:true}}>
          <SubComponent name='wrapper' tag='label'>
            <Component name={type} tag='input' host={host} {...getAttrs(properties)} onChange={eventHandler('change')} group={group} />
            <Component name='label'>{label}</Component>
          </SubComponent>
        </Component>
      )}

      {type === 'textarea' && <Component name='input'ag='textarea' {...getAttrs(properties)} />}

      {type === 'select' && (
        <Component name='field'>
          <Component tag='select' roles={['errorSignal']} host={host} {...getAttrs(properties)} onChange={eventHandler('change')}>
            {options.map((options) => (
              <option value={options.value} {...getAttrs(options)}>{options.value}</option>
            ))}
          </Component>
        </Component>
      )}

      {fieldset && <Form.Fieldset {...fieldset} />}

      {type ==='HTML' && <div {...getAttrs(properties)}>{render}</div>}

      {errorMessage && <Component name='errorSignal'>{errorMessage}</Component>}

      {after && <Form.ControlledElement name='after' {...after} />}
    </Form.ControlledElement>    
  );
}

Form.Fieldset = ({ children, legend, fields, id, after, ...props }) => (
  <Form.ControlledElement id={id} name='fieldset' tag='fieldset' {...props}>
    {legend && React.isValidElement(legend) ? legend : <Component name='legend'>{legend}</Component>}

    {fields && <RenderFields fields={fields} group={id} />}

    {children && children}

    {after && <Form.ControlledElement name='after' {...after} />}
  </Form.ControlledElement>
);

Form.ControlledElement = ({ tag='div', name = 'fragment', id, visible, modifiers, ...props }) => {
  const { formFields, updateFormFields } = React.useContext(FormContext);
  const [isHidden, setIsHidden] = React.useState(false);

  React.useEffect(() => {
    if (!formFields[id]) {
      updateFormFields(prev => ({
        ...prev, 

        [id]: {
          ...prev[id], 
          visible,
          show: () => setIsHidden(false),
          hide: () => setIsHidden(true)
        }
      }));
    }
  });

  return (
    <Component name={name} roles={['fragment']} tag={tag} hidden={isHidden} {...getAttrs(props)} {...modifiers} {...props}>
      {props.render || props.children}
    </Component>
  );
}

export default Form;

/**
 * Render Fields/Fieldset
 */
const RenderFields = ({ fields, group }) => fields.map((props, index) => {
  const Render = props.type === 'fieldset' ? Form.Fieldset : Form.Field;

  return <Render key={index} group={group} {...props} />;
});

/**
 * Validator
 */
function validator(node, validators = [], formFields, { defaultMessage = 'Invalid field' } = {}) {
  let [isValid, message] = [true, defaultMessage];

  validators.forEach(rule => {
    message = (rule.message || message), rule = (rule.rule ?? rule);

    const value = ['checkbox', 'radio'].some($ => node.type === $) ? node.checked : node.value;

    if (typeof rule === 'function' ? !rule(value, formFields) : !rule) {
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
  if (!node) {
    return;
  }

  const [isValid, message] = validator(node, validators, formFields);
  const value = ['checkbox', 'radio'].some($ => node.type === $) ? node.checked : node.value;

  setErrorMessage(isValid ? null : message);

  setIsValid(isValid);

  if (onValidation) {
    onValidation({ value, isValid, message }, formFields);
  }
}

/**
 * Get Input Attributes
 */
function getAttrs({ attributes = {}, type, required, selected, disabled } = {}) {
  return Object.assign(attributes, { type, required, selected, disabled });
}