import defaults from './assets/config.js';
import interactions from './assets/interactions.js';
// import layout from './assets/layout.js';

import foo from './assets/layout.scss';

/**
 * Render Accordion module
 */
const Accordion = ({ panels, toggle, ...props }) => (
    <Module {...props}>
        {panels.map(({ title, content, active, ref }, index) => (
            <Component ref={ref} active={active} name='panel' key={index}>
                <Component name='title' tag='div' onClick={toggle}>
                    <Component name='toggle' className='fa fa-chevron-circle-down' /> {title}
                </Component>

                <Component name='content'>{content}</Component>
            </Component>
        ))}
    </Module>
);

export default Object.assign(Accordion, {
    ...interactions, defaults, defaultProps: {
        name: 'Accordion',
        object: true
    }
});