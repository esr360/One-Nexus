import defaults from './blockquote.json';

/**
 * Render Blockquote module
 *
 * @prop {ReactElement} content
 * @prop {ReactElement} footer
 */
const Blockquote = ({ content, footer, ...props }) => {
    const config = Object.assign(defaults.blockquote, window.theme.blockquote);

    return (
        <Module name={config.name} {...props}>
            <Component name='content'>{content}</Component>
            {props.footer && <Component name='footer' tag='footer'>{footer}</Component>}
        </Module>
    );
}

Blockquote.defaultProps = {
    object: true
};

export default Blockquote;