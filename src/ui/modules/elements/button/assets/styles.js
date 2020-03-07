import Color from 'color';

export default ({ element, theme, state, context, config, utils }) => [config, {
  'display': 'inline-block',
  'border-color': 'transparent',
  'text-decoration': 'none',
  'vertical-align': 'middle',
  'cursor': 'pointer',
  'font-size': utils.fontSize(element, config.sizes, theme),
  'padding': `${config['padding-y']} ${config['padding-x']}`,

  ...Object.entries(config.colors).reduce((result, [key, value]) => {
    return state[key] && !state.active ? {
      'background-color': state.border ? 'transparent' : value,
      'border-color': state.border ? value : 'transparent',
      'color': (prev) => {
        if (Color(value).luminosity() > 0.6 && !state.border) {
          return theme.colors.opaque['dark-4'];
        }

        return state.border ? value : prev;
      },

      ':hover': {
        ...['background-color', 'border-color'].reduce(($, prop) => {
          return $[prop] = config[':hover'].background(value), $;
        }, {}),

        'color': config.color
      }
    } : result;
  }, {}),

  'is-block': {
    'width': '100%',
    'text-align': 'center'
  },

  'is-disabled': {
    'transition-delay': '999s',
    'opacity': config['disabled-opacity'],
    'cursor': 'not-allowed'
  },

  'is-round': {
    'border-radius': config['round-radius']
  },

  'is-oval': {
    'border-radius': '1em'
  },

  'is-sharp': {
    'border-radius': 0
  },

  'is-icon': {
    'text-align': 'center',
    'padding': config['padding-y']
  },

  'is-active': {
    'background': config.active.background,
    'border-color': config.active.background,
    'color': config.color,

    ':hover': {
      'background': 'red',
      'border-color': 'red'
    }
  },

  icon: () => ({
    'height': '1em',
    'width': '1em'
  }),

  ...(context.group && {
    'margin-left': !state.isFirstChild && config['group-spacing'],

    ...(context.group.pills && {
      'display': 'table-cell',
      'margin-left': 0,

      ...(context.group.round && {
        'border-top-left-radius': state.isFirstChild && config['round-radius'],
        'border-bottom-left-radius': state.isFirstChild && config['round-radius'],
        'border-top-right-radius': state.isLastChild && config['round-radius'],
        'border-bottom-right-radius': state.isLastChild && config['round-radius'],
      })
    })
  }),

  ...(context.group.stack && {
    ...(window.matchMedia(`(max-width: ${config['group-stack']}`).matches && {
      'display': 'block',
      'width': '100%',
      'margin-top': '1em',
      'margin-right': 0,
      'margin-left': 0,
      'text-align': 'center'
    })
  }),

  group: {
    'margin-bottom': '1em',

    'is-pills': {
      'display': 'table',
      'width': '100%',
    }
  }
}];