import defaults from './form.json';
import interactions from './assets/interactions';
import layout from './assets/layout.jss';

/**
 * Render Form module
 * 
 * @prop {Function} setState
 * @prop {Function} validate
 * @prop {Array} fields
 * @prop {*} submit
 */
const Form = ({ setState, validate, fields, submit, ...props }) => {
    const config = Object.assign(defaults.form, window.theme.form);

    return (
        <Module name={config.name} {...props} styles={[layout, config, window.theme]} ref={() => setState(fields)}>
            <RenderFields setState={setState} validate={validate} fields={fields} />

            {submit !== false &&
                <Component name='footer' className='object'>
                    <Component
                        name='submit'
                        tag='input'
                        type='submit'
                        value={typeof submit === 'object' ? submit.text : submit}

                        onClick={() => validateFields(fields, validate)}

                        {...getInputProps(submit)}
                    />
                </Component>
            }
        </Module>
    );
}

Object.assign(Form, interactions, {
    defaultProps: {
        object: true,
        setState: interactions.setState,
        validate: interactions.validate,
        submit: { text: 'Submit', Button: 'size-3' }
    }
});

/**
 * Render the fields for the <Form> module
 * 
 * @prop {Function} setState
 * @prop {Function} validate
 * @prop {Array} fields
 * 
 */
const RenderFields = ({ setState, validate, fields, ...props }) => {
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

    return fields.map((properties, index) => {

        if (properties.type === 'fieldset') {
            return <RenderFieldset setState={setState} validate={validate} {...props} fieldProperties={properties} />
        }

        const label = (
            <Component name='label' htmlFor={properties.id}>
                {properties.label}
            </Component>
        );

        return (
            <Component 
                name='group' 
                key={index}
                modifiers={componentModifiers(properties)}
                {...getInputProps(properties.groupProps)} 
            >

                {properties.label && (properties.type !== 'checkbox' && properties.type !== 'radio') && label}

                {inputTypes.includes(properties.type) && (
                    <Component name='field'>
                        <Component
                            name='input'

                            {...getInputProps(properties)}

                            onFocus={() => validateFields(properties, validate)}
                            onKeyUp={() => {
                                setState(props.formFields || fields);
                                validateFields(properties, validate);
                            }}
                        />

                        {properties.icon && (
                            <Component tag='i' name='icon' className={`fa fa-${properties.icon}`} />
                        )}
                    </Component>
                )}

                {otherTypes.includes(properties.type) && (
                    <input {...getInputProps(properties)}/>
                )}

                {(properties.type === 'checkbox' || properties.type === 'radio') && (
                    <PAX5.row>
                        <PAX5.column align='middle'>
                            <Component 
                                name={properties.type}
                                tag='input'

                                {...getInputProps(properties)}

                                onChange={() => {
                                    setState(props.formFields || fields);
                                    validateFields(properties, validate);
                                }}
                            />
                        </PAX5.column>
                        {properties.label && <PAX5.column align='middle'>{label}</PAX5.column>}
                    </PAX5.row>
                )}

                {properties.type === 'textarea' && (
                    <Component 
                        name='input'
                        tag='textarea'

                        {...getInputProps(properties)}
                    />
                )}

                {properties.type === 'select' && (
                    <Component name='field'>
                        <Component 
                            name='select'

                            {...getInputProps(properties)}

                            onChange={() => {
                                setState(props.formFields || fields);
                                validateFields(properties, validate);
                            }}
                        >
                            {properties.options.map((options, index) => (
                                <option value={options.value} {...getInputProps(options)}>
                                    { options.value }
                                </option>
                            ))}
                        </Component>
                    </Component>
                )}

                {properties.type ==='HTML' && (
                    <div {...getInputProps(properties)}>{ properties.render }</div>
                )}

                {properties.fieldset && (
                    <RenderFieldset setState={setState} validate={validate} {...props} fieldProperties={properties.fieldset} />
                )}

                {properties.after && (
                    <div {...getInputProps(properties.after)}>{ properties.after.render }</div>
                )}
            </Component>
        )
    })
};

/**
 * Render fieldsets within <RenderFields>
 * 
 * @prop {Function} setState
 * @prop {Function} validate
 * @prop {Array} fields
 * @prop {Object} fieldProperties
 */
const RenderFieldset = ({ setState, validate, fields, fieldProperties, ...props }) =>  (
    <Component name='fieldset' {...getInputProps(fieldProperties)}>
        {fieldProperties.legend && (
            <Component name='legend' {...getInputProps(fieldProperties.legend)}>
                { typeof fieldProperties.legend === 'object' ? fieldProperties.legend.title : fieldProperties.legend }
            </Component>
        )}

        <RenderFields setState={setState} validate={validate} fields={fieldProperties.fields} formFields={props.formFields || fields} />
    </Component>
);

export default Form;

/**
 * Validate a form field or multiple form fields
 * 
 * @param {*} field
 * @param {Function} validate
 */
function validateFields(field, validate) {
    if (field.constructor === Array) {
        field.forEach($field => validateFields($field, validate));
    }

    if (field.fields) return validateFields(field.fields, validate);

    if (field.id) {
        validate(field.id, field.validate);
    }
}

/**
 * Determine the props to pass to a field component
 * 
 * @param {Object} props 
 */
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
    };

    return inputProps;
}

/**
 * Determine appropriate modifiers for a field component
 * 
 * @param {Object} properties 
 */
function componentModifiers(properties) {
    let modifiers = [];

    if (properties.validate || properties.required) modifiers.push('validate');
    if (properties.icon) modifiers.push('has-icon');
    if (properties.compound) modifiers.push('compound');

    if (properties.type === 'select') modifiers.push('isSelect');

    return modifiers;
}