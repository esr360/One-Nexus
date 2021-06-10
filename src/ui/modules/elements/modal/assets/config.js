export default (theme) => ({
  name: 'Modal',

  'dafault-animation': 'left',
  'background': theme.colors.greyscale['grey-1'],
  'width': '650px',
  'border-radius': 0,
  'transition': theme.tokens.transition,
  'z-index': 14,
  'top-position': '50%',

  'content': {
    'padding': '2em'
  },

  close: {
    component: <Icon glyph="times" />,

    'is-icon': {
      'font-size': theme.typography.sizes['size-6'],
      'top': '1rem',
      'right': '1rem',
      'transition': theme.tokens.transition,

      ':hover': {
        'color': theme.colors.brand['brand-1']
      }
    }
  }
});