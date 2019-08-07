export default ({ state, config, theme }) => {
  const layout = {
    ...(config.object && theme.object(state)),

    'position': 'relative',
    'margin-left': 'auto',
    'margin-right': 'auto'
  }

  return [config, layout];
}