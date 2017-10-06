import * as app from '../../../app';
import defaults from './tabs.json';

/**
 * Tabs
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
export function tabs(els = 'tabs', custom = {}) {

    custom = app.custom('tabs', custom);

    app.Synergy(els, (el, options) => {
        // Get individual tab items
        const tabItems = function() {
            // get depth of target tab items as tabs may be nested
            const itemDepth = el.component('item')[0].parents().length;
            // get all items of same depth
            return Array.prototype.filter.call(el.component('item'), el => {
                return el.parents().length === itemDepth;
            });
        };

        Array.prototype.forEach.call(el.component('nav')[0].children, (item, index) => {
            item.addEventListener('click', () => {
                Array.prototype.forEach.call(item.parentNode.children, sibling => {
                    sibling.modifier('active', 'unset');

                    if (options.activeClass) sibling.classList.remove(options.activeClass);
                });

                item.modifier('active', 'set');

                if (options.activeClass) {
                    item.classList.add(options.activeClass);
                }

                // Hide previously selected item
                tabItems().forEach(tab => tab.modifier('active', 'unset'));
                // Show new item
                tabItems()[index].modifier('active', 'set');
            });
        });

    }, defaults, custom, app.evalConfig);

    app.config.tabs = app.parse(defaults.tabs, custom);

    return exports;
}