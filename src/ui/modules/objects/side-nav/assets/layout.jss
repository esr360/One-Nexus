export default (element, config, globals) => {
    const layout = {
        'position': 'fixed',
        'overflow-y': 'scroll',
        'height': '100%',
        'top': 0,
        'z-index': 5,

        reset: [element.querySelectorAll('ul'), {
            'list-style': 'none',
            'padding': 0,
            'margin': 0
        }],

        menu: [element.getComponent('menu'), {
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
        }]
    }

    return [config, layout];
};