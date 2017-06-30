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

    app.Synergy(els, (el, options) => {
        const modal   = options.name;
        const overlay = () => app.Synergy(options.overlay.module).query[0];

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

        triggers.forEach(trigger => {
            trigger.addEventListener('click', event => {
                event.preventDefault();

                if (options.overlay.clickToClose) {
                    app.Synergy([overlay(), modal]).query.component('close', 'set');
                }

                let closeTriggers = app.Synergy(modal).component('close');

                toggleModal('show', els, el, options, overlay());

                closeTriggers.forEach(trigger => {
                    trigger.addEventListener('click', () => {
                        app.Synergy([overlay(), modal]).query.component('close', 'unset');

                        toggleModal('hide', els, el, options, overlay());
                    });
                });
            }, false);
        });

        exports.toggle = operator => toggleModal(
            (el.modifier('visible') || operator === 'hide') ? 'hide' : 'show', els, el, options, overlay()
        );

        exports.show = () => toggleModal('show', els, el, options, overlay());

        exports.hide = () => toggleModal('hide', els, el, options, overlay());

    }, defaults, custom);

    app.config.modals = Object.assign((app.config.modals) ? (app.config.modals) : '', defaults.modals, custom);

    return exports;
};

/**
 * Show/Hide a Modal
 * 
 * @access private
 * 
 * @param {('show'|'hide')} [type] - the type of toggle to activate
 * @param {(String|HTMLElement|NodeList)} [all] - a Synergy selector to match all modals
 * @param {(String|HTMLElement)} [target] - a Synergy selector to match the modal of interest
 * @param {Object} [options] - the module options to use when running the function
 * @param {HTMLElement} [overlay] - the HTML element acting as the page overlay
 */
function toggleModal(type, all, target, options, overlay) {
    const operator = (type === 'show') ? 'add' : ((type === 'hide') ? 'remove' : '');

    if (type === 'show' && document.querySelector(all) !== target) {
        app.Synergy(all, el => app.modal(el).hide());
    }

    app.Synergy(target).modifier('visible', operator);

    if (options.overlay.enabled) {
        app.siteOverlay(overlay)[type]('dialog');
    }
}

/**
 * Initialise Modals from Data-Attributes
 * 
 * @access private
 * 
 * @param {NodeList} [els] - elements to initialise as modals
 * @param {String} [namespace = 'modal'] - name of modal module
 */
function initModals(els, namespace) {
    els.forEach((el, index) => {
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