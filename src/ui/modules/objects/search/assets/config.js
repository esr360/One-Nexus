export default theme => ({
    'name': 'search',
    'background': theme.colors.greyscale['grey-5'],
    'height': '60px',
    'transition': theme.core.transition,

    'input': {
        'background': theme.colors.greyscale['grey-5'],
        'color': theme.colors.greyscale.white,
        'font-weight': 'lighter'
    },

    'placeholder': {
        'color': theme.core['text-color'](theme),
        'font-weight': 'lighter',
        'transition': theme.core.transition
    }
})