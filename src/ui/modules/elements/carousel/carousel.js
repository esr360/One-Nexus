import * as UI from '../../../ui';
import defaults from './carousel.json';
/**
 * Carousel
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
export default function carousel(custom) {

    const TARGET = UI.getTarget('carousel', defaults, custom);

    UI.Synergy(TARGET, (el, options) => {

        const carousel =  new UI.Flickity(el, options.Flickity);

        init(el, options, carousel);

        exports.Flickity = carousel;

    }, defaults, custom, UI.evalConfig);

    UI.config.carousel = UI.parse(defaults.carousel, custom);

    return exports;
}

/**
 * Initialise carousel element
 * 
 * @param {*} carousel 
 * @param {*} el 
 * @param {Object} options 
 */
export function init(el, options, carousel) {

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

    carousel = carousel || new UI.Flickity(el, options.Flickity);

    // Get options from data-attr (if applicable)
    if (el.hasAttribute('data-carousel')) {
        const dataOptions = JSON.parse(el.getAttribute('data-carousel'));
        options.Flickity = Object.assign(options.Flickity, dataOptions);
    }

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
        const offset = el.component('pagination')[0].clientHeight + parseInt(options.bullet.gutter, 10);
        el.style.marginBottom = `${offset}px`;
    }

    return { carousel, el };
}