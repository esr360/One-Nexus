export default (theme) => ({
  object: true,

  'width': '90%',
  'max-width': theme.grid.breakpoints['break-4'],

  'is-large': {
    'max-width': theme.grid.breakpoints['break-6']
  },

  'is-section': {
    'padding-top': theme.core.margin,
    'padding-bottom': theme.core.margin
  }
});