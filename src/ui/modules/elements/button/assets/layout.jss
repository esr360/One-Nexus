export default function layout(element, config, globals) {
    return {
        'display': 'inline-block',
        'border-color': 'transparent',
        'text-decoration': 'none',
        'vertical-align': 'middle',
        'cursor': 'pointer',
        'font-size': globals.fontSize(element, config.sizes, globals),

        ...Object.entries(config.colors).reduce((result, color) => {
            return element.modifier(color[0]) ? {
                'background-color': color[1],
                ':hover': {
                    'background-color': 'black'
                }
            } : result;
        }, {})
    }
}