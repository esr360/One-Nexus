export default ({ state, config, utils }) => [config, {
  'top': config['top-position'],
  'position': 'fixed',
  'max-width': '90%',
  'max-height': '90%',
  'overflow': 'auto',
  'visibility': 'hidden',
  'opacity': 0,

  'is-visible': {
    'visibility': 'visible',
    'opacity': 1
  },

  close: () => ({
    cursor: 'pointer',

    'is-icon': {
      position: 'absolute'
    }
  }),

  // 'modifier(animate)': {
  //   'transition': globals.core.transition,

  //   'modifier(top)': {
  //     'top': `calc(${config['top-position']} * 0.9)`,

  //     'modifier(visible)': {
  //       'list-style-type': 'disc',
  //       'color': 'red',
  //       'top': config['top-position']
  //     }
  //   },

  //   'modifier(bottom)': {
  //     'top': `calc(${config['top-position']} * 1.1)`,

  //     'modifier(visible)': {
  //       'top': config['top-position']
  //     }
  //   },

  //   'modifier(left)': {
  //     'transform': 'translateX(-15%) translateY(-50%)',

  //     'modifier(visible)': {
  //       'transform': 'translateX(0) translateY(-50%)'
  //     }
  //   },

  //   'modifier(right)': {
  //     'transform': 'translateX(15%) translateY(-50%)',

  //     'modifier(visible)': {
  //       'transform': 'translateX(0) translateY(-50%)'
  //     }
  //   },

  //   'modifier(zoom)': {
  //     'transform': 'scale(0.5) translateY(-75%)',

  //     'modifier(visible)': {
  //       'transform': 'transform: scale(1) translateY(-50%)'
  //     }
  //   }
  // },

  // close: () => ({
  //   'cusor': 'pointer',

  //   'modifier(icon)': {
  //     'position': 'absolute'
  //   }
  // }),

  // overlay: [config.overlay.element(), config.overlay],
}];