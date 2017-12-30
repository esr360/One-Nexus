import defaults from './header.json';

import { Logo } from '../logo/logo.jsx';
import { Navigation } from '../navigation/navigation.jsx';

/**
 * Render Header component
 *
 * @param {String} props.name
 * @param {Array}  props.modifiers
 */
export const Header = ({name = defaults.header.name, modifiers}) => (
    <Module name={name} modifiers={modifiers}>
        <Component name="wrapper">
            <Logo />
            <Navigation />
            <div className="sideNav_toggle button-icon-primary max-break-3">
                <i className="fa fa-bars"></i>
            </div>
        </Component>
    </Module>
);