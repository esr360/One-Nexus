import Color from 'color';

export default (theme) => ({
  name: 'Button',
  lightThreshold: 0.55,
  fluidScaling: true,
  sizes: theme.typography.sizes,
  colorInverse: theme.colors.opaque['dark-4'],
  roundRadius: '1.2em',

  colors: {
    ...theme.colors.brand,
    ...theme.colors.testGrey,
    ...theme.colors.alert,
    // ...theme.colors.greyscale,
    ...theme.colors.social
  },

  'color': theme.colors.greyscale.white,
  'background-color': theme.colors.brand['brand-1'],
  'transition': theme.tokens.transition,
  'padding': '0.65em 1em',
  'line-height': '1',
  'font-weight': 'normal',
  'border-width': '1px',
  'border-style': 'solid',

  'hovered': {
    'background-color': (prev) => {
      const lightness = Color(prev).lightness();
      const luminosity = Color(prev).luminosity();
      const contrast = Color(prev).contrast(Color(prev).lighten(0.25));

      console.log(Math.round(lightness), luminosity, Number(contrast.toPrecision(2)));

      return Color(prev).lightness(lightness + 10).hex();
    }
  },

  active: {
    'background': theme.colors.brand['brand-1'],
    'color': theme.colors.greyscale.white
  },

  'is-disabled': {
    'opacity': 0.6
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

// 100 => 95
// 95  => 90
// 90  => 85
// 85  => 90
// 80  => 85
// 70  => 80
// 60  => 70
// 55  => 65
// 50  => 60
// 40  => 55
// 30  => 45
// 20  => 40
// 10  => 35
// 0   => 30