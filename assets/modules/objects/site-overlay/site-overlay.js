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
export function siteOverlay(els = 'site-overlay', flag, custom) {

    custom = app.custom('site-overlay', custom);

    app.Synergy(els, (el, options) => {

        exports.toggle = (flag = flag, target = el) => {
            if (el.modifier('visible')) {
                toggleOverlay('hide', target, flag, options);
            } else {
                toggleOverlay('show', target, flag, options);
            }
        }

        exports.show = (flag = flag, target = el) => {
            toggleOverlay('show', target, flag, options);
        }

        exports.hide = (flag = flag, target = el) => {
            toggleOverlay('hide', target, flag, options);
        }

        el.addEventListener('click', () => app.siteOverlay(el).hide());

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
function toggleOverlay(type, target, flag, options) {
    flag = flag ? flag + '-' : '';
    app.Synergy(target).query.modifier(`${flag}visible`, (type === 'show') ? 'add' : 'remove');
}