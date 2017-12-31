import defaults from './header.json';

/**
 * Render Header component
 *
 * @param {String} props.name
 * @param {Object} props.logo
 * @param {Object} props.navigation
 * @param {Array}  props.modifiers
 */
export const Header = ({name = defaults.header.name, modifiers, content}) => (
    <Module name={name} modifiers={modifiers}>
        <Component name='wrapper'>{content}</Component>
    </Module>
);