
export default {
    'name': 'accordion',
    'background': 'blue',

    panel: {
        'modifier(active)': {
            title: {
                'background': 'green',
                'color': 'white',
                'border-color': 'transparent',
                'border-radius': 0
            },
            toggle: {
                'color': 'white'
            }
        }
    },

    title: {
        'background': 'transparent',
        'color': 'grey',
        'border': '1px solid rgba(black, 0.15)',
        'border-radius': 0,
        'padding': '1em',
        'transition': '0.4s',

        ':hover': {
            'background': 'yellow',
            'color': 'white',

            toggle: {
                'color': 'white'
            }
        }
    },

    toggle: {
        'color': 'rgba(0,0,0,0.4)',
        'transition': '0.4s'
    },

    content: {
        'background': 'white',
        'color': 'grey',
        'border': '1px solid rgba(black, 0.15)',
        'border-radius': 0,
        'padding': '1.5em'
    }
}