export default ({ config, theme, utils }) => [config, {
  fragment: ({ state }) => ({
    display: state.hidden ? 'none' : 'block',
  }),

  errorSignal: ({ context: { group } }) => ({
    ...(group.valid && {
      'color': config.validColor,
      'border-color': 'currentColor'
    }),

    ...(group.invalid && {
      'color': config.invalidColor,
      'border-color': 'currentColor'
    })
  }),

  group: ({ state }) => ({
    ...utils.object(state, config.gutter),
  }),

  wrapper: () => ({
    'display': 'flex',
    'align-items': 'center'
  }),

  ...Object.fromEntries(['checkbox', 'radio'].map(key => [key, {
    'height': '1em', 
    'margin-right': '1em' 
  }])),

  fieldset: ({ state, config }) => ({
    ...(utils.object(state, config.gutter)),

    'margin-left': 0,
    'margin-right': 0,
    'padding': 0,
    'border': 'none'
  }),

  field: () => ({
    'position': 'relative',
    'display': 'inline-block',
    'width': '100%'
  }),

  icon: () => ({
    'position': 'absolute',
    'top': '50%',
    'transform': 'translateY(-50%)',
    'left': '0.75em',
    'color': config.input.color,
    'transition': theme.tokens.transition,
  }),

  legend: () => ({
    'font-weight': 'bold'
  }),

  input: ({ context: { group } }) => ({
    'display': 'block',
    'width': '100%',
    'outline': 'inherit',

    ':focus': {
      'outline': 0
    },
    
    ...(group.hasIcon && {
      'padding-left': '2em'
    })
  }),

  select: () => ({
    'width': '100%',
    'outline': 0
  }),

  button: () => ({
    // 'background-color': 'red',
    // 'font-style': 'italic'
  })
}];