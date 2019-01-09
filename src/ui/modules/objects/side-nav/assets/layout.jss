export default (element, config, globals) => {
    const layout = {
        'position': 'fixed',
        'z-index': 13,
        'top': 0,
        'transform': element.hasModifier('visible') ? 'translateX(0)' : 'translateX(-100%)',
        'max-width': '100%',
        'height': '100%',
        'overflow': 'auto',

        reset: [element.querySelectorAll('ul'), {
            'list-style': 'none',
            'padding': 0,
            'margin': 0
        }],

        menu: menu => ({
            'display': menu.hasModifier('hidden') ? 'none' : 'block',

            item: item => ({
                'display': 'block',

                link: link => ({
                    'text-decoration': 'none',
                    'display': 'block',
                    'position': 'relative',
                    'z-index': 2
                }),

                menu: [item.getComponent('menu'), {
                    item: item => ({
                        menu: [item.getComponent('menu'), {
                            'padding-left': '1.5em'
                        }]
                    }),
                }]
            })
        }),

        toggleDropdown: toggleDropdown => ({
            'position': 'absolute',
            'right': 0,
            'top': 0,
            'padding': '1.45em'
        }),
    }

    return [config, layout];
};