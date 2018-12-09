export default (element, config, globals) => {
    const layout = {
        'display': 'inline',

        container: container => ({
            'position': 'relative',
            'display': 'table-header-group',
        }),

        wrapper: wrapper => ({
            'text-align': 'center'
        }),

        content: content => ({
            ...globals.center('vertical'),

            'display': 'inline-block',
            'transform': 'translateX(-50%) translateY(-100%)'
        }),
    }

    return [config, layout];
};