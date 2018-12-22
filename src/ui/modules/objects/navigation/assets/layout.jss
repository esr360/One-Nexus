export default (element, config, globals) => {
    const layout = {
        menu: menu => ({
            'list-style': 'none',
            'padding': 0,
            'margin': 0,
        }),

        dropdown: dropdown => ({
            ...layout.menu(dropdown),

            'position': 'absolute',
            'visibility': 'hidden',
            'opacity': 0,
            'text-align': 'left',
        }),

        item: item => {
            const isLinkItem = item.firstChild && item.firstChild.tagName === 'A';

            return {
                'display': 'inline-block',
                'padding': isLinkItem && 0,

                link: [isLinkItem && item.firstChild, {
                    'display': 'block',
                    'padding': config.item.padding
                }],

                ':hover': {
                    dropdown: [item.getComponent('dropdown'), {
                        'visibility': 'visible',
                        'opacity': 1
                    }]
                }
            }
        }
    }

    return [config, layout];
};