import defaults from './logo.json';

/**
 * Render Logo component
 *
 * @param {String} props.name
 * @param {Array}  props.modifiers
 */
export const Logo = ({name = defaults.logo.name, modifiers}) => (
    <Module name={name} modifiers={modifiers}>
        <a href="" alt="One-Nexus logo">
            <img src="assets/images/logo-light.png" alt="One-Nexus Logo" />
        </a>
    </Module>
);