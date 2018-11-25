export default (element, config, globals) => {
    const layout = {
        item: () => ({
            'subComponent(icon)': {
                'display': 'inline-block',
                'margin-right': '0.5em'
            }
        }),

        'modifier(reset)': {
            'padding-left': 0,
            'list-style': 'none'
        },

        'modifier(clear)': {
            'padding-left': '1em'
        },

        'modifier(inline)': {
            item: item => ({
                'display': 'inline-block',
                'padding-left': 0,
                'margin-left': item.isFirstChild ? 0 : config['inline-spacing']
            })
        },

        'modifier(divider)': {
            item: item => {
                if (!item.isLastChild) {
                    return {
                        'margin-bottom': '1em',
                        'padding-bottom': '1em',
                        'border-bottom': `1px dotted ${globals.colors.opaque['dark-2']}`
                    }
                }
            }
        },

        'modifier(arrow)': () => ({
            ...layout['modifier(reset)'],

            item: () => ({
                'margin-bottom': 0,
                'line-height': 1.7
            }),

            'modifier(highlight)': {
                'color': config['arrow-color']
            }
        }),

        'modifier(group)': {
            item: item => ({
                'margin-top': item.isFirstChild ? 0 : '1em'
            })
        }
    }

    return [config, layout];
};