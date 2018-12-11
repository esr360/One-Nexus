import defaults from './assets/config.js';
import layout from './assets/layout.jss';

/**
 * Render Tooltip module\
 */
const Tooltip = ({ position, content, ...props }) => {
    return (
        <Module {...props}>
            <Component name='container'>
                {props.children}

                <Component name='wrapper'>
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