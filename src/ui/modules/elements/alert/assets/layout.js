export default function(element, config, globals) {
    return [config, {
        ...Object.entries(config.alerts).reduce((result, item) => {
            result[`modifier(${item[0]})`] = { 
                'background-color': item[1].color
            }
    
            return result;
        }, {}),

        'display': element.modifier('hidden') ? 'none' : 'block',
        'position': 'relative',

        icon: icon => ({
            'margin-right': '0.5em',
            'line-height': 1.25,

            'float': () => {
                if (element.modifier('box') && !icon.modifier('right')) {
                    return 'left';
                }
                if (icon.modifier('right')) {
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