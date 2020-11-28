export default ({ state, config, utils }) => [config, {
  ...(config.object && utils.object(state, config.gutter)),

  'position': 'relative',
  'padding': 0,
  'margin-left': 0,
  'margin-right': 0
}];