import defaults from './blockquote.json';
/**
 * Render Blockquote module
 *
 * @param {*} props.content
 * @param {*} props.footer
 */
export default class Blockquote extends Constructor {
    render() {
        return (
            <Module {...this.props}>
                <Component name='content'>{this.props.content}</Component>
                {this.props.footer && <Component name='footer' tag='footer'>{this.props.footer}</Component>}
            </Module>
        )
    }
}

Blockquote.defaultProps = {
    name: defaults.blockquote.name,
    object: true
};