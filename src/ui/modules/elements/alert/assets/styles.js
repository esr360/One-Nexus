export default ({ state, config, utils, context }) => [config, {
  ...(config.object && utils.object(state, config.gutter)),

  'position': 'relative',
  'background-color': Module.findValueFromState(config.alerts, state)?.color,

  // ...context.Container.hovered({
  //   'background-color': 'blue'
  // }),

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