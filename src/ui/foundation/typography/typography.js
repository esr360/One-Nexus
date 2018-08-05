export default {
    'name': 'typography',
    'import-fonts': true,
    'typefaces': {
        'primary': ['Raleway', '100,300,700,900'],
        'secondary': ['Lato', '300,700']
    },
    'colors': {
        'base': colors => colors.greyscale['grey-4'],
        'heading': colors => colors.greyscale['grey-5'],
        'heavy': colors => colors.greyscale['grey-5'],
        'link': colors => colors.brand['brand-1'],
        'link-hover': colors => colors.brand['brand-1']
    },
    'sizes': {
        'size-1': '0.67em',
        'size-2': '0.83em',
        'size-3': '1em',
        'size-4': '1.17em',
        'size-5': '1.3em',
        'size-6': '1.5em',
        'size-7': '2em',
        'size-8': '2.4em',
        'size-9': '3em',
        'size-10': '3.4em'
    }
}