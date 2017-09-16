import * as app from '../../../app';
import defaults from './progress-bars.json';

/**
 * Modal
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
export function progressBar(els = 'progress-bar', custom = {}) {

    custom = app.custom('progress-bars', custom);

    app.Synergy(els, (el, options) => {
        const progress = el.getAttribute('data-progress');

        el.setAttribute('value', progress.replace(/[^-\d\.]/g, ''));
    }, defaults, custom, app.evalConfig);

    app.config['progress-bars'] = app.deepextend(defaults['progress-bars'], custom);

    return exports;
}