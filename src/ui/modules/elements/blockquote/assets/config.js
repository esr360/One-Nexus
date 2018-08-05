export default function config(theme) {
    // console.log(theme.typography.colors.base(theme.colors));
    console.log(theme.typography.sizes['size-2']);
    return {
        'name': 'blockquote',
        // 'font-family': ['Georgia', 'serif'],
        'modifier(callout)': {
            'padding': '0.5em 0.75em',
            'font-size': theme.typography.sizes['size-5'],
            'border-left': '7px solid',
            'border-left-color': theme.colors.opaque['dark-1']
        },
        'footer': {
            'font-size': theme.typography.sizes['size-2'],
            'font-style': 'italic',
            'color': theme.colors.opaque['dark-4']
        }
    }
}