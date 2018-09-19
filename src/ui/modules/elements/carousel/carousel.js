import Flickity from 'flickity';
import defaults from './carousel.json';

export default {
    init, 
    Flickity: query => Flickity.data(query)
}

/**
 * Initialise carousel element
 * 
 * @param {*} carousel 
 * @param {HTMLElement} el
 */
export function init(el, carousel) {
    const options = Object.assign(defaults.carousel, window.theme.carousel);

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

    // Get options from data-attr (if applicable)
    if (el.hasAttribute('data-carousel')) {
        const dataOptions = JSON.parse(el.getAttribute('data-carousel'));
        options.Flickity = Object.assign(options.Flickity, dataOptions);
    }

    carousel = carousel || new Flickity(el, options.Flickity);

    carousel.on('select', () => {
        el.querySelectorAll('.dot').forEach(el => el.classList.add(options.name + '_' + 'bullet'));
    });

    // Add appropriate classes to carousel elements for styles
    for (let [key, value] of Object.entries(components)) {
        if (value) {
            const identifier = options.name + '_' + key;
            const components = el.querySelectorAll(value);

            components.forEach(el => el.classList.add(identifier));
        }
    }

    // Compensate for pagination
    if (!options.navigationItem.disable) {
        const offset = el.getComponent('pagination').clientHeight + parseInt(options.bullet.gutter, 10);
        el.style.paddingBottom = `${offset}px`;
    }

    return { carousel, el };
}