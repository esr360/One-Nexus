import * as app from '../../../app';
import defaults from './search.json';

/**
 * Search
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
export function search(els = 'searchBox', custom) {

    custom = app.custom('search', custom);

    app.Synergy(els, (el, options) => {

        app.Synergy(options.name).component('toggle').forEach(toggle => {
            toggle.addEventListener('click', () => exports.toggle());
        });

        app.Synergy(options.name).component('close').forEach(close => {
            close.addEventListener('click', () => exports.hide());
        });

        exports.show = () => exports.toggle('show');
        exports.hide = () => exports.toggle('hide');

        exports.toggle = operator => {
            el.modifier('visible', (el.modifier('visible') || operator === 'hide') ? 'unset' : 'set');

            if (1) {
                window.setTimeout(() => el.component('input')[0].focus(), 100);
            }
        }

    }, defaults, custom);

    app.config.search = Object.assign(defaults.search, custom);

    return exports;
};