import defaults from './button.json';
/**
 * Render Button module
 *
 * @prop {String} name
 */
export default class Button extends React.Component {
    render() {
        return (
            <Module {...this.props}>
                {this.props.children}
            </Module>
        )
    }
}

Button.defaultProps = {
    name: defaults.button.name,
    fluid: true
};