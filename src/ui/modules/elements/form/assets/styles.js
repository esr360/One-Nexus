export default ({ config, theme, utils }) => [config, {
  // group: group => ({
  //   'modifier(has-icon)': {
  //     ...['input', 'select'].reduce((result, item) => {
  //       result[item] = {
  //         'padding-left': '2em'
  //       };

  //       return result;
  //     }, {})
  //   },

  //   'modifier(isSelect)': {
  //     'position': 'relative'
  //   }
  // }),

  after: ({ state }) => ({
    display: state.hidden ? 'none' : 'block',
  }),

  fragment: ({ state }) => ({
    display: state.hidden ? 'none' : 'block',
  }),

  group: ({ state }) => ({
    ...utils.object(state, config.gutter),

    display: state.hidden ? 'none' : 'block'
  }),

  // ...['checkbox', 'radio'].reduce(($, component) => ($[component] = {
  //   'height': '1em',
  //   'margin-right': '1em'
  // }, $), {}),

  ...Object.fromEntries(['checkbox', 'radio'].map(key => [key, { 
    'height': '1em', 
    'margin-right': '1em' 
  }])),

  fieldset: ({ state }) => ({
    display: state.hidden ? 'none' : 'block',
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

    'group-is-valid': {
      'color': config['valid-color']
    },

    'group-is-invalid': {
      'color': config['invalid-color']
    }
  }),

  label: () => ({
    'group-is-valid': {
      'color': config['valid-color']
    },

    'group-is-invalid': {
      'color': config['invalid-color']
    }
  }),

  input: () => ({
    'display': 'block',
    'width': '100%',
    'outline': 'inherit',

    ':focus': {
      'outline': 0
    },

    'group-is-valid': {
      'color': config['valid-color'],
      'border-color': 'currentColor'
    },

    'group-is-invalid': {
      'color': config['invalid-color'],
      'border-color': 'currentColor'
    }
  }),

  select: () => ({
    'width': '100%',
    'outline': 0,

    'group-is-valid': {
      'color': config['valid-color'],
      'border-color': 'currentColor'
    },

    'group-is-invalid': {
      'color': config['invalid-color'],
      'border-color': 'currentColor'
    }
  }),
  
  error: () => ({
    'color': config['invalid-color'],
  }),

  button: () => ({
    'background-color': 'red',
    'font-style': 'italic'
  })
}];