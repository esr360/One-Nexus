export default ({ state, config, utils }) => [config, {
  ...(config.object && utils.object(state, config.gutter)),

  panel: ({ state }) => ({
    'display': 'block',

    ...utils.verticalRhythm(state, 'bottom')
  }),

  title: ({ context:  { panel } }) => ({
      'display': 'block',
      'margin': 0,
      'backface-visibility': 'hidden',
      'font-weight': 'normal',
      'line-height': 1,
      'cursor': 'pointer',
      'border-bottom': panel.isLastChild ? `1px solid ${config.title['border-color']}` : 'none'
  }),

  toggle: ({ context: { panel } }) => ({
    'float': 'right',
    'line-height': 0.75,
    'transform': panel.active ? 'rotate(90deg) translateZ(0)' : 'none'
  }),

  content: ({ context: { panel } }) => ({
    'display': panel.active ? 'block' : 'none',
    'margin': 0,
    'margin-top': '-1px',
    'border-bottom': panel.isLastChild ? `1px solid ${config.title['border-color']}` : 'none'
  })
}, state];