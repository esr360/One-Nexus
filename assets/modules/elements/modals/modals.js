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
        const modal = options.name;

        // Create any dynamic modals then re-run the function
        if (!(app.config.modals && 'initialised' in app.config.modals)) {
            (app.config.modals) ? app.config.modals.initialised = true : app.config.modals = { initialised: true }

            initModals(document.querySelectorAll('[data-modal-content]'), modal);

            app.modal(els);
        }

        const triggers = document.querySelectorAll(`[data-modal-target="${el.id}"], [href="#${el.id}"]`);

        if (!el.modifier('animate') && options['dafault-animation']) {
            el.modifier(`animate-${options['dafault-animation']}`, 'set');
        }

        triggers.forEach(function(trigger) {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();

                if (options.overlayClickToClose) {
                    app.Synergy(['site-overlay', modal]).query[0].component('close', 'set');
                }

                let closeTriggers = app.Synergy(modal).component('close');

                toggleModal('show', el, options);

                closeTriggers.forEach(function(trigger) {
                    trigger.addEventListener('click', function() {
                        app.Synergy(['site-overlay', modal]).query[0].component('close', 'unset');

                        toggleModal('hide', el, options);
                    });
                });
            }, false);
        });

        exports.toggle = function() {
            if (el.modifier('visible')) {
                toggleModal('hide', el, options);
            } else {
                toggleModal('show', el, options);
            }
        }

        exports.show = function() {
            toggleModal('show', el, options);
        }

        exports.hide = function() {
            toggleModal('hide', el, options);
        }

    }, defaults, custom);

    app.config.modals = Object.assign(app.config.modals, defaults.modals, custom);

    return exports;
};

/**
 * Show/Hide a Modal
 * 
 * @access private
 * 
 * @param {('show'|'hide')} type
 * @param {(String|HTMLElement)} target
 * @param {Object} options
 */
function toggleModal(type, target, options) {
    const operator = (type === 'show') ? 'add' : ((type === 'hide') ? 'remove' : '');

    if (typeof target === 'string') {
        target = document.querySelector(target) || document.getElementById(target);
    }

    if (type === 'show') {
        app.Synergy('modal', function(el) {
            app.modal(el).hide();
        });
    }

    app.Synergy(target).modifier('visible', operator)

    if (options.overlay) {
        app.siteOverlay()[type]('dialog');
    }
}

/**
 * Initialise Modals from Data-Attributes
 * 
 * @access private
 * 
 * @param {Object} els
 */
function initModals(els, namespace) {
    els.forEach(function(el, index) {
        const id = (el.href) ? (el.href.substr(el.href.lastIndexOf('/') + 1).replace(/^#/, '')) : `_modal_${index}`;
        const style = (el.getAttribute('data-modal-style')) ? `-animate-${el.getAttribute('data-modal-style')}` : '';
        const content = el.getAttribute('data-modal-content');

        const template = [`
            <div class="${namespace}${style}" id="${id}">
                <div class="${namespace}_close"><i class="fa fa-times"></i></div>
                <div class="${namespace}_content">${content}</div>
            </div>
        `];

        el.setAttribute('data-modal-target', id);

        document.body.insertAdjacentHTML('beforeend', template);
    });
}