import config from './assets/config';
import { validator, setState } from './assets/interactions';
import styles from './assets/styles';

if (typeof React === 'undefined') {
  var React = require('react');
}

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

/**
 * Form
 */

const formContext = React.createContext({});

const Form = ({ fields, submit, ...props }) => {
  const { name, validateFieldsOn } = useConfig(props);
  const [formFields, updateFormFields] = React.useState({});

  const handleSubmit = () => validateFields(formFields, null, true);

  return (
    <formContext.Provider value={{ formFields, updateFormFields, validateFieldsOn }}>
      <Module name={name} {...props}>
        <RenderFields fields={fields} />

        {submit !== false && (
          <Component name='footer'>
            <Component name='submit' tag='input' type='submit' value={submit} onClick={handleSubmit} {...getInputAttrs(submit)} />
          </Component>
        )}
      </Module>
    </formContext.Provider>
  );
}

Form.defaultProps = { config, styles }

/**
 * Form Field
 */

Form.Field = ({ properties, ...props }) => {
  const { formFields, updateFormFields, validateFieldsOn } = React.useContext(formContext);
  const [REF, isValid, setIsValid] = [React.createRef(), ...React.useState()];
  const [errorMessage, setErrorMessage] = React.useState();

  const { id, label, type, icon, options, fieldset, render, after } = properties;
  const { validators, onValidation, validateOn = validateFieldsOn } = properties;

  const onBlur = ({ target }) => {
    if (validateOn.includes('blur')) {
      setIsValid(validator(target, validators, formFields, setErrorMessage, { onValidation }));
    }
  }

  const onChange = ({ target }) => {
    if (validateOn.includes('change')) {
      setIsValid(validator(target, validators, formFields, setErrorMessage, { onValidation }));
    }
  }

  React.useEffect(() => {
    if (id) updateFormFields(formFields => ({ ...formFields, [id]: { 
      node: REF.current, 
      validators,
      setIsValid,
      setErrorMessage 
    } }));
  }, []);

  return (
    <Component name='group' {...getModifiers(properties)} valid={isValid === true} invalid={isValid === false}>
      {label && (type !== 'checkbox' && type !== 'radio') && <Component name='label' htmlFor={id} content={label} />}

      {inputTypes.includes(type) && (
        <Component name='field'>
          <Component tag='input' host={REF} {...getInputAttrs(properties)} onBlur={onBlur} onKeyUp={onChange} />

          {icon && <Icon as='icon' glyph={icon} />}
        </Component>
      )}

      {otherTypes.includes(type) && (
        <input {...getInputAttrs(properties)}/>
      )}

      {(type === 'checkbox' || type === 'radio') && (
        <Component name='selection' {...{[type]:true}}>
          <Component name={type} tag='input' {...getInputAttrs(properties)} onChange={onChange} />

          {label && <Component name='label' htmlFor={id} content={label} />}
        </Component>
      )}

      {type === 'textarea' && (
        <Component name='input'ag='textarea' {...getInputAttrs(properties)} />
      )}

      {type === 'select' && (
        <Component name='field'>
          <Component name='select' tag='select' host={REF} {...getInputAttrs(properties)} onChange={onChange}>
            {options.map((options) => (
              <option value={options.value} {...getInputAttrs(options)}>{options.value}</option>
            ))}
          </Component>
        </Component>
      )}

      {fieldset && (
        <RenderFieldset {...props} fieldProperties={fieldset} />
      )}

      {type ==='HTML' && (
        <div {...getInputAttrs(properties)}>{render}</div>
      )}

      {after && (
        <div {...getInputAttrs(after)}>{after.render}</div>
      )}

      {errorMessage && <Component name='error'>{errorMessage}</Component>}
    </Component>    
  );
}

const RenderFields = ({ fields, ...props }) => fields.map((properties, index) => {
  if (properties.type === 'fieldset') {
    return <RenderFieldset key={index} {...props} fieldProperties={properties} />
  }

  return <Form.Field key={index} {...{ properties, ...props }} />;
});

const RenderFieldset = ({ fields, fieldProperties, ...props }) => (
  <Component name='fieldset' {...getInputAttrs(fieldProperties)}>
    {fieldProperties.legend && (
      <Component name='legend' {...getInputAttrs(fieldProperties.legend)}>
        { typeof fieldProperties.legend === 'object' ? fieldProperties.legend.title : fieldProperties.legend }
      </Component>
    )}

    <RenderFields fields={fieldProperties.fields} formFields={props.formFields || fields} />
  </Component>
);

export default Form;

function validateFields(formFields, strict) {
  Object.values(formFields).forEach(({ node, validators, setIsValid, setErrorMessage }) => {
    setIsValid(validator(node, validators, formFields, setErrorMessage, { strict }));
  });
}

function getInputAttrs(props) {
  const blackList = [
    'validate',
    'label',
    'icon',
    'HTML',
    'rules',
    'render',
    'fields',
    'legend',
    'fieldset',
    'tag',
    'before',
    'after',
    'options'
  ];

  let inputProps = [];

  if (typeof props === 'object') for (let prop in props) {
    if (prop === 'name') {
      inputProps.elementname = props[prop];
    }
    else if (blackList.includes(prop)) {
      continue;
    }
    else {
      inputProps[prop] = props[prop];
    }
  }

  return inputProps;
}

function getModifiers(properties) {
  let modifiers = {};

  if (properties.validate || properties.required) modifiers['validate'] = true;
  if (properties.icon) modifiers['has-icon'] = true;
  if (properties.compound) modifiers['compound'] = true;
  if (properties.type === 'select') modifiers['isSelect'] = true;

  return modifiers;
}