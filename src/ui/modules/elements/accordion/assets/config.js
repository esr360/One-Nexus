export default theme => ({
  title: {
    'background': 'transparent',
    'color': 'grey',
    'border': `1px solid ${theme.colors.opaque['dark-2']}`,
    'border-radius': 0,
    'padding': '1em',
    'transition': '0.4s',

    'is-hovered': {
      'background': theme.colors.brand['brand-6'],
      'color': theme.colors.greyscale.white,
    },

    'with-panel': {
      'is-active': {
        'background': theme.colors.brand['brand-2'],
        'color': theme.colors.greyscale.white,
        'border-color': 'transparent',
        'border-radius': 0
      }
    }
  },

  toggle: {
    'color': theme.colors.opaque['dark-4'],
    'transition': theme.core.transition,

    'with-panel': {
      'is-active': {
        'color': theme.colors.greyscale.white
      }
    },

    'with-title': {
      'is-hovered': {
        'color': theme.colors.greyscale.white
      }
    }
  },

  content: {
    'background': 'white',
    'color': 'grey',
    'border': '1px solid rgba(0,0,0, 0.15)',
    'border-radius': 0,
    'padding': '1.5em'
  },
});