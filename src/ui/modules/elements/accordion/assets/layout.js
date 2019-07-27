export default ({ state, config, theme }) => {
  const layout = {
    panel: ({ state }) => ({
      'display': 'block',

      ...theme.verticalRhythm(state, 'bottom')
    }),

    title: ({ context }) => {
      return {
        'display': 'block',
        'margin': 0,
        'backface-visibility': 'hidden',
        'font-weight': 'normal',
        'line-height': 1,
        'cursor': 'pointer',
        'border-bottom': !context.panel.isLastChild ? 0 : false
      }
    },

    toggle: ({ context }) => {
      return {
        'float': 'right',
        'line-height': 0.75,
        'transform': context.panel.active ? 'rotate(90deg) translateZ(0)' : 'none'
      }
    },

    content: ({ context }) => {
      return {
        'display': context.panel.active ? 'block' : 'none',
        'margin': 0,
        'margin-top': '-1px',
        'border-bottom': !context.panel.isLastChild ? 0 : false
      }
    }
  }

  return [config, layout];
}