export default (element, config, globals) => {
    const layout = {
        'color': 'red',

        cell: cell => ({
            'color': 'blue'
        })
    }

    return [config, layout];
};