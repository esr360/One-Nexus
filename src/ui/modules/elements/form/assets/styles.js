export default ({ config, theme, utils }) => [config, {
  fragment: ({ state }) => ({
    display: state.hidden ? 'none' : 'block',
  }),

  errorSignal: () => ({
    'group-is-valid': {
      'color': config['valid-color'],
      'border-color': 'currentColor'
    },

    'group-is-invalid': {
      'color': config['invalid-color'],
      'border-color': 'currentColor'
    }
  }),

  group: ({ state }) => ({
    ...utils.object(state, config.gutter),
  }),

  ...Object.fromEntries(['checkbox', 'radio'].map(key => [key, { 
    'height': '1em', 
    'margin-right': '1em' 
  }])),

  fieldset: () => ({
    'padding': '0',
    'border': 'none'
  }),

  field: () => ({
    'position': 'relative',
    'display': 'inline-block',
    'width': '100%',
  }),

  icon: () => ({
    'position': 'absolute',
    'top': '50%',
    'transform': 'translateY(-50%)',
    'left': '0.75em',
    'color': config.input.color,
    'transition': theme.tokens.transition,
  }),

  label: () => ({}),

  input: () => ({
    'display': 'block',
    'width': '100%',
    'outline': 'inherit',

    ':focus': {
      'outline': 0
    }
  }),

  select: () => ({
    'width': '100%',
    'outline': 0
  }),

  button: () => ({
    'background-color': 'red',
    'font-style': 'italic'
  })
}];