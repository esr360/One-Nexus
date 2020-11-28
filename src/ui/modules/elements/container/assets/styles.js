export default ({ state, config, utils }) => [config, {
  ...(config.object && utils.object(state, config.gutter)),

  'position': 'relative',
  'margin-left': 'auto',
  'margin-right': 'auto'
}];