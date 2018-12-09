import defaults from './assets/config.js';
import layout from './assets/layout.jss';

/**
 * Render Tooltip module\
 */
const Tooltip = ({ position, content, ...props }) => {
    ['top', 'bottom', 'left', 'right'].forEach($position => {
        position = Object.keys(props).includes($position) ? $position : position;
    });

    return (
        <Module {...props}>
            <Component name='container'>
                {props.children}

                <Component name='wrapper' modifiers={[position]}>
                    <Component name='content'>{content}</Component>
                </Component>
            </Component>
        </Module>
    );
}
export default Object.assign(Tooltip, {
    layout, defaults, defaultProps: {
        name: 'Tooltip',
        position: 'top'
    }
});