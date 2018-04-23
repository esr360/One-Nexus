import defaults from './form.json';
/**
 * Render Form module
 */
export default class Form extends Constructor {

    constructor(props, context) {
        super(props, context);

        this.inputTypes = [
            'text',
            'email',
            'password',
            'search',
            'tel',
            'url',
            'number'
        ]

        this.otherTypes = [
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
        ]
    }

    getInputProps(props) {
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

    validateFields(field) {
        if (field.constructor === Array) {
            field.forEach($field => this.validateFields($field));
        }

        if (field.fields) return this.validateFields(field.fields);

        if (field.id) {
            //console.log(field.id);
            this.validate(field.id, field.validate);
        }
    }

    componentDidMount() {
        this.setState(this.props.fields);
    }

    render() {
        return (
            <Module {...this.props}>
                <RenderFields fields={this.props.fields} />

                {this.props.submit !== false &&
                    <Component name='footer' className='object'>
                        <Component
                            name='submit'
                            tag='input'
                            type='submit'
                            className='button'
                            value={typeof this.props.submit === 'object' ? this.props.submit.text : this.props.submit}

                            onClick={() => this.validateFields(this.props.fields)}

                            {...this.getInputProps(this.props.submit)}
                        />
                    </Component>
                }
            </Module>
        )
    }
}

/**
 * Render form fields
 */
class RenderFields extends Form {

    constructor(props, context) {
        super(props, context);
    }

    componentModifiers(properties) {
        let modifiers = [];

        if (properties.validate || properties.required) modifiers.push('validate');
        if (properties.icon) modifiers.push('has-icon');
        if (properties.compound) modifiers.push('compound');

        if (properties.type === 'select') modifiers.push('isSelect');

        return modifiers;
    }

    render() {
        return this.props.fields.map((properties, index) => {

            if (properties.type === 'fieldset') {
                return <RenderFieldset {...this.props} fieldProperties={properties} />
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
                    modifiers={this.componentModifiers(properties)}
                    {...this.getInputProps(properties.groupProps)} 
                >

                    {properties.label && (properties.type !== 'checkbox' && properties.type !== 'radio') && label}

                    {this.inputTypes.includes(properties.type) && (
                        <Component name='field'>
                            <Component
                                name='input'

                                {...this.getInputProps(properties)}

                                onFocus={() => this.validateFields(properties)}
                                onKeyUp={() => {
                                    this.setState(this.props.formFields || this.props.fields);
                                    this.validateFields(properties);
                                }}
                            />

                            {properties.icon && (
                                <Component tag='i' name='icon' className={`fa fa-${properties.icon}`} />
                            )}
                        </Component>
                    )}

                    {this.otherTypes.includes(properties.type) && (
                        <input {...this.getInputProps(properties)}/>
                    )}

                    {(properties.type === 'checkbox' || properties.type === 'radio') && (
                        <Row>
                            <Column align='middle'>
                                <Component 
                                    name={properties.type}
                                    tag='input'

                                    {...this.getInputProps(properties)}

                                    onChange={() => {
                                        this.setState(this.props.formFields || this.props.fields);
                                        this.validateFields(properties);
                                    }}
                                />
                            </Column>
                            {properties.label && <Column align='middle'>{label}</Column>}
                        </Row>
                    )}

                    {properties.type === 'textarea' && (
                        <Component 
                            name='input'
                            tag='textarea'

                            {...this.getInputProps(properties)}
                        />
                    )}

                    {properties.type === 'select' && (
                        <Component name='field'>
                            <Component 
                                name='select'

                                {...this.getInputProps(properties)}

                                onChange={() => {
                                    this.setState(this.props.formFields || this.props.fields);
                                    this.validateFields(properties);
                                }}
                            >
                                {properties.options.map((options, index) => (
                                    <option value={options.value} {...this.getInputProps(options)}>
                                        { options.value }
                                    </option>
                                ))}
                            </Component>
                        </Component>
                    )}

                    {properties.type ==='HTML' && (
                        <div {...this.getInputProps(properties)}>{ properties.render }</div>
                    )}

                    {properties.fieldset && (
                        <RenderFieldset {...this.props} fieldProperties={properties.fieldset} />
                    )}

                    {properties.after && (
                        <div {...this.getInputProps(properties.after)}>{ properties.after.render }</div>
                    )}
                </Component>
            )
        });
    }
}

/**
 * Render form fieldset
 */
class RenderFieldset extends RenderFields {
    
    constructor(props, context) {
        super(props, context);

        this.properties = this.props.fieldProperties;
    }

    render() {
        return (
            <Component name='fieldset' {...this.getInputProps(this.properties)}>
                {this.properties.legend && (
                    <Component name='legend' {...this.getInputProps(this.properties.legend)}>
                        { typeof this.properties.legend === 'object' ? 
                            this.properties.legend.title : 
                            this.properties.legend 
                        }
                    </Component>
                )}

                <RenderFields 
                    fields={this.properties.fields} 
                    formFields={this.props.formFields || this.props.fields} />
            </Component>
        )
    }

}

Form.defaultProps = {
    name: defaults.form.name,
    object: true
};