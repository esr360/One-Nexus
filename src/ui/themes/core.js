export default {
  colors: {
    brand: {
      'brand-1': '#2E3882',
      'brand-2': '#06d2ff',
      'brand-3': '#04CEC0'
    },
    alert:{
      'error': '#D9434E',
      'help': '#F5BA42',
      'info': '#4B8CDC',
      'success': '#3BB85D'
    },
    greyscale: {
      'white': '#ffffff',
      'grey-1': '#f8f8f8',
      'grey-2': '#dee0e2',
      'grey-3': '#bfc1c3',
      'grey-4': '#6f777b',
      'grey-5': '#232627',
      'grey-6': '#161819',
      'black': '#000000'
    },
    opaque: {
      'dark-1': 'rgba(0,0,0, 0.1)',
      'dark-2': 'rgba(0,0,0, 0.2)',
      'dark-4': 'rgba(0,0,0, 0.4)',
      'dark-8': 'rgba(0,0,0, 0.8)',
      'light-8': 'rgba(255,255,255, 0.8)'
    },
    validation:{
      'valid': '#00B16A',
      'invalid': '#D91E18'
    },
    social:{
      'facebook': '#507CBD',
      'twitter': '#63CEF2',
      'linkedin': '#117BB8',
      'github': '#1C1C1C',
      'skype': '#63CEF2',
      'pinterest': '#C92228',
      'instagram': '#5280A5',
      'youtube': '#CB312E',
      'dribbble': '#EB4C89',
      'reddit': '#0D7CCD',
      'email': '#6cb42c'
    },
    gradients: {
      brand: {
        'direction': '135deg',
        'color-stops': [
          'brand-1 0%', 
          'brand-2 20%', 
          'brand-3 100%'
        ]
      }
    }
  },
  typography: {
    'name': 'typography',
    'import-fonts': true,
    'google-fonts': [
      {
        'name': 'Raleway',
        'styles': [ 100, 300, 700, 900 ]
      },
      {
        'name': 'Lato',
        'styles': [ 300, 700 ]
      }
    ],
    'typefaces': {
      'primary': 'Raleway, Helvetica, Arial, sans-serif',
      'secondary': 'Lato, Helvetica, Arial, sans-serif'
    },
    'colors': {
      'base': ({ colors }) => colors.greyscale['grey-4'],
      'heading': ({ colors }) => colors.greyscale['grey-5'],
      'heavy': ({ colors }) => colors.greyscale['grey-5'],
      'link': ({ colors }) => colors.brand['brand-1'],
      'link-hover': ({ colors }) => colors.brand['brand-1']
    },
    'sizes': {
      'size-1': '0.67em',
      'size-2': '0.83em',
      'size-3': '1em',
      'size-4': '1.17em',
      'size-5': '1.3em',
      'size-6': '1.5em',
      'size-7': '2em',
      'size-8': '2.4em',
      'size-9': '3em',
      'size-10': '3.4em'
    }
  },
  grid: {
    'columns': 12,
    'gutter': '3%',
    'default-stack': ({ grid }) => grid.breakpoints['break-3'],
    'breakpoints': {
      'break-0': '0px',
      'break-1': '460px',
      'break-2': '720px',
      'break-3': '940px',
      'break-4': '1200px',
      'break-5': '1400px',
      'break-6': '1800px'
    }
  },
  tokens: {
    'background': ({ colors }) => colors.greyscale['grey-1'],
    'font-family': ({ typography }) => typography.typefaces['primary'],
    'font-size': ({ typography }) => typography.sizes['size-3'],
    'text-color': theme => theme.typography.colors['base'](theme),
    'selection-background': ({ colors }) => colors.brand['brand-1'],
    'selection-color': ({ colors }) => colors.greyscale['white'],
    'margin': '2rem',
    'line-height': '1.4',
    'radius': '0.4em',
    'transition': '0.4s'
  }
}