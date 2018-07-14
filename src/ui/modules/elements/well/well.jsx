import defaults from './well.json';

/**
 * Render Well module
 */
const Well = props => {
    const config = Object.assign(defaults.well, window.theme.well);

    return (
        <Module name={config.name} {...props}>
            {props.children}
        </Module>
    );
}

Well.defaultProps = {
    object: true
};

export default Well;