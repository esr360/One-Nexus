export default theme => ({
    name: 'heading',
    sizes: theme.typography.sizes,

    'in-group': {
      'line-height': 0.8,
      gutter: '0.5em',
    },
    
    group: {
      object: true,
      gutter: theme.tokens.margin,
    }
});