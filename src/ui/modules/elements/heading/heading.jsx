import defaults from './heading.json';

/**
 * Render Heading component
 *
 * @prop {String} name
 */
export default class Heading extends React.Component {
    render() {
        let modifiers = this.props.modifiers || [];

        if (this.props.size) modifiers.push(`size-${this.props.size}`);

        return (
            <Module {...this.props} tag={`h${this.props.heading}`} modifiers={modifiers}>
                {this.props.children}
            </Module>
        )
    }
}

Heading.defaultProps = {
    name: defaults.heading.name,
    fluid: true,
    heading: 3
};