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
    
            'modifier(has-dropdown)': {
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
        placement: 'left',

        'min-width': '200px',
        'transition': theme.core.transition,
        'box-shadow': `1px 1px 2px 1px ${theme.colors.opaque['dark-1']}`,

        item: {
            link: {
                'border-top': `1px solid ${theme.colors.opaque['dark-1']}`,
                'background': theme.colors.greyscale['grey-1'],
                'padding': '0.75rem',
                'transition': theme.core.transition,
                'color': theme.colors.brand['brand-1'],
                'font-size': theme.typography.sizes['size-2']
            },

            ':hover': {
                link: {
                    disableCascade: true,
                    'color': theme.colors.greyscale.white,
                    'background': theme.colors.brand['brand-1']
                }
            },
        }
    },
})