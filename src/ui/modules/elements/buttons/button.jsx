import defaults from './buttons.json';

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
    name: defaults.buttons.name
};