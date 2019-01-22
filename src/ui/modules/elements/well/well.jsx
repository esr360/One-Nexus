import defaults from './assets/config.js';
import layout from './assets/layout.js';

/**
 * Render Well module
 */
const Well = props => (
    <Module {...props}>{props.children}</Module>
);

export default Object.assign(Well, {
    layout, defaults, defaultProps: {
        name: 'Well',
        object: true
    }
});