import defaults from './heading.json';

/**
 * Render Heading component
 *
 * @prop {Number} [heading = 3]
 * @prop {Number} size
 * @prop {Array} [modifiers = []]
 */
const Heading = ({ heading, size, modifiers = [], ...props }) => {
    const config = Object.assign(defaults.heading, window.theme.heading);

    if (size) modifiers.push(`size-${size}`);

    return (
        <Module name={config.name} tag={`h${heading}`} modifiers={modifiers} {...props}>
            {props.children}
        </Module>
    );
}

Heading.defaultProps = {
    fluid: true,
    heading: 3
};

export default Heading;