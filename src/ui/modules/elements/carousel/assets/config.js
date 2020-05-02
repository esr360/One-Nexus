export default (theme) => ({
  name: 'Carousel',
  object: true,
  gutter: theme.tokens.margin,
  naturalSlideWidth: 2,
  naturalSlideHeight: 1,

  frame: {
    background: theme.colors.opaque['dark-1'],
  },

  control: {
    borderStyle: 'none',
    background: theme.colors.brand['brand-4'],
    color: 'white',
    height: '2em',
    width: '2em',

    ':focus': {
      boxShadow: `0 0 0 4px ${theme.colors.brand['brand-1']}`
    },

    ':hover': {
      background: theme.colors.brand['brand-2']
    },

    ':disabled': {
      background: theme.colors.brand['brand-3']
    },

    back: <Icon glyph='caret-left' />,
    next: <Icon glyph='caret-right' />
  },

  pager: {
    padding: '1em'
  },

  dot: {
    height: '1em',
    width: '1em',
    border: 'none',
    background: theme.colors.greyscale['grey-3'],

    ':focus': {
      boxShadow: `0 0 0 4px ${theme.colors.brand['brand-1']}`
    },

    ':hover': {
      background: theme.colors.brand['brand-4']
    },

    ':disabled': {
      background: theme.colors.brand['brand-3']
    }
  }
});