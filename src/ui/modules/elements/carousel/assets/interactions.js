import Flickity from 'flickity';

export default {
    init, 
    Flickity: query => Flickity.data(query)
}

/**
 * Initialise carousel element
 */
export function init(el, carousel, config) {
    config = config || Carousel.config;

    // Map Flickity elements to One-Nexus components
    const components = {
        'wrapper'            : '.flickity-viewport',
        'pagination'         : '.flickity-page-dots',
        'bullet'             : '.dot',
        'navigation'         : '',
        'navigationItem'     : '.flickity-prev-next-button',
        'navigationItem-prev': '.flickity-prev-next-button.previous',
        'navigationItem-next': '.flickity-prev-next-button.next'
    };

    if (el.hasAttribute('data-carousel')) {
        config.Flickity = Object.assign(config.Flickity, JSON.parse(el.getAttribute('data-carousel')));
    }

    carousel = carousel || new Flickity(el, config.Flickity);

    carousel.on('change', () => {
        el.querySelectorAll('.dot').forEach(dot => {
            dot.classList.add(config.name + '_' + 'bullet');

            if (dot.classList.contains('is-selected')) {
                sQuery([dot, config.name + '_' + 'bullet']).modifier('selected', 'set');
            }
        });

        el.repaint();
    });

    // Add appropriate classes to carousel elements for styles
    for (let [key, value] of Object.entries(components)) {
        if (value) {
            const identifier = config.name + '_' + key;
            const components = el.querySelectorAll(value);

            components.forEach(el => {
                sQuery([el, config.name]).setComponent(key);

                el.namespace = identifier;

                if (el.classList.contains('is-selected')) {
                    sQuery([el, identifier]).modifier('selected', 'set');
                }
            });
        }
    }

    // Compensate for pagination
    // @TODO see if this is still needed; move logic to layout.js
    if (!config.navigationItem.disable) {
        const offset = el.getComponent('pagination').clientHeight + parseInt(config.bullet.gutter, 10);

        el.style.paddingBottom = `${offset}px`;
    }

    el.repaint();

    return { carousel, el };
}