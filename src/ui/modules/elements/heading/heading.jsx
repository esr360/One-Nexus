import defaults from './assets/config.js';
import layout from './assets/layout.jss';

/**
 * Render Heading component
 */
const Heading = ({ heading, size, ...props }) => {
    if (size) props.modifiers.push(`size-${size}`);

    return (
        <Module tag={`h${heading}`} modifiers={props.modifiers} {...props}>
            {props.children}
        </Module>
    );
}

export default Object.assign(Heading, {
    layout, defaults, defaultProps: {
        name: 'Heading',
        modifiers: [],
        fluid: true,
        heading: 3
    }
});