export default (element, config, globals) => {
    const layout = {
        nav: nav => ({
            'display': 'table',
            'position': 'relative',
            'z-index': 2,
            'margin-bottom': 0,

            'modifier(round)': {
                'subComponent(item)': item => ({
                    'border-top-left-radius': item.isFirstChild && config.nav['subComponent(item)']['round-radius'],
                    'border-top-right-radius': item.isLastChild && config.nav['subComponent(item)']['round-radius']
                })
            },

            'modifier(center)': {
                'margin-right': 'auto',
                'margin-left': 'auto'
            },

            'modifier(left)': {
                'margin-right': 'auto'
            },

            'modifier(right)': {
                'margin-left': 'auto'
            },

            'modifier(full)': {
                'width': '100%'
            },

            'subComponent(item)': item => ({
                'display': 'table-cell',
                'cursor': 'pointer',
                'position': 'relative',
                'border-left-color': !item.isFirstChild && 'transparent',
                'border-right-color': !item.isLastChild && item.nextSibling.hasModifier('active') && 'transparent',

                ':hover': () => ({
                    previousSibling: [item.previousSibling, {
                        'border-right-color': 'transparent'
                    }]
                })
            })
        }),

        content: content => ({
            'position': 'relative',
            'top': '-1px'
        }),

        item: item => ({
            'display': 'none',

            'modifier(active)': {
                'display': 'block'
            }
        })
    }

    return [config, layout];
};