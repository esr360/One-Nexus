import defaults from './blockquote.json';

/**
 * Render Blockquote module
 *
 * @param {*} props.content
 * @param {*} props.footer
 */
const Blockquote = props => {
    const config = Object.assign(defaults.blockquote, window.theme.blockquote);

    return (
        <Module name={config.name} {...props}>
            <Component name='content'>{props.content}</Component>
            {props.footer && <Component name='footer' tag='footer'>{props.footer}</Component>}
        </Module>
    );
}

Blockquote.defaultProps = {
    object: true
};

export default Blockquote;