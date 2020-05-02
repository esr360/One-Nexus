import deepextend from 'deep-extend';
import core from './core';

export default deepextend(core, {
  'colors': {
    'brand': {
      'brand-4': '#556be8'
    }
  },
  'modules': {
    'Accordion': {
      'title': {
        'panel-is-active': {
          'background': (theme) => theme.colors.brand['brand-1']
        }
      }
    },
    'Alert': {
      alerts: {
        carrot: {
          color: ({ colors }) => colors.brand['brand-6'],
          icon: 'check'
        }
      }
    },
    'Modal': {
    },
    'Button': {
      'border-palettes': ['brand', 'alert']
    },
    'header': {
      'background': 'gradient(brand)'
    },
    'Billboard': {
      'fullscreen': {
        'enabled': false
      },
      'overlay': {
        'enabled': true
      }
    },
    'Tables': {
      'background': 'white',
      'padding': '0.5em 1em',
      'border': '1px solid rgba(0,0,0,0.1)',
      '-small': {
        'max-width': '450px'
      }
    }
  }
});