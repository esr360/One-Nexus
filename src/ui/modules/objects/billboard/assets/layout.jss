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

        ...((element.hasModifier('overlay') || config.overlay.enabled) && {
        }),

        wrapper: () => ({
            ...globals.center(),

            'color': config.color
        })
    }

    return [config, layout];
};