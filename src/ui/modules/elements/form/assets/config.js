export default ({ colors, typography, tokens }) => ({
  name: 'Form',
  validateFieldsOn: ['blur', 'change'],

  'valid-color': colors.validation.valid,
  'invalid-color': colors.validation.invalid,
  'gutter': tokens.margin,

  label: {
    'color': typography.colors.base,
    'transition': tokens.transition
  },

  input: {
    'color': typography.colors.base,
    'border': '1px solid',
    'border-color': colors.greyscale['grey-3'],
    'padding': '0.75em',
    'transition': tokens.transition,
    'font-family': typography.typefaces.primary
  },

  select: {
    'color': typography.colors.base,
    'border': '1px solid',
    'border-color': colors.greyscale['grey-3'],
    'padding': '0.75em',
    'transition': tokens.transition,
    'font-family': typography.typefaces.primary
  },

  legend: {
    'margin-bottom': '1rem',
    'font-size': typography.sizes['size-4']
  },

  fieldset: {
    gutter: tokens.margin
  }
});