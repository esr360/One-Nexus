export default theme => ({
    'name': 'overlay',
    'background': theme.colors.opaque['dark-4'],
    'light-background': theme.colors.greyscale.white,
    'z-index': 11,
    'transition': theme.core.transition
})