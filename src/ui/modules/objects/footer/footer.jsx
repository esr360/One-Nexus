import defaults from './footer.json';

/**
 * Render Footer module
 */
const Footer = props => {
    const config = Object.assign(defaults.footer, window.theme.footer);

    return (
        <Module name={config.name} {...props}>
            <Component name='wrapper'>{props.children}</Component>
        </Module>
    );
}

export default Footer;