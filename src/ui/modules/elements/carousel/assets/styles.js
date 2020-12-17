export default ({ state, config, utils }) => [config, {
  ...(config.object && utils.object(state, config.gutter)),

  'position': 'relative',

  frame: () => ({
    position: 'relative',
  }),

  navigation: () => ({
    'display': 'flex',
    'position': 'absolute',
    'top': '50%',
    'transform': 'translateY(-50%)',
    'width': '100%'
  }),

  control: ({ state: next }) => ({
    'margin-left': next && 'auto',

    ':focus': {
      'outline': 0
    },

    ':disabled': {
      'cursor': 'not-allowed'
    }
  }),
  
  slider: () => ({
    'text-align': 'center'
  }),

  pager: () => ({
    'text-align': 'center'
  }),

  dot: ({ state: isFirstChild }) => ({
    'border-radius': '50%',
    'margin-left': isFirstChild ? 0 : '0.5em',

    ':focus': {
      'outline': 0
    },

    ':disabled': {
      'cursor': 'not-allowed'
    }
  })
}, state];