import defaults from './list.json';

/**
 * Render List module
 *
 * @prop {String} name
 */
export default class List extends React.Component {
    // list item
    static Item(props) {
        return <li>{props.children}</li>;
    }

    render() {
        return (
            <Module {...this.props}>
                {this.props.children}
            </Module>
        )
    }
}

List.defaultProps = {
    name: defaults.list.name,
    tag: 'ul'
};