export default function(element, config, globals) {
    return [config, {
        ...Object.entries(config.alerts).reduce((result, item) => {
            result[`modifier(${item[0]})`] = { 
                'background-color': item[1].color
            }
    
            return result;
        }, {}),

        'display': () => element.is('hidden') ? 'none' : 'block',
        'position': 'relative',

        icon: icon => ({
            'margin-right': '0.5em',
            'line-height': 1.25,

            'float': () => {
                if (element.is('box') && !icon.is('right')) {
                    return 'left';
                }
                if (icon.is('right')) {
                    return 'right'
                }
            },

            'modifier(right)': {
                'margin-right': 0,
                'margin-left': '0.5em'
            },

            'modifier(close)': {
                'cursor': 'pointer'
            }
        })
    }]
}