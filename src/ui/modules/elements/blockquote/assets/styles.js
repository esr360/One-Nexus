export default ({ state, config, utils }) => [config, {
  ...(config.object && utils.object(state, config.gutter)),

  'position': 'relative',
  'margin-left': 0,
  'margin-right': 0
}];