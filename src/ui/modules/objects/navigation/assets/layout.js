export default (element, config, globals) => {
    const layout = {
        menu: menu => ({
            'list-style': 'none',
            'padding': 0,
            'margin': 0,

            item: item => ({
                'display': 'inline-block',
                'margin-left': !item.isFirstchild && config.menu.item.gutter,

                link: link => ({
                    'text-decoration': 'none',
                    'display': 'block',
                    'position': 'relative',
                    'z-index': 2
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
            'z-index': 1,

            item: item => ({
                'position': 'relative',

                link: link => ({
                    'display': 'block',
                    'text-decoration': 'none',
                    'border-top-color': item.isFirstChild && 'transparent'
                }),

                ':hover': {
                    dropdown: [item.getComponent('dropdown'), {
                        'visibility': 'visible',
                        'opacity': 1
                    }],

                    nextSibling: [item.nextSibling, {
                        link: {
                            'border-top-color': 'transparent'
                        }
                    }]
                }
            }),

            dropdown: dropdown => ({
                'transform': config.dropdown.placement === 'left' ? 'translateX(-100%)' : 'translateX(100%)',
                'top': 0
            })
        }),
    }

    return [config, layout];
};