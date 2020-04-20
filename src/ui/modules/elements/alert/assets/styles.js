export default ({ state, config, utils, context }) => [config, {
  ...(config.object && utils.object(state, config.gutter)),

  'position': 'relative',
  'background-color': config.alerts[Object.keys(state).find($ => config.alerts[$])]?.color,

  ...(context.Container.isHovered && {
    'background-color': 'blue'
  }),

  icon: ({ state }) => ({
    'margin-right': '0.5em',
    'float': 'left',
    'line-height': 1.25,

    ...(state.right && {
      'margin-right': 0,
      'margin-left': '0.5em',
      'float': 'right',
    }),

    ...(state.dismiss && {
      cursor: 'pointer',
      lineHeight: 1.25
    })
  })
}, state];