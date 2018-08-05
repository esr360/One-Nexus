import defaults from './assets/config.js';
import layout from './assets/layout.jss';

/**
 * Render Blockquote module
 *
 * @prop {ReactElement} content
 * @prop {ReactElement} footer
 */
const Blockquote = ({ content, footer, layout, ...props }) => {
    const config = Object.assign(defaults(window.theme), window.theme.blockquote);

    return (
        <Module name={config.name} styles={[layout, window.theme, config]} {...props}>
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