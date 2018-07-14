import defaults from './billboard.json';

/**
 * Render Billboard component
 */
const Billboard = props => {
    const config = Object.assign(defaults.billboard, window.theme.billboard);

    return (
        <Module name={config.name} {...props}>
            <Component name='wrapper'>
                {props.children}
            </Component>
        </Module>
    );
}

Billboard.defaultProps = {};

export default Billboard;