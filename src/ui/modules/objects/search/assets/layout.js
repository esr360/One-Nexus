export default (element, config, globals) => {
    const layout = {
        'position': 'fixed',
        'z-index': 16,
        'top': 0,
        'width': '100%',
        'transform': 'translateY(-100%)',
        'text-align': 'center',

        'modifier(visible)': {
            'transform': 'translateY(0)'
        },

        wrapper: wrapper => ({
            'display': 'flex',
            'height': '100%'
        }),

        input: input => ({
            'width': '100%',
            'height': '100%',
            'padding': 0,
            'border': 'none',
            'outline': 0
        }),

        actions: actions => ({
            'display': 'flex',
            'align-items': 'center'
        })
    }

    return [config, layout];
};