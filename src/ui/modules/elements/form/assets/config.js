export default theme => ({
  'name': 'Form',
  'valid-color': theme.colors.validation.valid,
  'invalid-color': theme.colors.validation.invalid,

  label: {
    'color': theme.typography.colors.base,
    'transition': theme.tokens.transition
  },

  input: {
    'color': theme.typography.colors.base,
    'border': '1px solid',
    'border-color': theme.colors.greyscale['grey-3'],
    'padding': '0.75em',
    'transition': theme.tokens.transition,
    'font-family': theme.typography.typefaces.primary
  },

  select: {
    'color': theme.typography.colors.base,
    'border': '1px solid',
    'border-color': theme.colors.greyscale['grey-3'],
    'padding': '0.75em',
    'transition': theme.tokens.transition,
    'font-family': theme.typography.typefaces.primary
  },

  legend: {
    'margin-bottom': '1rem',
    'font-size': theme.typography.sizes['size-4']
  },

  fieldset: {
    gutter: theme.tokens.margin
  }
});