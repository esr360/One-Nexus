import defaults from './wells.json';

/**
 * Render Well module
 *
 * @prop {String} name
 */
export default class Well extends React.Component {
    render() {
        let modifiers = this.props.modifiers || [];

        if (this.props.dark) modifiers.push('dark');

        return (
            <Module name={this.props.name} modifiers={modifiers} className={this.props.className}>
                {this.props.children}
            </Module>
        )
    }
}

Well.defaultProps = {
    name: defaults['wells'].name
};