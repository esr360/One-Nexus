import * as app from '../../../app';
import defaults from './modals.json';

/**
 * Modal
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
export function modal(els = 'modal', custom) {

    custom = app.custom('modals', custom);

    app.Synergy(els, function(el, options) {

        const triggers = document.querySelectorAll(`[data-modal-target="${el.id}"], [href="#${el.id}"]`);
        const animate  = (el.modifier('animate')) ? true : false;

        if (!animate && options['dafault-animation']) {
            el.modifier(`animate-${options['dafault-animation']}`, true);
        }

        Array.prototype.forEach.call(triggers, function(trigger) {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();

                const closeTriggers = document.querySelectorAll(`${options.overlaySelector}, .modal_close`);

                toggleModal('show', el, options);

                Array.prototype.forEach.call(closeTriggers, function(trigger) {
                    trigger.addEventListener('click', function() {
                        toggleModal('hide', el, options);
                    });
                });
            }, false);
        });

        exports.show = function() {
            toggleModal('show', el, options);
        }

        exports.hide = function() {
            toggleModal('hide', el, options);
        }

    }, defaults, custom);

    app.config.modals = Object.assign(defaults.modals, custom);

    return exports;
};

/**
 * Show/Hide a Modal
 * 
 * @access private
 * 
 * @param {('show'|'hide')} type
 * @param {(String|Object)} target
 * @param {Object} options
 */
function toggleModal(type, target, options) {
    let modal;

    const operator = (type === 'show') ? 'add' : ((type === 'hide') ? 'remove' : '');

    if (typeof target === 'string') {
        modal = document.querySelector(target) || document.getElementById(target);
    } else if (target instanceof HTMLElement) {
        modal = target;
    }

    if (type === 'show') {
        app.Synergy('modal', function(el) {
            app.modal(el).hide();
        });
    }

    modal.classList[operator]('modal-visible');

    if (options.overlay) {
        app.siteOverlay(document.querySelectorAll(options.overlaySelector))[type]('dialog');
    }
}

/**
 * Build modal elements from data-attributes
 */
Array.prototype.forEach.call(document.querySelectorAll('[data-modal-content]'), function(el, index) {

    const id = (el.href) ? (el.href.substr(el.href.lastIndexOf('/') + 1).replace(/^#/, '')) : `_modal_${index}`;
    const style = (el.getAttribute('data-modal-style')) ? `-animate-${el.getAttribute('data-modal-style')}` : '';
    const content = el.getAttribute('data-modal-content');

    const template = [`
        <div class="modal${style}" id="${id}">
            <div class="modal_close"><i class="fa fa-times"></i></div>
            <div class="modal_content">${content}</div>
        </div>
    `];

    el.setAttribute('data-modal-target', id);

    document.body.insertAdjacentHTML('beforeend', template);
});