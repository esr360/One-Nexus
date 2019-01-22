import defaults from './assets/config.js';
import layout from './assets/layout.js';

/**
 * Render Heading component
 */
const Heading = ({ heading, size, modifiers=[], ...props }) => {
    if (size) modifiers.push(`size-${size}`);

    return (
        <Module tag={`h${heading}`} modifiers={modifiers} {...props}>
            {props.children}
        </Module>
    );
}

export default Object.assign(Heading, {
    layout, defaults, defaultProps: {
        name: 'Heading',
        fluid: true,
        heading: 3
    }
});