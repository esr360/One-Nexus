import * as app from '../../../app';
import defaults from './site-overlay.json';

/**
 * Modal
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
export function siteOverlay(els = 'site-overlay', flag, custom) {

    custom = app.custom('site-overlay', custom);

    app.Synergy(els, function(el, options) {
        /*
        if (el.modifier('visible')) {
            toggleOverlay('hide', flag, options);
        } else {
            toggleOverlay('show', flag, options);
        }
        */

        exports.show = function(flag = flag) {
            toggleOverlay('show', flag, options);
        }

        exports.hide = function(flag = flag) {
            toggleOverlay('hide', flag, options);
        }

        el.addEventListener('click', function() {
            app.siteOverlay(el).hide();
        });
    }, defaults, custom);

    app.config['site-overlay'] = Object.assign(defaults['site-overlay'], custom);

    return exports;
}

/**
 * Show/Hide Overlay
 * 
 * @access private
 * 
 * @param {('show'|'hide')} type
 * @param {String} flag
 * @param {Object} options
 */
function toggleOverlay(type, flag, options) {
    const operator = (type === 'show') ? 'add' : ((type === 'hide') ? 'remove' : '');

    flag = (flag) ? flag + '-' : '';

    app.Synergy('site-overlay').query[0].classList[operator]('site-overlay-' + flag + 'visible');
}