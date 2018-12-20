export default theme => ({
    'name': 'header',
    'background': ['#CORE', 'background'],
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
        'background': ['#COLOR', 'greyscale', 'grey-6']
    },
    'fixed': false,
    'sticky': {
        'enabled': false,
        'background': ['#COLOR', 'greyscale', 'grey-6'],
        'logo-height': '28px',
        'font-size': ['#FONT-SIZE', 'size-2'],
        'wrapper': {
            'height': '70px'
        }
    },
    'overlay': 'overlay',
    'navigation': 'navigation'
})