export default ({ state, config, utils }) => [config, {
  ...(config.object && utils.object(state, config.gutter)),

  panel: ({ state }) => ({
    'display': 'block',

    ...utils.verticalRhythm(state, 'bottom')
  }),

  title: ({ context }) => ({
    'display': 'block',
    'margin': 0,
    'backface-visibility': 'hidden',
    'font-weight': 'normal',
    'line-height': 1,
    'cursor': 'pointer',
    'border-bottom': context.panel.isLastChild ? config.title.border : 0
  }),

  toggle: ({ context }) => ({
    'float': 'right',
    'line-height': 0.75,
    'transform': context.panel.active ? 'rotate(90deg) translateZ(0)' : 'none'
  }),

  content: ({ context }) => ({
    'display': context.panel.active ? 'block' : 'none',
    'margin': 0,
    'margin-top': '-1px',
    'border-bottom': context.panel.isLastChild ? config.content.border : 0
  })
}, state];