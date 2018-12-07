export default (element, config, globals) => {
    const layout = {
        'width': '100%',
        'color': 'red',

        cell: () => ({
            'color': 'blue'
        })
    }

    return [config, layout];
};