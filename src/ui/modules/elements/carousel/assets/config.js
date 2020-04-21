export default (theme) => ({
  name: 'Carousel',
  object: true,
  gutter: theme.tokens.margin,
  background: 'deepskyblue',
  naturalSlideWidth: 2,
  naturalSlideHeight: 1,

  ':hover': {
    background: 'green'
  },

  navigation: {
    padding: '1em',
    background: 'pink'
  },

  pager: {
    padding: '1em',
    background: 'lime'
  },

  dot: {
    'is-active': {
      background: 'deepskyblue',
    }
  },

  control: {
    background: 'blue',
    color: 'white',

    ':hover': {
      background: 'pink'
    },

    ':disabled': {
      background: 'red'
    }
  }
})