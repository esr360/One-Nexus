export default (element, config, globals) => {
    const layout = {
        'visibility': 'hidden',
        'position': 'fixed',
        'top': 0,
        'right': 0,
        'bottom': 0,
        'left': 0,
        'transform': 'translateZ(0)',
        'opacity': 0,
        'cursor': 'pointer',

        'modifier(visible)': {
            'visibility': 'visible',
            'opacity': 1
        },

        'modifier(light)': {
            'background': config['light-background']
        }
    }

    return [config, layout];
};