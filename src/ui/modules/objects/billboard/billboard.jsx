import defaults from './assets/config.js';
import layout from './assets/layout.js';

/**
 * Render Billboard module
 */
const Billboard = ({ modifiers=[], ...props }) => (
    <Module style={props.image && { backgroundImage: `url(${props.image})` }} {...props}>
        {(props.overlay || modifiers.includes('overlay')) && <Component name='overlay' />}

        <Component name='wrapper' Container>
            {props.children}
        </Component>
    </Module>
);

export default Object.assign(Billboard, {
    layout, defaults, defaultProps: {
        name: 'Billboard'
    }
});