export default theme => ({
    'name': 'accordion',

    title: {
        'background': 'transparent',
        'color': 'grey',
        'border': `1px solid ${theme.colors.opaque['dark-2']}`,
        'border-radius': 0,
        'padding': '1em',
        'transition': '0.4s',

        ':hover': {
            'background': theme.colors.brand['brand-1'],
            'color': theme.colors.greyscale.white,

            toggle: {
                'color': theme.colors.greyscale.white
            }
        }
    },

    toggle: {
        'color': theme.colors.opaque['dark-4'],
        'transition': theme.core.transition
    },

    content: {
        'background': 'white',
        'color': 'grey',
        'border': '1px solid rgba(0,0,0, 0.15)',
        'border-radius': 0,
        'padding': '1.5em'
    },

    panel: {
        'modifier(active)': {
            title: {
                'background': theme.colors.brand['brand-2'],
                'color': theme.colors.greyscale.white,
                'border-color': 'transparent',
                'border-radius': 0
            },

            toggle: {
                'color': theme.colors.greyscale.white
            }
        }
    }
});