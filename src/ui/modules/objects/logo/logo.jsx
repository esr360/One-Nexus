import defaults from './logo.json';

/**
 * Render Logo component
 *
 * @param {String} props.name
 * @param {Array}  props.modifiers
 */
export const Logo = ({name = defaults.logo.name, modifiers, href, src, alt}) => (
    <Module name={name} modifiers={modifiers}>
        <a href={href} alt={alt}>
            <img src={src} alt={alt} />
        </a>
    </Module>
);