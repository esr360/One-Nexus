import config from './assets/config';
import interactions from './assets/interactions';
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

const { validator, setState } = interactions;

const formContext = React.createContext({});

const Form = ({ fields, submit, ...props }) => {
  const { name } = useConfig(props);

  const [formFields, updateFormFields] = useState({});

  const formFieldNodes = Object.keys(formFields).reduce((accumulator, currentValue) => {
    accumulator[currentValue] = formFields[currentValue].node;

    return accumulator;
  }, {});

  const ContextValues = { formFields, formFieldNodes, updateFormFields }

  return (
    <formContext.Provider value={ContextValues}>
      <Module name={name} {...props}>
        <RenderFields fields={fields} />

        {submit !== false &&
          <Component name='footer'>
            <Component
              name='submit'
              tag='input'
              type='submit'
              value={typeof submit === 'object' ? submit.text : submit}

              onClick={() => validateFields(fields)}

              {...getInputProps(submit)}
            />
          </Component>
        }
      </Module>
    </formContext.Provider>
  );
}

Form.defaultProps = { config, styles }

Form.Field = ({ properties, ...props }) => {
  const { id, label, type, icon, options, fieldset, render, after, validate, tree } = properties;
  const { formFields, formFieldNodes, updateFormFields } = React.useContext(formContext);
  const [REF, isValid, setIsValid] = [React.createRef(), ...useState()];

  const onBlur = ({ target }) => {
    setIsValid(validator(target, validate, formFieldNodes));
  }

  const onKeyup = ({ target }) => {
    setIsValid(validator(target, validate, formFieldNodes));

    if (tree) {
      validateFields(formFields, formFieldNodes, tree);
    }
  }

  const onChange = () => {
    setIsValid(validator(target, validate, formFieldNodes));

    if (tree) {
      validateFields(formFields, formFieldNodes, tree);
    }
  }

  React.useEffect(() => {
    updateFormFields(formFields => ({ ...formFields, [id]: { 
      node: REF.current, 
      validators: validate,
      roots: tree || [],
      setIsValid 
    } }));
  }, []);

  return (
    <Component name='group' {...getModifiers(properties)} valid={isValid === true} invalid={isValid === false}>
      {label && (type !== 'checkbox' && type !== 'radio') && <Component name='label' htmlFor={id} content={label} />}

      {inputTypes.includes(type) && (
        <Component name='field'>
          <Component tag='input' host={REF} {...getInputProps(properties)} onBlur={onBlur} onKeyUp={onKeyup} />

          {icon && <Icon as='icon' glyph={icon} />}
        </Component>
      )}

      {otherTypes.includes(type) && (
        <input {...getInputProps(properties)}/>
      )}

      {(type === 'checkbox' || type === 'radio') && (
        <Component name='selection' {...{[type]:true}}>
          <Component name={type} tag='input' {...getInputProps(properties)} onChange={onChange} />

          {label && <Component name='label' htmlFor={id} content={label} />}
        </Component>
      )}

      {type === 'textarea' && (
        <Component name='input'ag='textarea' {...getInputProps(properties)} />
      )}

      {type === 'select' && (
        <Component name='field'>
          <Component name='select' {...getInputProps(properties)} onChange={onChange}>
            {options.map((options) => (
              <option value={options.value} {...getInputProps(options)}>{options.value}</option>
            ))}
          </Component>
        </Component>
      )}

      {type ==='HTML' && (
        <div {...getInputProps(properties)}>{render}</div>
      )}

      {fieldset && (
        <RenderFieldset {...props} fieldProperties={fieldset} />
      )}

      {after && (
        <div {...getInputProps(after)}>{after.render}</div>
      )}
    </Component>    
  );
}

export default Form;

/** Render the fields for the <Form> module */
const RenderFields = ({ fields, ...props }) => fields.map((properties, index) => {
  if (properties.type === 'fieldset') {
    return <RenderFieldset key={index} {...props} fieldProperties={properties} />
  }

  return <Form.Field key={index} {...{ properties, ...props }} />;
});

const RenderFieldset = ({ fields, fieldProperties, ...props }) => (
  <Component name='fieldset' {...getInputProps(fieldProperties)}>
    {fieldProperties.legend && (
      <Component name='legend' {...getInputProps(fieldProperties.legend)}>
        { typeof fieldProperties.legend === 'object' ? fieldProperties.legend.title : fieldProperties.legend }
      </Component>
    )}

    <RenderFields fields={fieldProperties.fields} formFields={props.formFields || fields} />
  </Component>
);

////

function validateFields(formFields, formFieldNodes, tree) {
  Object.values(formFields).forEach(({ node, validators, setIsValid, roots }) => {
    if (tree.some(branch => roots.includes(branch))) {
      setIsValid(validator(node, validators, formFieldNodes));
    }
  });
}

/** Determine the props to pass to a field component */
function getInputProps(props) {
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

/** Determine appropriate modifiers for a field component */
function getModifiers(properties) {
  let modifiers = [];

  if (properties.validate || properties.required) modifiers.push('validate');
  if (properties.icon) modifiers.push('has-icon');
  if (properties.compound) modifiers.push('compound');

  if (properties.type === 'select') modifiers.push('isSelect');

  return modifiers;
}