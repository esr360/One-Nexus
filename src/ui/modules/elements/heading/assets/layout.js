export default (element, config, globals) => {
    return [config, {
        'line-height': 1,
        'font-size': globals.fontSize(element, config.sizes, globals),

        // Modifiers
        //*********************************************************

        'modifier(heavy)': {
            'font-weight': 'bolder',
            'font-weight': '900'
        },

        'modifier(light)': {
            'font-weight': 'lighter',
            'font-weight': '100'
        },

        'modifier(uppercase)': {
            'text-transform': 'uppercase'
        },

        'modifier(flush)': {
            'margin-top': '0 !important',
            'margin-bottom': '0 !important',
        },

        // Components
        //*********************************************************

        group: group => {
            return {
                ...globals.object(group, config.group.gutter),

                'position': 'relative',
                'font-size': '1rem',

                heading: [element, {
                    ...globals.object(element, config.group.heading.gutter),

                    'line-height': config.group.heading['lineHeight']
                }]
            }
        }
    }]
};