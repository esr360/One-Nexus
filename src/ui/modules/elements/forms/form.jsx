import defaults from './forms.json';
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

        this.onBlur = subject => {
            this.props.fields.forEach((properties, index) => {
                const target = document.getElementById(properties.id);

                if (properties.rules) {
                    let action = 'show';

                    properties.rules.forEach(rule => {
                        if (typeof rule === 'function') {
                            // get field ids from stringified function
                            const ids = String(rule).match(/\(([^)]+)\)/)[1].replace(/\s/g, '').split(',');

                            let fields = [];

                            // get field from id
                            ids.forEach(field => {
                                fields.push(document.getElementById(field));
                            });

                            if (!rule(...fields)) action = 'hide';
                        }
                    });

                    target.style.display = (action === 'hide') ? 'none' : 'block';
                }
            });
        }
    }

    render() {
        return (
            <Module {...this.props}>
                {this.props.fields.map((properties, index) => (
                    <Component name='group'>
                        {properties.label && 
                            <Component name='label'>{properties.label}</Component>
                        }

                        {this.inputTypes.includes(properties.type) && 
                            <Component 
                                name='input' 
                                type={properties.type}
                                onBlur={this.onBlur}
                                id={properties.id}
                                elementName={properties.name} 
                                placeholder={properties.placeholder} 
                            />
                        }

                        {this.otherTypes.includes(properties.type) && 
                            <input 
                                type={properties.type} 
                                elementName={properties.name} 
                                placeholder={properties.placeholder} 
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
                    </Component>
                ))}

                {this.props.submit &&
                    <Component
                        name='submit'
                        tag='input'
                        className='button'
                        type='submit'
                        value={this.props.submit} 
                    />
                }
            </Module>
        )
    }
}

Form.defaultProps = {
    name: defaults.forms.name,
    object: true
};