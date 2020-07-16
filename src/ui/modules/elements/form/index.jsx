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

const formContext = React.createContext({});

const Form = ({ fields, submit, ...props }) => {
  const { name } = useConfig(props);
  const [formFields, updateFormFields] = useState({});
  const formFieldNodes = Object.keys(formFields).reduce(($, id) => ($[id] = formFields[id].node, $), {});

  const handleSubmit = () => validateFields(formFields, formFieldNodes);

  return (
    <formContext.Provider value={{ formFields, updateFormFields, formFieldNodes }}>
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

Form.Field = ({ properties, ...props }) => {
  const { id, label, type, icon, options, fieldset, render, after, validate, tree } = properties;

  const { formFields, updateFormFields, formFieldNodes } = React.useContext(formContext);

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

  const onChange = ({ target }) => {
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
          <Component tag='input' host={REF} {...getInputAttrs(properties)} onBlur={onBlur} onKeyUp={onKeyup} />

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

      {type ==='HTML' && (
        <div {...getInputAttrs(properties)}>{render}</div>
      )}

      {fieldset && (
        <RenderFieldset {...props} fieldProperties={fieldset} />
      )}

      {after && (
        <div {...getInputAttrs(after)}>{after.render}</div>
      )}
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

function validateFields(formFields, formFieldNodes, tree) {
  Object.values(formFields).forEach(({ node, validators, setIsValid, roots }) => {
    if (!tree || tree.some(branch => roots.includes(branch))) {
      setIsValid(validator(node, validators, formFieldNodes));
    }
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
  let modifiers = [];

  if (properties.validate || properties.required) modifiers.push('validate');
  if (properties.icon) modifiers.push('has-icon');
  if (properties.compound) modifiers.push('compound');

  if (properties.type === 'select') modifiers.push('isSelect');

  return modifiers;
}