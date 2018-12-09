export default (element, config, globals) => {
    const layout = {
        'display': 'inline',

        container: container => ({
            'position': 'relative',
            'display': 'table-header-group',

            ':hover': {
                wrapper: {
                    'visibility': 'visible',
                    'opacity': 1
                }
            }
        }),

        wrapper: wrapper => ({
            'text-align': 'center',
            'visibility': 'hidden',
            'opacity': 0
        }),

        content: content => ({
            ...globals.center('vertical'),

            'display': 'inline-block',
            'transform': 'translateX(-50%) translateY(-100%)'
        }),
    }

    return [config, layout];
};