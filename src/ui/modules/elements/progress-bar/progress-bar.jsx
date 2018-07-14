import defaults from './progress-bar.json';

/**
 * Render Paragraph module
 */
const ProgressBar = props => {
    const config = Object.assign(defaults['progress-bar'], window.theme['progress-bar']);

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