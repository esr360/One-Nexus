export default (element, config, globals) => {
    const layout = {
        menu: menu => ({
            'list-style': 'none',
            'padding': 0,
            'margin': 0,

            item: item => ({
                'display': 'inline-block',

                link: link => ({
                    'text-decoration': 'none',
                    'display': 'block'
                }),

                ':hover': {
                    dropdown: [item.getComponent('dropdown'), {
                        'visibility': 'visible',
                        'opacity': 1
                    }]
                }
            }),
        }),

        dropdown: dropdown => ({
            'list-style': 'none',
            'padding': 0,
            'margin': 0,
            'position': 'absolute',
            'visibility': 'hidden',
            'opacity': 0,
            'text-align': 'left',

            item: item => ({
                'position': 'relative',

                link: link => ({
                    'display': 'block',
                    'text-decoration': 'none'
                }),

                ':hover': {
                    dropdown: [item.getComponent('dropdown'), {
                        'visibility': 'visible',
                        'opacity': 1
                    }]
                }
            }),

            dropdown: dropdown => ({
                'transform': 'translateX(-100%)',
                'top': 0
            })
        }),
    }

    return [config, layout];
};