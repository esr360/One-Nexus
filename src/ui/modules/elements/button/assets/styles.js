import Color from 'color';

export default ({ theme, state, context, config, utils }) => [config, {
  'display': 'inline-block',
  'border-color': 'transparent',
  'text-decoration': 'none',
  'vertical-align': 'middle',
  'cursor': 'pointer',
  'font-size': utils.fontSize(state, config.sizes, theme, config),

  ...Object.entries(config.colors).reduce(($, [key, value]) => state[key] ? {
    'background-color': value,
    'border-color': 'transparent',

    'color': (prev) => {
      return Color(value).luminosity() > config.lightThreshold ? config.colorInverse : prev;
    },

    'hovered': {
      'font-size': '1.5em',
      'background-color': config.hovered['background-color']?.(value)
    },

    'is-border': {
      'background-color': 'transparent',
      'color': value,
      'border-color': value,

      'hovered': {
        'background-color': value,
        'color': config.color
      }
    }
  } : $, {}),

  'is-block': {
    'width': '100%',
    'text-align': 'center'
  },

  'is-disabled': {
    'transition-delay': '999s',
    'cursor': 'not-allowed'
  },

  'is-icon': {
    'text-align': 'center'
  },

  icon: () => ({
    'height': '1em',
    'width': '1em'
  }),

  ...(context.group && {
    'margin-left': state.isFirstChild ? 0 : null,

    ...(context.group.pills && {
      'flex-basis': '100%',
      'margin-left': 0,

      ...(context.group.round && {
        'border-top-left-radius': state.isFirstChild && config['is-round']['border-radius'],
        'border-bottom-left-radius': state.isFirstChild && config['is-round']['border-radius'],
        'border-top-right-radius': state.isLastChild && config['is-round']['border-radius'],
        'border-bottom-right-radius': state.isLastChild && config['is-round']['border-radius'],
      })
    }),

    ...(context.group.stack && {
      ...(utils.minWidth(config.group.stack) && {
        'display': 'block',
        'width': '100%',
        'margin-top': '1em',
        'margin-right': 0,
        'margin-left': 0,
        'text-align': 'center'
      })
    })
  }),

  group: ({ state }) => ({
    ...(config.group.object && utils.object(state, config.group.gutter)),

    'is-pills': {
      'display': 'flex'
    }
  })
}];