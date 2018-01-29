import defaults from './buttons.json';

/**
 * Render Button module
 *
 * @prop {String} name
 */
export default class Button extends React.Component {
    render() {
        let modifiers = this.props.modifiers || [];
        let className = this.props.className || '';

        return (
            <Module name={this.props.name} modifiers={modifiers} className={className}>
                {this.props.children}
            </Module>
        )
    }
}

Button.defaultProps = {
    name: defaults['buttons'].name
};