import Color from 'color';

export default (theme) => ({
  lightThreshold: 0.55,
  fluidScaling: true,
  sizes: theme.typography.sizes,
  colorInverse: theme.colors.opaque['dark-4'],

  colors: {
    ...theme.colors.brand,
    ...theme.colors.alert,
    ...theme.colors.greyscale,
    ...theme.colors.social
  },

  'color': theme.colors.greyscale.white,
  'background': theme.colors.brand['brand-1'],
  'transition': theme.tokens.transition,
  'padding': '0.65em 1em',
  'line-height': '1',
  'font-weight': 'normal',
  'border-width': '1px',
  'border-style': 'solid',

  hover: {
    'background': prev => Color(prev).desaturate(0.1).lighten(0.2)
  },

  active: {
    'background': theme.colors.brand['brand-1'],
    'color': theme.colors.greyscale.white
  },

  'is-disabled': {
    'opacity': 0.6
  },

  'is-round': {
    'border-radius': '1.2em'
  },

  'in-group': {
    'margin-left': '0.5em'
  },

  group: {
    object: true,
    gutter: theme.tokens.margin,
    stack: theme.grid.breakpoints['break-2']
  }
});