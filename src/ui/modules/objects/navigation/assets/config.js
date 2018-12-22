export default theme => ({
    'name': 'navigation',
    'text-align': 'right',
    'font-size': '1em',
    'dropdown-icon': '\\f107',
    'item': {
        'border': '1px solid transparent',

        'modifier(top-level)': {
            'gutter': '0.5em',
            'padding': '0.5rem 0.75rem',
            'background': 'transparent',
            'transition': theme.core.transition,
            'border-radius': '0',

            ':hover': {
                'color': theme.colors.greyscale.white,
                'background': 'transparent',
                'border-color': theme.colors.greyscale.white
            }
        },

        'modifier(depth)': {
            'display': 'block'
        },

        'active': {
            'color': theme.colors.greyscale.white
        },

        'has-child': {
            'hover': {
                'color': theme.colors.brand['brand-1'],
                'background': theme.colors.greyscale['grey-1'],
                'border': '1px solid transparent'
            }
        }
    }
})