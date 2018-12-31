export default theme => ({
    'name': 'preloader',
    'background': theme.colors.greyscale['grey-1'],
    'z-index': 99,
    'transition': theme.core.transition,
    'visible-at': theme.grid.breakpoints['break-2'],
    'spinner': {
        'background-color': 'transparent',
        'border': '8px solid',
        'border-radius': '50%',
        'border-color': theme.colors.brand['brand-1'],
        'border-top-color': theme.colors.opaque['dark-2'],
        'border-right-color': theme.colors.opaque['dark-2'],
        'width': '2.5em',
        'height': '2.5em'
    },
    'close': {
        'bottom': '4rem'
    }
})