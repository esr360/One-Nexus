export default ({ theme, state, context, config, utils }) => [config, {
  ...(config.object && utils.object(state, config.gutter)),
}, state];