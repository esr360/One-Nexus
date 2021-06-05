export default (theme) => ({
  name: 'Modal',

  'dafault-animation': 'left',
  'background': theme.colors.greyscale['grey-1'],
  'color': theme.core['text-color'](theme),
  'width': '650px',
  'border-radius': 0,
  'transition': theme.core.transition,
  'z-index': 14,
  'top-position': '50%',
  'content': {
    'padding': '2em'
  },
  'close': {
    'modifier(icon)': {
      'font-size': theme.typography.sizes['size-6'],
      'top': '1rem',
      'right': '1rem',
      'transition': theme.core.transition,
      ':hover': {
        'color': theme.colors.brand['brand-1']
      }
    }
  },
  'overlay': {
    'element': () => document.getElementById('overlay'),
    'enabled': true,
    'clickToClose': true,
    'background': 'rgba(black, 0.4)',
    'z-index': 12
  }
});