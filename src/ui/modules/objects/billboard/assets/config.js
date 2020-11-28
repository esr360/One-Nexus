export default theme => ({
    'name': 'billboard',
    'min-height': '200px',
    'padding': '3em 0',
    'color': theme.colors.greyscale.white,
    'active-color': theme.colors.brand['brand-2'],

    'background': {
        'color': theme.colors.brand['brand-1'],
        'image': false
    },

    'fullscreen': {
        'enabled': false,
        'min-height': '700px'
    },

    'overlay': {
        'background-color': theme.colors.brand['brand-1'],
        'opacity': '0.6'
    }
})