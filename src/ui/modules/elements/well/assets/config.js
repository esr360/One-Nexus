export default theme => ({
    'name': 'well',
    'background': 'white',
    'border': '1px solid',
    'border-color': theme.colors.opaque['dark-2'],
    'padding': '1em',
    'color': 'inherit',

    'modifier(dark)': {
        'background': theme.colors.opaque['dark-4'],
        'border': 'none',
        'color': theme.colors.greyscale.white
    },

    'modifier(round)': {
        'border-radius': '0.4em'
    },

    'modifier(border)': {
        'background': 'transparent'
    }
})