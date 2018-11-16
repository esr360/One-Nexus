export default {
    'background': colors => colors.greyscale['grey-1'],
    'font-family': typography => typography.typefaces['primary'],
    'text-color': theme => theme.typography.colors['base'](theme.colors),
    'font-size': typography => typography.sizes['size-3'],
    'selection-background': colors => colors.brand['brand-1'],
    'selection-color': colors => colors.greyscale['white'],
    'margin': '2rem',
    'line-height': '1.4',
    'radius': '0.4em',
    'transition': '0.4s',
}

console.log(window.ui);