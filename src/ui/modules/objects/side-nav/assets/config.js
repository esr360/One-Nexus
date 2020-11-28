export default theme => ({
    'name': 'sideNav',
    'width': '400px',
    'background': theme.colors.greyscale['grey-5'],
    'font-size': theme.typography.sizes['size-2'],
    'transition': theme.core.transition,

    item: {
        link: {
            'padding': '1.2em',
            'color': theme.colors.greyscale['grey-3'],
            'background': theme.colors.greyscale['grey-5'],
            'border-top': '1px solid rgba(white, 0.05)',
            'border-top-color': theme.colors.opaque['dark-1'],
            'border-bottom': '1px solid',
            'border-bottom-color': theme.colors.opaque['dark-1'],
            'border-left': '5px solid rgba(black, 0.3)',
            'border-left-color': theme.colors.opaque['dark-4'],
            'border-right': 'none',
        },

        ':hover': {
            link: {
                disableCascade: true,
                'color': theme.colors.greyscale.white,
                'border-left': '5px solid',
                'border-left-color': theme.colors.brand['brand-1']
            }
        },

        'modifier(parent)': {
            link: {
                'color': theme.colors.greyscale['grey-2'],
                'background': 'rgba(black, 0.15)',
                'border-left': '5px solid',
                'border-left-color': theme.colors.brand['brand-1'],
            },
    
            ':hover': {
                link: {
                    disableCascade: true,
                    'background': theme.colors.brand['brand-1']
                }
            },
    
            'active': {
                link: {
                    'background': theme.colors.brand['brand-1']
                }
            }
        },
    },

    toggleDropdown: {
        'background': 'transparent',

        ':hover': {
            'background': theme.colors.opaque['dark-2']
        }
    },

    overlay: {
        'element': () => document.getElementById('overlay'),
        'enabled': true,
        'clickToClose': true,
        'z-index': 12
    },

    'collapsible': {
        'open-by-default': true,
        'icon': 'fa-chevron-circle-down'
    }
})