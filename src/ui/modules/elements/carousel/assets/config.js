export default function config(theme) {
    return {
        'name': 'carousel',

        navigationItem: {
            'disable': false,
            'height': theme.typography.sizes['size-10'],
            'width': theme.typography.sizes['size-10'],
            'background-color': theme.colors.opaque['light-8'],
            'arrow-color': theme.colors.opaque['dark-4'],
            'arrow-size': '40%',
            'shape': 'circle',
            'transition': theme.core.transition
        },

        bullet: {
            'disable': false,
            'height': '10px',
            'width': '10px',
            'background-color': theme.colors.opaque['dark-4'],
            'transition': theme.core.transition,

            'modifier(selected)': {
                'background-color': theme.colors.brand['brand-3']
            }
        },

        pagination: {
            'margin-top': `calc(${theme.core.margin} / 2)`
        },

        'Flickity': {
            'cellAlign': 'left',
            'contain': true
        }
    }
}