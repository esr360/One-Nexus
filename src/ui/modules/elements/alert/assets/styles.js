export default ({ state, config: { alerts, ...config }, utils }) => [config, {
  ...(config.object && utils.object(state, config.gutter)),

  'position': 'relative',
  'background-color': alerts[state.alert || Object.keys(state).find(i => alerts[i])].color,

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