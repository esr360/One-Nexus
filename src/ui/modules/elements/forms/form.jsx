import defaults from './forms.json';
import Button from '../button/button.jsx';
/**
 * Render Form module
 */
export default class Form extends React.Component {
    render() {
        return (
            <Module {...this.props}>
                {this.props.inputs.map((properties, index) => (
                    <Component name='group'>
                        {properties.label && 
                            <Component name='label'>{properties.label}</Component>
                        }

                        {properties.type === 'text' && 
                            <Component 
                                name='input' 
                                type={properties.type} 
                                elementName={properties.name} 
                                placeholder={properties.placeholder} 
                            />
                        }

                        {properties.type === 'submit' && 
                            <Button>{properties.text}</Button>
                        }
                    </Component>
                ))}
            </Module>
        )
    }
}

Form.defaultProps = {
    name: defaults.forms.name,
    object: true
};