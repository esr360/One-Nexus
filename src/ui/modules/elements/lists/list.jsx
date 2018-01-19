import defaults from './lists.json';

/**
 * Render List module
 *
 * @prop {String} name
 */
export default class List extends React.Component {
    render() {
        let modifiers = this.props.modifiers || [];

        ['reset', 'clear', 'inline', 'divider', 'arrow', 'group'].forEach(prop => {
            if (this.props[prop]) modifiers.push(prop);
        });

        return (
            <Module tag={this.props.tag} name={this.props.name} modifiers={modifiers} className={this.props.className}>
                {this.props.children}
            </Module>
        )
    }
}

/**
 * Render List Item
 *
 * @prop {String} name
 */
export class ListItem extends React.Component {
    render() {
        return (
            <li>{this.props.children}</li>
        )
    }
}

List.defaultProps = {
    name: defaults['lists'].name,
    clear: true,
    tag: 'ul'
};