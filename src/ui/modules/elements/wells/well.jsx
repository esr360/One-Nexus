import defaults from './wells.json';

/**
 * Render Well module
 *
 * @prop {String} name
 */
export default class Well extends React.Component {
    render() {
        let modifiers = this.props.modifiers || [];
        let className = this.props.className || '';

        if (this.props.dark) modifiers.push('dark');
        if (this.props.object) className += 'object';

        return (
            <Module name={this.props.name} modifiers={modifiers} className={className}>
                {this.props.children}
            </Module>
        )
    }
}

Well.defaultProps = {
    name: defaults['wells'].name,
    object: true
};