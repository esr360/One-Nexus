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
                {this.props.fields.map((properties, index) => (
                    <Component name='group' key={index} modifiers={properties.validate && ['validate']}>

                        {properties.label && !properties.validate && 
                            <Component name='label' htmlFor={properties.id}>
                                {properties.label}
                            </Component>
                        }

                        {this.inputTypes.includes(properties.type) &&
                            <Component
                                name='input'
                                type={properties.type}
                                id={properties.id}
                                elementname={properties.name}
                                placeholder={properties.placeholder}
                                onFocus={() => this.validate(properties.id, properties.validate)}
                                onKeyUp={() => {
                                    this.setState(this.props.fields)
                                    this.validate(properties.id, properties.validate)
                                }}
                            />
                        }

                        {this.otherTypes.includes(properties.type) && 
                            <input 
                                id={properties.id}
                                type={properties.type}
                                elementname={properties.name}
                                placeholder={properties.placeholder}
                                required={properties.required}
                            />
                        }

                        {properties.type === 'checkbox' && 
                            <Component 
                                name='input'
                                onChange={() => this.setState(this.props.fields)}
                                type='checkbox'
                                id={properties.id}
                            />
                        }

                        {properties.type === 'textarea' && 
                            <Component 
                                name='input'
                                id={properties.id}
                                tag='textarea' 
                                placeholder={properties.placeholder} 
                            />
                        }

                        {properties.label && properties.validate &&
                            <Component name='label' htmlFor={properties.id}>
                                {properties.label}
                            </Component>
                        }
                    </Component>
                ))}

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

Form.defaultProps = {
    name: defaults.form.name,
    object: true
};