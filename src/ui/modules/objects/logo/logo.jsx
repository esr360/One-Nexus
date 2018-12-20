import defaults from './assets/config.js';
import layout from './assets/layout.jss';

/**
 * Render Logo component
 */
const Logo = ({ href, src, alt, ...props }) => {
    return (
        <Module {...props}>
            <a href={href} alt={alt}><img src={src} alt={alt} /></a>
        </Module>
    );
}

export default Object.assign(Logo, {
    layout, defaults, defaultProps: {
        name: 'Logo'
    }
});