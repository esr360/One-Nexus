import defaults from './assets/config.js';
import layout from './assets/layout.jss';
import interactions from './assets/interactions';

/**
 * Render Tooltip module\
 */
const Tooltip = ({ position, content, ...props }) => {
    return (
        <Module {...props}>
            {props.children}

            <Component name='wrapper'>
                <Component name='content'>{content}</Component>

                <Component name='arrow' />
            </Component>
        </Module>
    );
}
export default Object.assign(Tooltip, {
    ...interactions, layout, defaults, defaultProps: {
        name: 'Tooltip',
        position: 'top'
    }
});