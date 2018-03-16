import defaults from './blockquotes.json';
/**
 * Render Blockquote module
 *
 * @param {*} props.content
 * @param {*} props.footer
 */
export default class Blockquote extends React.Component {
    render() {
        return (
            <Module {...this.props}>
                <Component name='content'>{this.props.content}</Component>
                {this.props.footer && <Component name='footer'>{this.props.footer}</Component>}
            </Module>
        )
    }
}

Blockquote.defaultProps = {
    name: defaults.blockquotes.name,
    object: true
};