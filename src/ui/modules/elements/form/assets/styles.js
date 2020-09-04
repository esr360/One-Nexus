export default ({ config, theme, utils }) => [config, {
  // group: group => ({
  //   'position': 'relative',

  //   'modifier(compound)': {
  //     'margin-bottom': `calc(${theme.tokens.margin} / 4)`
  //   },

  //   'modifier(has-icon)': {
  //     ...['input', 'select'].reduce((result, item) => {
  //       result[item] = {
  //         'padding-left': '2em'
  //       };

  //       return result;
  //     }, {})
  //   },

  //   'modifier(validate)': {
  //     'modifier(isValid)': {
  //       ...['label', 'field', 'icon', 'input', 'select'].reduce((result, item) => {
  //         result[item] = {
  //           'color': config['valid-color'],
  //           'border-color': 'currentColor'
  //         };

  //         return result;
  //       }, {})
  //     },

  //     'modifier(isInvalid)': {
  //       ...['label', 'field', 'icon', 'input', 'select'].reduce((result, item) => {
  //         result[item] = {
  //           'color': config['invalid-color'],
  //           'border-color': 'currentColor'
  //         };

  //         return result;
  //       }, {}),
  //     }
  //   },

  //   'modifier(isSelect)': {
  //     'position': 'relative'
  //   }
  // }),

  group: ({ state }) => ({
    ...utils.object(state, config.gutter),

    display: state.hidden ? 'none' : 'block'
  }),

  ...['checkbox', 'radio'].reduce(($, component) => ($[component] = {
    'height': '1em',
    'margin-right': '1em'
  }, $), {}),

  fieldset: ({ state }) => ({
    display: state.hidden ? 'none' : 'block',
    'padding': '0',
    'border': 'none'
  }),

  after: ({ state }) => ({
    display: state.hidden ? 'none' : 'block',
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
    'appearance': 'none', // @TODO this doesn't seem to work

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
  })
}];