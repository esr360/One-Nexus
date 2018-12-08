export default theme => ({
    'name': 'tabs',
    'nav': {
        'subComponent(item)': {
            'transition': theme.core.transition,
            'color': theme.core['text-color'](theme),
            'background': 'transparent',
            'round-radius': '0.6em',
            'padding': '0.75em 1.25em',
            'border': `1px solid ${theme.colors.greyscale['grey-3']}`,
            ':hover': {
                'color': theme.colors.greyscale.white,
                'background': theme.colors.brand['brand-3'],
                'border': `1px solid ${theme.colors.brand['brand-3']}`
            },
            'modifier(active)': {
                'color': theme.colors.greyscale.white,
                'background': theme.colors.brand['brand-1'],
                'border': `1px solid ${theme.colors.brand['brand-1']}`
            }
        }
    },
    'content': {
        'color': theme.core['text-color'](theme),
        'background': theme.colors.greyscale.white,
        'border': '1px solid',
        'border-color': theme.colors.greyscale['grey-2'],
        'padding': '1.5em',
        'glueHeight': '6px',
        'glueColor': theme.colors.brand['brand-1']
    }
});