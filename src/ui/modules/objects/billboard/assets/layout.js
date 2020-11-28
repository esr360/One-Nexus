export default (element, config, globals) => {
    const layout = {
        'position': 'relative',
        'overflow': 'hidden',
        'background-size': 'cover',

        ...((element.hasModifier('fullscreen') || config.fullscreen.enabled) && {
            'height': '100%',
            'height': '100vh',
            'min-height': config.fullscreen['min-height']
        }),

        overlay: () => ({
            'position': 'absolute',
            'top': 0,
            'height': '100%',
            'width': '100%'
        }),

        wrapper: wrapper => ({
            ...globals.center(),

            'color': config.color,

            link: [wrapper.querySelectorAll('a'), {
                color: 'red'
            }]
        })
    }

    return [config, layout];
};