import * as app from '../../../ui';

/**
 * Header
 */
export function header(els = 'header', custom = {}) {
    const stickyOffset = options.sticky.offset || el.offsetTop;

    if (options.sticky.enabled || el.modifier('sticky')) {
        window.addEventListener('load', stickyHeaderHandler);
        window.addEventListener('scroll', stickyHeaderHandler);
    }

    function stickyHeaderHandler() {
        return toggleStickyHeader({
            type: (window.scrollY > stickyOffset) ? 'stick' : 'unstick', 
            target: el,
            navigation: app.Synergy(options.navigation).query[0],
            overlay: options.overlay,
            dropdownShowOverlay: exports.dropdownShowOverlay,
            dropdownHideOverlay: exports.dropdownHideOverlay,
            config: options
        });
    }

    exports.dropdownShowOverlay = () => app.overlay(options.overlay).show('navDropown');
    exports.dropdownHideOverlay = () => app.overlay(options.overlay).hide('navDropown');
}

/**
 * Toggle Header Stickyness
 */
function toggleStickyHeader(options) {
    const operator = (options.type === 'stick') ? 'add' : 'remove';

    app.Synergy([document.body, options.config.name]).component('isFixed', operator);

    // toggle fixed modifier
    app.Synergy(options.target).modifier('fixed', (options.type === 'stick') ? 'add' : 'remove');

    if (options.navigation && options.navigation.children) {
        // loop over each top level navigation item
        Array.prototype.forEach.call(options.navigation.children[0].children, el => {
            // if the nav item has a child menu
            if (el.querySelector('ul') && options.overlay) {
                if (options.type === 'stick') {
                    el.addEventListener('mouseenter', options.dropdownShowOverlay, false);
                    el.addEventListener('mouseleave', options.dropdownHideOverlay, false);
                } else {
                    el.removeEventListener('mouseenter', options.dropdownShowOverlay, false);
                    el.removeEventListener('mouseleave', options.dropdownHideOverlay, false);
                }
            }
        });
    }

    if (options.overlay && options.type === 'unstick') {
        options.dropdownHideOverlay();
    }
}