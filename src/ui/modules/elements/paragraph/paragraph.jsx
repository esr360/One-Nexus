import defaults from './assets/config';
import layout from './assets/layout.js';

/**
 * Render Paragraph module
 */
const Paragraph = props => (
    <Module {...props}>{props.children}</Module>
);

export default Object.assign(Paragraph, {
    layout, defaults, defaultProps: {
        name: 'Paragraph',
        object: true,
        tag: 'p'
    }
});