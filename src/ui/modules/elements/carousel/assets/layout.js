export default function layout(element, config) {
    return [config, {
        'margin-bottom': `calc(${window.getComputedStyle(element).marginBottom} + ${config.pagination['margin-top']} + ${config.bullet.height})`,

        slide: () => ({
            'width': '100%'
        }),

        pagination: () => ({
            'display': element.modifier('hide-pagination') ? 'none' : null,
            'bottom': 'auto'
        }),

        bullet: () => ({
            'display': config.bullet.disable ? 'none' : null
        }),

        navigationItem: () => ({
            'display': element.modifier('hide-navigation') || config.navigationItem.disable ? 'none' : null
        })
    }]
}