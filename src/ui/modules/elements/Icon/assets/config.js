export default (theme) => ({
  name: 'Icon',
  sizes: theme.typography.sizes,

  'in-group': {
    'margin-left': '0.5em'
  },

  group: {
    object: true,
    gutter: theme.tokens.margin,
  }
});