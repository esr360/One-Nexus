export default theme => ({
    'name': 'navigation',
    'text-align': 'right',
    'font-size': '1em',

    menu: {
        item: {
            'gutter': '0.5em',

            link: {
                'border': '1px solid transparent',
                'transition': theme.core.transition,
                'border-radius': '0',
                'padding': '0.5rem 0.75rem',
                'background': 'transparent',
                'color': theme.colors.greyscale['grey-2']
            },

            ':hover': {
                link: {
                    'color': theme.colors.greyscale.white,
                    'background': 'transparent',
                    'border-color': theme.colors.greyscale.white
                }
            },
    
            'active': {
                link: {
                    'color': theme.colors.greyscale.white
                }
            },
    
            'modifier(has-child)': {
                ':hover': {
                    link: {
                        'color': theme.colors.brand['brand-1'],
                        'background': theme.colors.greyscale['grey-1'],
                        'border': '1px solid transparent'
                    }
                }
            }
        }
    },

    dropdown: {
        'min-width': '200px',
        'transition': theme.core.transition,

        item: {
            link: {
                'padding': '0.5rem 0.75rem',
                'background': theme.colors.greyscale['grey-6'],
                'color': theme.colors.greyscale.white
            }
        }
    },
})