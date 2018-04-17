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
            'after'
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

                            onClick={() => {
                                this.props.fields.forEach(properties => {
                                    this.validate(properties.id, properties.validate);
                                });
                            }}

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

        if (properties.validate) modifiers.push('validate');
        if (properties.icon) modifiers.push('has-icon');

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

                    {properties.type ==='HTML' && (
                        <div {...this.getInputProps(properties)}>{ properties.render }</div>
                    )}

                    {properties.label && !properties.validate && (properties.type !== 'checkbox') && label}

                    {this.inputTypes.includes(properties.type) && (
                        <Component name='inputWrapper'>
                            <Component
                                name='input'

                                {...this.getInputProps(properties)}

                                onFocus={() => this.validate(properties.id, properties.validate)}
                                onKeyUp={() => {
                                    this.setState(this.props.formFields || this.props.fields);
                                    this.validate(properties.id, properties.validate);
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

                    {properties.type === 'checkbox' && (
                        <Row>
                            <Column align='middle'>
                                <Component 
                                    name='checkbox'
                                    tag='input'

                                    {...this.getInputProps(properties)}

                                    onChange={() => this.setState(this.props.formFields || this.props.fields)}
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

                    {properties.label && properties.validate && (properties.type !== 'checkbox') && label}

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