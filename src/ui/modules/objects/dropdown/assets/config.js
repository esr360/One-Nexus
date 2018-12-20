export default theme => ({
    'name': 'dropdown',
    'target': 'ul',
    'text-align': 'left',
    'transition': ['#CORE', 'transition'],
    'font-size': ['#FONT-SIZE', 'size-2', true],
    'min-width': '175px',
    'top-position': '0',
    'dropdown-icon': '\\f105',
    'low-level-icon': '\\f105',
    'link': {
        'color': ['#COLOR', 'greyscale', 'grey-4'],
        'background': ['#COLOR', 'greyscale', 'grey-1'],
        'padding': '0.6rem',
        'border-top': '1px solid',
        'border-top-color': ['#COLOR', 'greyscale', 'grey-2'],
        'hover': {
            'color': ['#COLOR', 'greyscale', 'white'],
            'background': ['#COLOR', 'brand', 'brand-1'],
            'border-color': ['#COLOR', 'brand', 'brand-1']
        },
        'active': {
            'color': ['#COLOR', 'brand', 'brand-1'],
            'background': ['#COLOR', 'brand', 'brand-1']
        }
    }
})