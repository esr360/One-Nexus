export default ({ state, config, utils, theme }) => [config, {
  ...(config.object && utils.object(state, config.gutter)),

  'is-reset': {
    'padding-left': 0,
    'list-style': 'none'
  },

  'is-clear': {
    'padding-left': '1em'
  },

  'is-arrow': {
    'padding-left': 0,
    'list-style': 'none',
  },

  item: ({ state: { isFirstChild, isLastChild } }) => ({
    ...(state.inline && {
      'display': 'inline-block',
      'padding-left': 0,
      'margin-left': isFirstChild ? 0 : config.inlineSpacing
    }),
  
    ...(state.divider && !isLastChild && {
      'margin-bottom': '1em',
      'padding-bottom': '1em',
      'border-bottom': `1px dotted ${theme.colors.opaque['dark-2']}`
    }),

    ...(state.arrow && {
      'margin-bottom': 0,
      'line-height': 1.7
    }),

    icon: {
      'display': 'inline-block',
      'margin-right': '0.5em'
    }
  })
}];