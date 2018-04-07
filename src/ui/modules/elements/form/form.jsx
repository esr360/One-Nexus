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

    componentDidMount() {
        this.setState(this.props.fields);
    }

    render() {
        return (
            <Module {...this.props}>

                <RenderFields fields={this.props.fields} />

                {this.props.submit &&
                    <Component
                        name='submit'
                        tag='input'
                        className='button'
                        type='submit'
                        value={this.props.submit}
                        onClick={() => {
                            this.props.fields.forEach(properties => {
                                this.validate(properties.id, properties.validate)
                            })
                        }}
                    />
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

    getInputProps(props) {
        let blackList = [
            'validate',
            'label',
            'icon',
            'HTML',
            'rules',
            'render',
            'fields',
            'legend',
            'fieldset',
            'before',
            'after'
        ];

        let inputProps = [];

        for (let prop in props) {
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

    render() {
        return this.props.fields.map((properties, index) => {

            if (properties.type === 'fieldset') {
                return <RenderFieldset {...this.props} fieldProperties={properties} />
            }

            return (
                <Component name='group' key={index} modifiers={properties.validate && ['validate']}>

                    {properties.type ==='HTML' && (
                        <div {...this.getInputProps(properties)}>{ properties.render }</div>
                    )}

                    {properties.label && !properties.validate && (
                        <Component name='label' htmlFor={properties.id}>
                            {properties.label}
                        </Component>
                    )}

                    {this.inputTypes.includes(properties.type) && (
                        <Component
                            name='input'

                            {...this.getInputProps(properties)}

                            onFocus={() => this.validate(properties.id, properties.validate)}
                            onKeyUp={() => {
                                this.setState(this.props.formFields || this.props.fields);
                                this.validate(properties.id, properties.validate);
                            }}
                        />
                    )}

                    {this.otherTypes.includes(properties.type) && (
                        <input {...this.getInputProps(properties)}/>
                    )}

                    {properties.type === 'checkbox' && (
                        <Component 
                            name='input'

                            {...this.getInputProps(properties)}

                            onChange={() => this.setState(this.props.formFields || this.props.fields)}
                        />
                    )}

                    {properties.type === 'textarea' && (
                        <Component 
                            name='input'
                            tag='textarea'

                            {...this.getInputProps(properties)}
                        />
                    )}

                    {properties.label && properties.validate && (
                        <Component name='label' htmlFor={properties.id}>
                            {properties.label}
                        </Component>
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
                    <Component name='legend' className={this.properties.legend.class && this.properties.legend.class}>
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