export default function layout(element, config, globals) {
    return [config, {
        'margin-bottom': `calc(${window.getComputedStyle(element).marginBottom} + ${config.pagination['margin-top']} + ${config.bullet.height})`,

        slide: {
            'width': '100%'
        },

        pagination: pagination => {
            return {
                'display': element.modifier('hide-pagination') ? 'none' : null,
                'bottom': 'auto'
            }
        },

        bullet: bullet => {
            return {
                'display': config.bullet.disable ? 'none' : null
            }
        },

        navigationItem: navigationItem => {
            return {
                'display': element.modifier('hide-navigation') || config.navigationItem.disable ? 'none' : null
            }
        }
    }]
}