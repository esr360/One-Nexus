import defaults from './assets/config.js';
import layout from './assets/layout.js';

/**
 * Render Header module
 */
const Header = props => {
    return (
        <Module {...props}>
            <Component name='wrapper' Container>{props.children}</Component>
        </Module>
    );
};

export default Object.assign(Header, {
    layout, defaults, defaultProps: {
        name: 'Header'
    }
});