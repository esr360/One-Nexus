import defaults from './Heading.json';

/**
 * Render Accordion component
 *
 * @prop {String} name
 * @prop {Bool} bar
 * @prop {Bool} box
 * @prop {(Bool|Array} icon
 * @prop {Array} modifiers
 */
export default class Heading extends React.Component {
    render() {
        let modifiers = this.props.modifiers || [];

        if (this.props.size) modifiers.push(`size-${this.props.size}`);

        ['heavy', 'light', 'uppercase', 'flush'].forEach(prop => {
            if (this.props[prop]) modifiers.push(prop);
        });

        return (
            <Module 
                tag='h3' 
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
    icon: false
};