export default theme => ({
    'name': 'breadcrumb',
    'font-size': '0.9em',
    'icon-color': theme.core['text-color'](theme),

    link: {
        'text-decoration': 'none',
        'border-bottom': '1px dotted transparent',
        'transition': theme.core.transition,

        ':hover': {
            'border-bottom-color': 'currentColor'
        }
    },

    icon: {
        'margin-right': '0.4em'
    },

    separator: {
        'margin-left': '0.4em'
    }
})