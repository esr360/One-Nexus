export default (theme) => ({
  object: true,
  gutter: theme.tokens.margin,
  persist: true,

  title: {
    'background': 'transparent',
    'color': 'grey',
    'border': `1px solid ${theme.colors.opaque['dark-2']}`,
    'padding': '1em',

    'panel-is-active': {
      'background': theme.colors.brand['brand-2'],
      'color': theme.colors.greyscale.white,
      'border-color': 'transparent'
    },

    ':hover': {
      'background': theme.colors.brand['brand-3'],
      'color': theme.colors.greyscale.white
    }
  },

  toggle: {
    'color': theme.colors.opaque['dark-4'],
    'transition': theme.tokens.transition,

    'panel-is-active': {
      'color': theme.colors.greyscale.white
    },

    'title:hover': {
      'color': theme.colors.greyscale.white
    }
  },

  content: {
    'background': 'white',
    'color': 'grey',
    'border': `1px solid ${theme.colors.opaque['dark-2']}`,
    'padding': '1.5em',
  }
});