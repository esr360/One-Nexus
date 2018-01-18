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

        ['heavy', 'light', 'uppercase', 'flush', 'fluid'].forEach(prop => {
            if (this.props[prop]) modifiers.push(prop);
        });

        return (
            <Module 
                tag={`h${this.props.heading}`} 
                name={this.props.name} 
                modifiers={modifiers} 
                className={this.props.className}
            >
                {this.props.children}
            </Module>
        )
    }
}

Heading.defaultProps = {
    name: defaults['heading'].name,
    alert: 'success',
    bar: true,
    box: false,
    icon: false,
    fluid: true,
    heading: 3
};