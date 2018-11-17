export default function layout(element, config, globals) {
    return [config, {
        'position': 'relative',
        'width': config['base-width'],
        'max-width': config['max-width'],
        'margin': '0 auto',

        'modifier(large)': {
            'max-width': config['large-width']
        },

        'modifier(section)': {
            'padding-top': '4em',
            'padding-bottom': '4em'
        }
    }]
}