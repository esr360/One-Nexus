import defaults from './tooltip.json';

/**
 * Render Tooltip module
 *
 * @prop {String} name
 */
const Tooltip = ({ position, ...props }) => {
    const config = Object.assign(defaults.tooltip, window.theme.tooltip);

    ['top', 'bottom', 'left', 'right'].forEach($position => {
        position = Object.keys(props).includes($position) ? $position : position;
    });

    return (
        <Module name={config.name} {...props}>
            {props.children}

            <Component name='wrapper' modifiers={[position]}>
                <Component name='content'>Content</Component>
            </Component>
        </Module>
    );
}

Tooltip.defaultProps = {
    tag: 'span',
    position: 'top'
};

export default Tooltip;