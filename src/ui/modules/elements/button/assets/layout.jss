export default function layout(element, globals) {
    return {
        'display': 'inline-block',
        'border-color': 'transparent',
        'text-decoration': 'none',
        'vertical-align': 'middle',
        'cursor': 'pointer',

        ...globals.fontSizes
    }
}