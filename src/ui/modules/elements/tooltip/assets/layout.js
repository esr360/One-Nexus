export default (element, config, globals) => {
    const layout = {
        'display': 'inline-block',

        container: container => ({
            'display': 'inline-block',
            'position': 'relative'
        }),

        wrapper: wrapper => ({
            'position': 'absolute',
            'visibility': 'hidden',
            'opacity': 0
        }),

        content: content => ({
            'max-width': config.content['max-width'],
            'position': 'relative',
            'display': 'block'
        }),

        arrow: arrow => ({
            'height': 0,
            'width': 0,
            'border': '6px solid transparent',
            'position': 'absolute',

            // 'margin': '',
            // 'left': 0,
            // 'right': 0,
            // 'top': 0,
            // 'border-top-color': '',
            // 'border-bottom-color': '',
            // 'border-left-color': '',
            // 'border-right-color': '',
            // 'transform': '',

            ...(element.hasModifier('top') && {
                'margin': 'auto',
                'left': 0,
                'right': 0,
                'bottom': '-12px',
                'border-top-color': config.content.background,
            }),

            ...(element.hasModifier('bottom') && {
                'margin': 'auto',
                'left': 0,
                'right': 0,
                'top': '-12px',
                'border-bottom-color': config.content.background,
            }),

            ...(element.hasModifier('left') && {
                'top': '50%',
                'transform': 'translateY(-50%)',
                'border-left-color': config.content.background,
                'right': '-12px'
            }),

            ...(element.hasModifier('right') && {
                'top': '50%',
                'transform': 'translateY(-50%)',
                'border-right-color': config.content.background,
                'left': '-12px',
            })
        })
    }

    return [config, layout];
};