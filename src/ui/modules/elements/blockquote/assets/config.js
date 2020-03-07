export default (theme) => ({
  object: true,
  gutter: theme.tokens.margin,

  'font-family': 'Georgia, serif',

  'is-callout': {
    'padding': '0.5em 0.75em',
    'font-size': theme.typography.sizes['size-5'],
    'border-left': '7px solid',
    'border-left-color': theme.colors.opaque['dark-1']
  },

  footer: {
    'font-size': theme.typography.sizes['size-2'],
    'font-style': 'italic',
    'color': theme.colors.opaque['dark-4']
  }
});