export default (theme) => ({
  name: 'Carousel',
  object: true,
  gutter: theme.tokens.margin,
  background: 'deepskyblue',

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