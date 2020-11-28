import config from './assets/config.js';
import layout from './assets/layout.js';

/**
 * Render Logo component
 */
const Logo = ({ href, src, alt, ...props }) => {
    return (
        <Module {...props}>
            <Component name='link' tag='a' href={href} alt={alt}>
                <Component name='image' tag='img' src={src} alt={alt} />
            </Component>
        </Module>
    );
}

export default Object.assign(Logo, {
    layout, config, defaultProps: {
        name: 'Logo'
    }
});