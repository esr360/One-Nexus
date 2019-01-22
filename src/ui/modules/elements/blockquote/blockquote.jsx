import defaults from './assets/config.js';
import layout from './assets/layout.js';

/**
 * Render Blockquote module
 *
 * @prop {ReactElement} content
 * @prop {ReactElement} footer
 */
const Blockquote = ({ content, footer, ...props }) => (
    <Module {...props}>
        <Component name='content'>{content}</Component>

        {props.footer && <Component name='footer' tag='footer'>{footer}</Component>}
    </Module>
);

export default Object.assign(Blockquote, {
    layout, defaults, defaultProps: {
        name: 'Blockquote',
        object: true,
    }
});