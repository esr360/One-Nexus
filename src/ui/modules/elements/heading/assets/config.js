export default theme => ({
    'name': 'heading',
    'sizes': theme.typography.sizes,
    
    group: {
        gutter: theme.core.margin,

        heading: {
            'line-height': 0.8,

            gutter: '0.5em'
        }
    }
});