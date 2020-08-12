import config from './assets/config';
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

  const handleSubmit = () => Object.values(formFields).forEach(field => validate(field, formFields));

  return (
    <formContext.Provider value={{ formFields, updateFormFields, validateFieldsOn }}>
      <Module name={name} {...props}>
        <RenderFields fields={fields} />

        {submit && (
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
Form.Field = ({ properties }) => {
  const ref = React.createRef();

  const { formFields, updateFormFields, validateFieldsOn } = React.useContext(formContext);
  const [isValid, setIsValid] = React.useState();
  const [errorMessage, setErrorMessage] = React.useState();

  const { id, label, type, icon, options, fieldset, render, after } = properties;
  const { validators, onValidation, validateOn = validateFieldsOn } = properties;

  const eventHandler = event => () => validateOn.includes(event) && validate(formFields[id], formFields);

  if (id) {
    React.useEffect(() => updateFormFields(fields => {
      return { ...fields, [id]: { node: ref.current, setIsValid, setErrorMessage, validators, onValidation }};
    }), []);
  }

  const modifiers = {
    'has-icon': Boolean(properties.icon),
    'compound': Boolean(properties.compound),
  }

  return (
    <Component name='group' {...modifiers} valid={isValid === true} invalid={isValid === false}>
      {label && (type !== 'checkbox' && type !== 'radio') && <Component name='label' htmlFor={id} content={label} />}

      {inputTypes.includes(type) && (
        <Component name='field'>
          <Component tag='input' host={ref} {...getInputAttrs(properties)} onBlur={eventHandler('blur')} onKeyUp={eventHandler('change')} />

          {icon && <Icon as='icon' glyph={icon} />}
        </Component>
      )}

      {otherTypes.includes(type) && (
        <input {...getInputAttrs(properties)}/>
      )}

      {(type === 'checkbox' || type === 'radio') && (
        <Component name='selection' {...{[type]:true}}>
          <Component name={type} tag='input' host={ref} {...getInputAttrs(properties)} onChange={eventHandler('change')} />

          {label && <Component name='label' htmlFor={id} content={label} />}
        </Component>
      )}

      {type === 'textarea' && (
        <Component name='input'ag='textarea' {...getInputAttrs(properties)} />
      )}

      {type === 'select' && (
        <Component name='field'>
          <Component name='select' tag='select' host={ref} {...getInputAttrs(properties)} onChange={eventHandler('change')}>
            {options.map((options) => (
              <option value={options.value} {...getInputAttrs(options)}>{options.value}</option>
            ))}
          </Component>
        </Component>
      )}

      {fieldset && (
        <Form.Fieldset properties={fieldset} />
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

/**
 * Form Fieldset
 */
Form.Fieldset = ({ properties: { legend, fields, ...props }}) => (
  <Component name='fieldset' {...getInputAttrs(props)}>
    {legend && (
      <Component name='legend' {...getInputAttrs(legend)}>
        { typeof legend === 'object' ? legend.title : legend }
      </Component>
    )}

    <RenderFields fields={fields} />
  </Component>
);

/**
 * 
 */
const RenderFields = ({ fields }) => fields.map((properties, index) => {
  const Render = properties.type === 'fieldset' ? Form.Fieldset : Form.Field;

  return <Render key={index} properties={properties} />;
});

/**
 * 
 */
export default Form;

/**
 * 
 */
function validator(node, validators = [], formFields, { defaultMessage = 'Invalid field' } = {}) {
  let [isValid, message] = [true, defaultMessage];

  validators.forEach(rule => {
    message = (rule.message || message), rule = (rule.rule ?? rule);

    if (typeof rule === 'function' ? !rule(formFields) : !rule) {
      isValid = false;
    }
  });

  if (node.validity.valid === false) {
    [isValid, message] = [false, node.validationMessage];
  }

  return [isValid, message];
}

/**
 * 
 */
function validate({ node, setIsValid, setErrorMessage, validators, onValidation }, formFields) {
  const [isValid, message] = validator(node, validators, formFields);

  setErrorMessage(isValid ? null : message);

  setIsValid(isValid);

  if (onValidation) {
    onValidation({ ...formFields, current: { ...node, isValid } }, field => validate(field, formFields));
  }
}

/**
 * 
 */
function getInputAttrs(props = {}) {
  const blackList = [
    'validate', 'label', 'icon', 'HTML', 'rules', 'render', 'fields', 'legend', 'fieldset', 'tag', 'before', 'after', 'options'
  ];

  return Object.keys(props).filter(prop => !blackList.includes(prop)).reduce((attributes, prop) => {
    return attributes[prop] = props[prop], attributes;
  }, {});
}