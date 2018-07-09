import defaults from './header.json';

/**
 * Render Header component
 */
const Header = props => {
    const config = Object.assign(defaults.header, window.theme.header);

    return (
        <Module name={config.name} {...props}>
            <Component name='wrapper'>{props.children}</Component>
        </Module>
    );
};

export default Header;