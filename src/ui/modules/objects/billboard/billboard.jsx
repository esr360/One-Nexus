import defaults from './assets/config.js';
import layout from './assets/layout.jss';

/**
 * Render Billboard module
 */
const Billboard = props => (
    <Module {...props}>
        <Component name='wrapper' Container>{props.children}</Component>
    </Module>
);

export default Object.assign(Billboard, {
    layout, defaults, defaultProps: {
        name: 'Billboard'
    }
});