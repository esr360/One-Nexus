import defaults from './progress-bars.json';

/**
 * Render Paragraph module
 *
 * @prop {String} name
 */
const ProgressBar = props => {
    const config = Object.assign(defaults['progress-bars'], window.theme['progress-bars']);

    return (
        <Module name={config.name} {...props}>
            {props.children}
        </Module>
    );
}

ProgressBar.defaultProps = {
    object: true,
    tag: 'progress'
};

export default ProgressBar;