export default (element, config, globals) => {
    const layout = {
        list: () => ({
            'padding': 0
        }),
    
        item: item => ({
            'display': 'inline-block',
            'list-style': 'none',
            'margin-right': !item.isLastChild && '0.2em'
        }),

        link: () => ({

        }),

        icon: () => ({
            'margin-right': '0.4em'
        }),

        separator: () => ({
            'margin-left': '0.4em'
        })
    }

    return [config, layout];
};