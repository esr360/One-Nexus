import Color from 'color';

export default ({ theme, state, config, utils }) => {
  const brand = Module.modifiers(state).find($ => config.colors[$]);
  const brandColor = config.colors[brand];
  const { lightThreshold, colorInverse } = config;

  const styles = {
    'display': 'inline-block',
    'border-color': 'transparent',
    'text-decoration': 'none',
    'vertical-align': 'middle',
    'cursor': 'pointer',
    'font-size': utils.fontSize(state, config, theme),

    ...(brand && { [`is-${brand}`]: {
      'background-color': brandColor,
      'border-color': 'transparent',
      'color': (prev) => Color(brandColor).luminosity() > lightThreshold ? colorInverse : prev,
  
      'hovered': {
        'background-color': config.hovered['background-color']?.(brandColor)
      },
  
      'is-border': {
        'background-color': 'transparent',
        'color': brandColor,
        'border-color': brandColor,
  
        'hovered': {
          'background-color': brandColor,
          'color': config.color
        }
      }
    }}),

    'is-block': {
      'width': '100%',
      'text-align': 'center'
    },

    'is-round': {
      'border-radius': config.roundRadius
    },

    'is-disabled': {
      'transition-delay': '999s',
      'cursor': 'not-allowed'
    },

    'is-icon': {
      'text-align': 'center'
    },

    icon: () => ({
      'height': '1em',
      'width': '1em'
    }),

    group: ({ state, config: { gutter, object, stack } }) => ({
      ...(object && utils.object(state, gutter)),

      'is-pills': {
        'display': 'flex'
      },

      [config.name]: ({ config: { roundRadius }, state: { isFirstChild, isLastChild } }) => ({
        'margin-left': isFirstChild ? 0 : null,

        ...(state.pills && {
          'flex-basis': '100%',
          'margin-left': 0
        }),
  
        ...(state.pills && state.round && {
          'border-top-left-radius': isFirstChild && roundRadius,
          'border-bottom-left-radius': isFirstChild && roundRadius,
          'border-top-right-radius': isLastChild && roundRadius,
          'border-bottom-right-radius': isLastChild && roundRadius,
        }),
  
        ...(state.stack && {
          ...(utils.minWidth(stack) && {
            'display': 'block',
            'width': '100%',
            'margin-top': '1em',
            'margin-right': 0,
            'margin-left': 0,
            'text-align': 'center'
          })
        })
      }),
    })
  }

  return [config, styles];
}