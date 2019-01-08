export default (element, config, globals) => {
    const layout = {
        'position': 'fixed',
        'height': '100%',
        'width': '100%',
        'top': 0,
        'left': 0,
        'transform': 'scale(1)',

        holder: hodler => ({
            ...globals.center()
        }),

        spinner: spinner => ({
            'margin': 'auto'
        }),

        close: close => ({
            ...globals.center('horizontal'),

            'position': 'absolute',
            'text-align': 'center'
        }),

        'modifier(hidden)': {
            'transform': 'scale(0)'
        }
    }

    return [config, layout];
};