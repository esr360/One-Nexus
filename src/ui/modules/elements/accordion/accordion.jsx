import defaults from './accordion.json';
import interactions from './accordion.js';

const globals = {
    verticalRhythm: {
        'position': 'relative'
    }
}

function styles(element, globals) {
    const colors = {
        primary: 'red',
        secondary: 'blue'
    }

    const styles = {
        ...globals.verticalRhythm,
    
        'display': 'block',
        'color': colors.primary,
        'padding': '1em',

        foo: () => styles.panel['margin-bottom'] ? '1em' : 0,

        modifiers: {
            foo: {
                'font-size': '2em',

                panel: {
                    'color': colors.primary
                }
            }
        },

        panel: {
            'display': 'block',
            'margin-bottom': '1em',

            ':hover': {
                'color': element.modifier('foo') ? colors.primary : colors.secondary,

                title: {
                    'color': colors.primary
                }
            },

            modifiers: {
                active: {

                }
            }
        }
    }

    return styles;
}

function setStyles(element, styles, globals, theme) {
    console.log(element, styles(element, globals), theme);

    
}

/**
 * Render Accordion module
 *
 * @prop {Array} panels
 * @prop {Function} toggle
 */
const Accordion = ({ panels, toggle, styles, ...props }) => {
    const config = Object.assign(defaults.accordion, window.theme.accordion);

    return (
        <Module name={config.name} {...props} ref={node => setStyles(ReactDOM.findDOMNode(node), styles, globals)}>
            {panels.map(({ title, content, active }, index) => (
                <Component modifiers={active ? ['active'] : false} name='section' key={index}>
                    <Component name='title' onClick={toggle}>
                        <Component name='toggle' className='fa fa-chevron-circle-down' /> {title}
                    </Component>
                    <Component name='content'>{content}</Component>
                </Component>
            ))}
        </Module>
    );
}

Object.assign(Accordion, interactions, {
    defaultProps: {
        object: true,
        toggle: interactions.toggle,
        styles: styles
    }
});

export default Accordion;