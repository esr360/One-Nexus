import defaults from './list.json';

/**
 * Render List module
 *
 * @prop {String} name
 */
const List = props => {
    const config = Object.assign(defaults.list, window.theme.list);

    return (
        <Module name={config.name} {...props}>
            {props.children}
        </Module>
    );
}

List.Item = props => <li>{props.children}</li>;

List.defaultProps = {
    tag: 'ul'
};

export default List;