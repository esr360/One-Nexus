import * as app from '../../../app';
import defaults from './site-overlay.json';

/**
 * Page Overlay
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
export function siteOverlay(els = 'site-overlay', custom) {

    custom = app.custom('site-overlay', custom);

    app.Synergy(els, (el, options) => {

        el.addEventListener('click', () => exports.hide());

        exports.show = flag => exports.toggle(flag, 'show');
        exports.hide = flag => exports.toggle(flag, 'hide');

        exports.toggle = (flag, operator) => {
            const state = (el.modifier('visible') && operator !== 'show' || operator === 'hide') ? 'unset' : 'set';

            el.modifier((flag ? flag + '-' : '') + 'visible', state);
        }

    }, defaults, custom);

    app.config['site-overlay'] = Object.assign(defaults['site-overlay'], custom);

    return exports;
}