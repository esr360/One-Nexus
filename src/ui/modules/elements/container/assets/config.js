export default (theme) => ({
  name: 'Container',
  object: true,
  gutter: theme.tokens.margin,

  'width': '90%',
  'max-width': theme.grid.breakpoints['break-4'],

  'is-large': {
    'max-width': theme.grid.breakpoints['break-6']
  },

  'is-section': {
    'padding-top': theme.tokens.margin,
    'padding-bottom': theme.tokens.margin
  }
});