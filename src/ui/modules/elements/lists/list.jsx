import defaults from './lists.json';

/**
 * Render List module
 *
 * @prop {String} name
 */
export default class List extends React.Component {
    render() {
        return (
            <Module {...this.props}>
                {this.props.children}
            </Module>
        )
    }
}

List.defaultProps = {
    name: defaults.lists.name,
    clear: true,
    tag: 'ul'
};

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