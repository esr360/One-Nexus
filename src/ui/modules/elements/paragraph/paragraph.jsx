import defaults from './paragraph.json';

/**
 * Render Paragraph module
 *
 * @prop {String} name
 */
export default class Paragraph extends React.Component {
    render() {
        return (
            <Module {...this.props}>
                {this.props.children}
            </Module>
        )
    }
}

Paragraph.defaultProps = {
    name: defaults.paragraph.name,
    object: true,
    tag: 'p'
};