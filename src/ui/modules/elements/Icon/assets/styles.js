export default ({ state, config, theme, utils }) => [config, {
  'font-size': utils.fontSize(state, config, theme),

  group: ({ state, config: { gutter, object } }) => ({
    ...(object && utils.object(state, gutter)),

    [config.name]: ({ state: { isFirstChild } }) => ({
      'margin-left': isFirstChild ? 0 : null
    })
  })
}];