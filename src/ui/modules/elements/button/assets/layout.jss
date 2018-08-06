export default function layout(element, config, globals) {
    return {
        'display': 'inline-block',
        'border-color': 'transparent',
        'text-decoration': 'none',
        'vertical-align': 'middle',
        'cursor': 'pointer',
        'font-size': globals.fontSize(element, config.sizes, globals),
        'background-color': () => {
            for (let [key, value] of Object.entries(config.colors)) {
                console.log(key, element, element.modifier(key));
                if (element.modifier(key)) return value;
            }
        }
    }
}