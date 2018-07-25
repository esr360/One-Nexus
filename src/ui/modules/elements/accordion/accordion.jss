
export default function(element, globals) {
    const colors = {
        primary: 'red',
        secondary: 'blue'
    }

    return {
        ...globals.verticalRhythm,

        panel: {
            'display': 'block',
            'margin-bottom': '1em',
            'color': element.modifier('foo') ? colors.primary : 'inherit',

            ':hover': {
                'color': element.modifier('foo') ? colors.primary : colors.secondary
            }
        },

        title: {
            'display': 'block',
            'margin': 0,
            'backface-visibility': 'hidden',
            'font-weight': 'normal',
            'line-height': 1,
            'cursor': 'pointer'
        },

        toggle: {
            'float': 'right',
            'line-height': 0.75,
            'transform': element.modifier('active') ? 'rotate(90deg) translateZ(0)' : false
        },

        content: {
            'display': element.modifier('active') ? 'block' : 'none',
            'margin': 0,
            'margin-top': '-1px'
        }
    }
}