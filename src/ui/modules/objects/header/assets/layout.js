export default (element, config, globals) => {
    const layout = {
        // 'overflow': 'hidden',

        ...((element.hasModifier('bar') || config.bar) && {
            ...['logo', 'navigation'].reduce((result, item) => {
                result[item] = {
                    'display': 'table-cell',
                    'vertical-align': 'middle'
                };
    
                return result;
            }, {}),
        }),

        ...((element.hasModifier('absolute') || config.absolute.enabled) && {
            ...config.absolute,

            'position': 'absolute',
            'width': '100%'
        }),

        ...((element.hasModifier('dark') || config.dark.enabled) && {
            ...config.dark
        }),

        ...((element.hasModifier('fixed') || config.fixed) && {
            'position': 'fixed',
            'z-index': 12,
            'top': 0,
            'width': '100%',
            'margin-top': 0
        }),

        ...((element.hasModifier('sticky') || config.sticky.enabled) && {
            ...config.sticky,

            'modifier(fixed)': {
                logo: [sQuery('logo').DOMNode, {
                    image: {
                        'height': config.sticky['logo-height']
                    }
                }]
            },

            logo: [sQuery('logo').DOMNode, {
                image: {
                    'transition': `height ${globals.core.transition}`
                }
            }]
        }),

        wrapper: wrapper => ({
            'display': (element.hasModifier('bar') || config.bar) && 'table',
            'transition': `height ${globals.core.transition}`
        })
    }

    return [config, layout];
};