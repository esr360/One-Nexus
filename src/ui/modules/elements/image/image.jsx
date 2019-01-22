import defaults from './assets/config.js';
import layout from './assets/layout.js';

/**
 * Render Image component
 */
const Image = props => (
    <Module {...props}>
        <Component name='figure' tag='img' src={props.src}>{props.children}</Component>
    </Module>
);

export default Object.assign(Image, {
    layout, defaults, defaultProps: {
        name: 'Image'
    }
});