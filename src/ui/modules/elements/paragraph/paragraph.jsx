import config from './assets/config';
import layout from './assets/layout.js';

/**
 * Render Paragraph module
 */
const Paragraph = props => (
    <Module {...props}>{props.children}</Module>
);

export default Object.assign(Paragraph, {
    layout, config, defaultProps: {
        name: 'Paragraph',
        object: true,
        tag: 'p'
    }
});