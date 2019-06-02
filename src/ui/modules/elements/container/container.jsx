import config from './assets/config.js';
import layout from './assets/layout.js';

/**
 * 
 */
const Container = props => (
    <Module {...props} />
);

export default Object.assign(Container, { 
    layout, config, defaultProps: {
        name: 'Container',
        object: true
    }
});