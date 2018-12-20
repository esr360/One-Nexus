export default theme => ({
    'name': 'navigation',
    'text-align': 'right',
    'font-size': '1em',
    'dropdown-icon': '\\f107',
    'global-item': {
        'padding': '0.5rem 0.75rem',
        'color': ['#COLOR', 'greyscale', 'white'],
        'border': '1px solid transparent'
    },
    'item': {
        'gutter': '0.5em',
        'background': 'transparent',
        'transition': ['#CORE', 'transition'],
        'border-radius': '0',
        'hover': {
            'color': ['#COLOR', 'greyscale', 'white'],
            'background': 'transparent',
            'border': '1px solid',
            'border-color': ['#COLOR', 'greyscale', 'white']
        },
        'active': {
            'color': ['#COLOR', 'greyscale', 'white']
        },
        'has-child': {
            'hover': {
                'color': ['#COLOR', 'brand', 'brand-1'],
                'background': ['#COLOR', 'greyscale', 'grey-1'],
                'border': '1px solid transparent'
            }
        }
    }
})