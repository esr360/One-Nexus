export default theme => ({
    'name': 'form',
    'valid-color': theme.colors.validation.valid,
    'invalid-color': theme.colors.validation.invalid,

    label: {
        'color': theme.core['text-color'](theme),
        'transition': theme.core.transition
    },

    input: {
        'color': theme.core['text-color'](theme),
        'border': '1px solid',
        'border-color': theme.colors.greyscale['grey-3'],
        'padding': '0.75em',
        'transition': theme.core.transition,
        'font-family': theme.core['font-family'](theme.typography)
    },

    select: {
        'color': theme.core['text-color'](theme),
        'border': '1px solid',
        'border-color': theme.colors.greyscale['grey-3'],
        'padding': '0.75em',
        'transition': theme.core.transition,
        'font-family': theme.core['font-family'](theme.typography)
    },

    legend: {
        'margin-bottom': '1rem',
        'font-size': theme.typography.sizes['size-4']
    },

    fieldset: {
        gutter: theme.core.margin
    }
});