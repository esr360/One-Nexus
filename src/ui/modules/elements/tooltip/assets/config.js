export default theme => ({
    'name': 'tooltip',
    'distance': '1em',
    'arrow-size': '0.5em',
    'arrow-color': theme.colors.opaque['dark-8'],
    'wrapper': {
        'transition': theme.core.transition,
        'max-width': '400px'
    },
    'content': {
        'padding': '0.5em 0.75em',
        'border-radius': '0',
        'line-height': '1.75',
        'background': theme.colors.opaque['dark-8'],
        'font-size': theme.typography.sizes['size-2'],
        'font-family': theme.core['font-family'](theme.typography),
        'text-transform': 'none',
        'font-weight': 'normal',
        'color': 'white',
        'z-index': 9999
    }
})