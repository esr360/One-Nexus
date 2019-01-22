import defaults from './assets/config.js';
import layout from './assets/layout.js';
import interactions from './assets/interactions';

/**
 * Render Tooltip module\
 */
const Tooltip = ({ position, content, ...props }) => {
    let modifiers = props.modifiers || [];

    if (!Object.keys(props).some(prop => ['top', 'bottom', 'left', 'right'].includes(prop))) {
        modifiers.push(position);   
    }

    return (
        <Module {...props} modifiers={modifiers} tag='span'>
            {props.children}

            <Component name='wrapper' tag='span'>
                <Component name='content' tag='span'>
                    <Component name='arrow' tag='span' /> {content} 
                </Component>
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