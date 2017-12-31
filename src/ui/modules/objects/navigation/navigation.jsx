import defaults from './navigation.json';

/**
 * Render Navigation component
 *
 * @param {String} props.name
 * @param {Array}  props.modifiers
 * @param {Array}  props.items
 */
export const Navigation = ({name = defaults.navigation.name, modifiers, items}) => (
    <Module name={name} modifiers={modifiers} className="min-break-3">
        <ul>
            {items.map((item, index) => (
                <li key={index}>item</li>
            ))}
        </ul>
    </Module>
);