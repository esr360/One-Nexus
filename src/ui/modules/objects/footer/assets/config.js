export default theme => ({
    'name': 'footer',
    'background': theme.colors.greyscale['grey-6'],
    'wrapper': {
        'padding': '4em 0',
        'color': theme.colors.greyscale['grey-3']
    },
    'link': {
        'color': theme.colors.greyscale['grey-3'],
        'text-decoration': 'none',
        'transition': theme.core.transition,
        ':hover': {
            'color': theme.colors.greyscale.white
        }
    }
})