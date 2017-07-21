import * as app from '../../../app';
import defaults from './side-nav.json';

/**
 * Side-Nav
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
export function sideNav(els = 'sideNav', custom) {

    custom = app.custom('side-nav', custom);

    app.Synergy(els, (el, options) => {

        app.Synergy(options.name).component('trigger').forEach(trigger => {
            trigger.addEventListener('click', () => exports.toggle());
        });

        app.Synergy(options.name).component('close').forEach(trigger => {
            trigger.addEventListener('click', () => exports.hide());
        });

        exports.show = () => exports.toggle('show');
        exports.hide = () => exports.toggle('hide');

        exports.toggle = operator => {
            const state = (el.modifier('visible') || operator === 'hide') ? 'unset' : 'set';
            const listener = (state === 'set') ? 'addEventListener' : 'removeEventListener';
            // toggle sidenav
            el.modifier('visible', state);
            // toggle overlay
            app.siteOverlay(options.overlay).toggle('overlaySideNav');
            // toggle event handler to hide side-nav on overlay click
            app.Synergy(options.overlay).query[0][listener]('click', exports.hide);
        }

    }, defaults, custom);

    app.config['side-nav'] = Object.assign(defaults['side-nav'], custom);

    return exports;
};