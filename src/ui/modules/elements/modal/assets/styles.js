export default ({ state, config, theme, utils }) => [config, {
  top: config['top-position'],
  left: '50%',
  position: 'fixed',
  maxWidth: '90%',
  maxHeight: '90%',
  overflow: 'auto',
  visibility: 'hidden',
  opacity: 0,
  transform: 'translateX(-50%) translateY(-50%)',

  'is-visible': {
    visibility: 'visible',
    opacity: 1
  },

  'is-animate-top': {
    top: `calc(${config['top-position']} * 0.9)`,

    'is-visible': {
      top: config['top-position']
    }
  },

  'is-animate-bottom': {
    top: `calc(${config['top-position']} * 1.1)`,

    'is-visible': {
      top: config['top-position']
    }
  },

  'is-animate-left': {
    transform: 'translateX(-45%) translateY(-50%)',

    'is-visible': {
      transform: 'translateX(-50%) translateY(-50%)'
    }
  },

  'is-animate-right': {
    transform: 'translateX(-55%) translateY(-50%)',

    'is-visible': {
      transform: 'translateX(-50%) translateY(-50%)'
    }
  },
  
  'is-animate-zoom': {
    transform: 'scale(0.5) translateY(-75%)',

    'is-visible': {
      transform: 'transform: scale(1) translateY(-50%)'
    }
  },

  close: () => ({
    cursor: 'pointer',

    'is-icon': {
      position: 'absolute'
    }
  }),

  // overlay: [config.overlay.element(), config.overlay],
}, state];