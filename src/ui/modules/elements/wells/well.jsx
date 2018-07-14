import defaults from './wells.json';

/**
 * Render Well module
 *
 * @prop {String} name
 */
const Well = props => {
    const config = Object.assign(defaults.wells, window.theme.wells);

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