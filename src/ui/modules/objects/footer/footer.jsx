import config from './assets/config.js';
import layout from './assets/layout.js';

/**
 * Render Footer module
 */
const Footer = props => (
    <Module {...props}>
        <Component name='wrapper' Container>{props.children}</Component>
    </Module>
);

export default Object.assign(Footer, {
    layout, config, defaultProps: {
        name: 'Footer'
    }
});