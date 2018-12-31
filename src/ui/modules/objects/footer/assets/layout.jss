export default (element, config, globals) => {
    const layout = {
        link: [element.querySelectorAll('a'), {
            ...config.link
        }]
    }

    return [config, layout];
};