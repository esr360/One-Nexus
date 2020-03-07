export default ({ state, config, utils }) => [config, {
  ...(config.object && utils.object(state, config.gutter)),

  'position': 'relative',
  'background-color': config.alerts[state.alert].color,

  dismiss: () => ({
    cursor: 'pointer',
    float: 'right',
    lineHeight: 1.25
  }),

  icon: ({ state }) => ({
    'margin-right': state.right ? 0 : '0.5em',
    'margin-left': state.right ? '0.5em' : 0,
    'float': state.right ? 'right' : 'left',
    'line-height': 1.25,
  })
}];