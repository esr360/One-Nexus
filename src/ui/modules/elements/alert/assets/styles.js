export default function({ state, config, theme }) {
  const layout = {
    ...(config.object && theme.object(state)),

    'position': 'relative',
    'display': state.dismissed ? 'none' : 'block',
    'background-color': config.alerts[state.alert].color,

    close: () => ({
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
  }

  return [config, layout];
}