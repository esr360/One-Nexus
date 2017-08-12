import * as app from '../../../app';
import defaults from './tooltips.json';

/**
 * Tabs
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
export function tooltips(els = 'tooltip', custom) {

    custom = app.custom('tooltips', custom);

    app.Synergy(els, (el, options) => {

        let position = 'top';
        const content = el.getAttribute('data-tooltip');

        ['top', 'bottom', 'left', 'right'].forEach(pos => {
            el.modifier().forEach(modifier => {
                if (modifier === pos) position = pos;
            });
        });

        const template = [`
            <div class="tooltip_wrapper-${position}">
                <div class="tooltip_content">${content}</div>
            </div>
        `];

        el.setAttribute('ontouchstart', '');
        el.insertAdjacentHTML('beforeend', template);

    }, defaults, custom);

    app.config.tooltips = Object.assign(defaults.tooltips, custom);

    return exports;
};