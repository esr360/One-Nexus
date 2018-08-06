export default function config(theme) {
    return {
        'name': 'button',
        'color': theme.colors.greyscale.white,
        // 'background': theme.colors.greyscale['grey-4'],
        // 'transition': ['#CORE', 'transition'],
        'padding': '0.65em 1em',
        'line-height': '1',
        'font-weight': 'normal',
        // 'font-family': ['#CORE', 'font-family'],
        'border-width': '1px',
        'border-style': 'solid',
        'disabled-opacity': 0.6,
        'round-radius': '0.4em',
        'group-spacing': '0.5em',
        'group-stack': 'break-1',
        'palettes': ['brand', 'greyscale', 'alert', 'social'],
        'colors': {
            ...theme.colors.brand,
            ...theme.colors.alert
        },
        'border-palettes': false,
        'sizes': theme.typography.sizes,
        'active': {
            'background': theme.colors.brand['brand-1'],
            'color': theme.colors.greyscale.white
        },
        'greyscale-text-threshold': 77
    }
}