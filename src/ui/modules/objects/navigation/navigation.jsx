import defaults from './navigation.json';

/**
 * Render Navigation component
 *
 * @param {String} props.name
 * @param {Array}  props.modifiers
 */
export const Navigation = ({name = defaults.navigation.name, modifiers}) => (
    <Module name={name} modifiers={modifiers} className="min-break-3">
        <ul>
            <li>
                <a href="#">Link 1</a>
                <ul>
                    <li>
                        <a href="#">Link 1</a>
                        <ul>
                            <li><a href="#">Link 3</a></li>
                            <li>
                                <a href="#">Link 1</a>
                                <ul>
                                    <li><a href="#">Link 2</a></li>
                                    <li><a href="#">Link 3</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
        </ul>
    </Module>
);