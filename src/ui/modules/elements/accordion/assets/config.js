export default (theme) => {
  return {
    object: true,

    title: {
      'background': 'transparent',
      'color': 'grey',
      'border': `1px solid ${theme.colors.opaque['dark-2']}`,
      'padding': '1em',

      'with-panel': {
        'is-active': {
          'background': theme.colors.brand['brand-2'],
          'color': theme.colors.greyscale.white,
          'border-color': 'transparent'
        }
      },

      'is-hovered': {
        'background': theme.colors.brand['brand-6'],
        'color': theme.colors.greyscale.white
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
      'padding': '1.5em',
    }
  }
}