export default (theme) => ({
  // name: 'Alert',
  object: true,
  gutter: theme.tokens.margin,
  default: 'info',
  icon: true,

  'color': theme.colors.greyscale.white,
  'padding': '0.85em',

  'alerts': {
    'error': {
      'color': theme.colors.alert.error,
      'icon': 'times'
    },
    'success': {
      'color': theme.colors.alert.success,
      'icon': 'check'
    },
    'info': {
      'color': theme.colors.alert.info,
      'icon': 'info-circle'
    },
    'help': {
      'color': theme.colors.alert.help,
      'icon': 'question-circle'
    }
  },

  icon: {
    'default-enable': true
  },

  content: {
    'margin-top': `calc(${theme.tokens.margin}/2)`,
    'padding-top': `calc(${theme.tokens.margin}/2)`,
    'border-top': `1px solid ${theme.colors.opaque['dark-1']}`
  },

  'is-box': {
    'padding': '1.5em'
  }
});