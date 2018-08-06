export default function layout(element, config, globals) {
    return {
        'display': 'inline-block',
        'border-color': 'transparent',
        'text-decoration': 'none',
        'vertical-align': 'middle',
        'cursor': 'pointer',

        'font-size': globals.fontSizes(element, config.sizes)
    }
}