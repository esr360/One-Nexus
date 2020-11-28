export default (element, config, globals) => {
    const layout = {
        link: link => ({
            'display': 'inline-block',
            'color': config.color,

            ':hover': {
                'text-decoration': 'none'
            }
        }),

        image: image => ({
            'display': 'inline-block',
            'height': config['image-height'],
            'vertical-align': 'middle'
        })
    }

    return [config, layout];
};