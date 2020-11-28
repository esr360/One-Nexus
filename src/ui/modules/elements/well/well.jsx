import config from './assets/config.js';
import layout from './assets/layout.js';

/**
 * Render Well module
 */
const Well = props => (
    <Module {...props}>{props.children}</Module>
);

export default Object.assign(Well, {
    layout, config, defaultProps: {
        name: 'Well',
        object: true
    }
});