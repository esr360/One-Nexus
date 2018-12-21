export default theme => ({
    'name': 'header',
    'background': theme.core['background'](theme.colors),
    'font-size': '1em',
    'bar': true,

    'wrapper': {
        'height': '85px'
    },

    'absolute': {
        'enabled': false,
        'margin-top': 0,
        'z-index': 5
    },

    'dark': {
        'enabled': false,
        'background': theme.colors.greyscale['grey-6']
    },

    'fixed': false,

    'sticky': {
        'enabled': false,
        'background': theme.colors.greyscale['grey-6'],
        'logo-height': '28px',
        'font-size': theme.typography.sizes['size-2'],
        'wrapper': {
            'height': '70px'
        }
    },

    'overlay': 'overlay',
    'navigation': 'navigation'
})