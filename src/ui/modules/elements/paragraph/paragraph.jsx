import defaults from './paragraph.json';

/**
 * Render Paragraph module
 */
const Paragraph = props => {
    const config = Object.assign(defaults.paragraph, window.theme.paragraph);

    return (
        <Module name={config.name} {...props}>
            {props.children}
        </Module>
    );
}

Paragraph.defaultProps = {
    object: true,
    tag: 'p'
};

export default Paragraph;