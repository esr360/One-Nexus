import defaults from './assets/config.js';
import layout from './assets/layout.jss';

/**
 * Render Blockquote module
 *
 * @prop {ReactElement} content
 * @prop {ReactElement} footer
 */
const Blockquote = ({ content, footer, layout, ...props }) => {
    const config = Module.config(defaults(window.theme), window.theme.blockquote);

    return (
        <Module name={config.name} styles={[layout, config, window.theme]} {...props}>
            <Component name='content'>{content}</Component>
            {props.footer && <Component name='footer' tag='footer'>{footer}</Component>}
        </Module>
    );
}

Blockquote.defaultProps = {
    object: true,
    layout: layout
};

export default Blockquote;