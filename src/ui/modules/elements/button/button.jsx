import defaults from './button.json';
/**
 * Render Button module
 *
 * @prop {String} name
 */
export default class Button extends Constructor {

    componentWillMount() {
        this.tag = this.props.href ? 'a' : false;
    }

    render() {
        return (
            <Module tag={this.tag} {...this.props}>
                {this.props.children}
            </Module>
        )
    }
}

Button.defaultProps = {
    name: defaults.button.name,
    fluid: true
};