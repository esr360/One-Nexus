export default (element, config, globals) => {
    const layout = {
        'width': '100%',

        cell: cell => ({
            'padding': config['cell-padding'],
            'padding-left': cell.isFirstChild && 0,
            'border-bottom': `1px solid ${globals.colors.opaque['dark-1']}`,
            'border-left': !cell.isFirstChild && `1px solid ${globals.colors.opaque['dark-1']}`,
            'text-align': 'left',
            'vertical-align': 'top'
        }),

        heading: heading => ({
            ...layout.cell(heading)
        }),

        row: row => ({
            'display': 'table-row',

            cell: () => ({
                'border-bottom': row.isLastChild && 'none'
            })
        })
    }

    return [config, layout];
};