import defaults from './logo.json';

/**
 * Render Logo component
 *
 * @prop {String} href
 * @prop {String} src
 * @prop {String} alt
 */
const Logo = ({ href, src, alt, ...props }) => {
    const config = Object.assign(defaults.logo, window.theme.logo);

    return (
        <Module name={config.name} {...props}>
            <a href={href} alt={alt}><img src={src} alt={alt} /></a>
        </Module>
    );
}

export default Logo;