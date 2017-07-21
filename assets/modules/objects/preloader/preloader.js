import * as app from '../../../app';
import defaults from './preloader.json';

/**
 * Preloader
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
export function preloader(els = 'preloader', custom) {

    custom = app.custom('preloader', custom);

    app.Synergy(els, (el, options) => {

        window.addEventListener('load', () => exports.hide());

        app.Synergy(options.name).component('close').forEach(trigger => {
            trigger.addEventListener('click', () => exports.hide());
        });

        exports.show = () => exports.toggle('show');
        exports.hide = () => exports.toggle('hide');

        exports.toggle = operator => el.modifier('hidden', 
            (el.modifier('hidden') && operator !== 'hide' || operator === 'show') ? 'unset' : 'set'
        );

    }, defaults, custom);

    app.config.preloader = Object.assign(defaults.preloader, custom);

    return exports;
};