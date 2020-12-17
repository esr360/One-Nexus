export default ({ theme, state, config, utils }) => [config, {
  'font-size': utils.fontSize(state, config, theme),
  'line-height': 1,

  'is-heavy': {
    'font-weight': 'bolder',
    'font-weight': '900'
  },

  'is-light': {
    'font-weight': 'lighter',
    'font-weight': '100'
  },

  'is-uppercase': {
    'text-transform': 'uppercase'
  },

  'is-flush': {
    'margin-top': 0,
    'margin-bottom': 0,
  },

  group: ({ state, config: { gutter, object } }) => ({
    ...(object && utils.object(state, gutter)),

    'position': 'relative',
    'font-size': '1rem',

    [config.name]: ({ config, state }) => ({
      ...utils.object(state, config['in-group'].gutter),
    })
  })
}];