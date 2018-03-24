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
export function carousel(custom) {

    const TARGET = UI.getTarget('carousel', defaults, custom);

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

    UI.Synergy(TARGET, (el, options) => {
        // Get options from data-attr (if applicable)
        if (el.hasAttribute('data-carousel')) {
            const dataOptions = JSON.parse(el.getAttribute('data-carousel'));
            options.Flickity = Object.assign(options.Flickity, dataOptions);
        }

        // Create new Flickity instance
        const carousel = new UI.Flickity(el, options.Flickity);

        carousel.on('select', () => {
            // add One-Nexus class to bullet
            el.querySelector('.dot.is-selected').classList.add(options.name + '_' + 'bullet');
        });

        // Add appropriate classes to carousel elements for styles
        for (let [key, value] of Object.entries(components)) {
            if (value) {
                const identifier = options.name + '_' + key;
                const components = el.querySelectorAll(value);

                elInit(components, identifier);
            }
        }

        // Compensate for pagination
        if (!options.navigationItem.disable) {
            const offset = el.component('pagination')[0].clientHeight + parseInt(options.bullet.gutter, 10);
            el.style.marginBottom = `${offset}px`;
        }

        exports.Flickity = carousel;

        function elInit(els, identifier) {
            els.forEach(el => el.classList.add(identifier));
        }

    }, defaults, custom, UI.evalConfig);

    UI.config.carousel = UI.parse(defaults.carousel, custom);

    return exports;
}