import * as app from '../../../ui';
import defaults from './modal.json';

/**
 * Modal
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
export default function modal(custom) {

    const els = app.getTarget('modal', defaults, custom);

    app.Synergy(els, (el, options) => {

        // Create any dynamic modals then re-run the function
        if (!(app.config.modals && 'initialised' in app.config.modals)) {
            if (app.config.modals) {
                app.config.modals.initialised = true;
            } else {
                app.config.modals = { initialised: true };
            }

            initModals(document.querySelectorAll('[data-modal-content]'), options.name);

            return app.modal(els);
        }

        const overlay = app.Synergy(options.overlay.module).query[0];

        const show = () => toggleModal('show', els, el, options, overlay);
        const hide = () => toggleModal('hide', els, el, options, overlay);

        // setup animation modifier
        if (el.modifier('animate') !== true && options['dafault-animation']) {
            el.modifier(`animate-${options['dafault-animation']}`, 'add');
        }

        // setup overlay as modal close trigger
        if (options.overlay.clickToClose) {
            app.Synergy([overlay, options.name]).query.component('close', 'add');
        }

        // Open/Close Triggers
        const openTriggers  = document.querySelectorAll(`[data-modal-target="${el.id}"], [href="#${el.id}"]`);
        // @todo add option to change to el.component('close') to protect outside influences
        const closeTriggers = app.Synergy(options.name).component('close');

        openTriggers.forEach(trigger => trigger.addEventListener('click', show, false));
        closeTriggers.forEach(trigger => trigger.addEventListener('click', hide, false));

        exports.toggle = operator => {
            if (el.modifier('visible') || operator === 'hide') exports.hide(); 
            else exports.show();
        };

        exports.show = () => toggleModal('show', els, el, options, overlay);
        exports.hide = () => toggleModal('hide', els, el, options, overlay);

    }, defaults, custom, app.evalConfig);

    app.config.modal = app.parse(
        (app.config.modal) ? app.config.modal : '', defaults.modal, custom
    );

    return exports;
}

/**
 * Show/Hide a Modal
 * 
 * @access private
 * 
 * @param {('show'|'hide')} type - the type of toggle to activate
 * @param {(String|HTMLElement|NodeList)} all - a Synergy selector to match all modals
 * @param {(String|HTMLElement)} target - a Synergy selector to match the modal of interest
 * @param {Object} options - the module options to use when running the function
 * @param {HTMLElement} [overlay] - the HTML element acting as the page overlay
 */
function toggleModal(type, all, target, options, overlay) {
    // close any other currently openened modals
    if (type === 'show' && app.isValidSelector(all) && document.querySelector(all) !== target) {
        app.Synergy(all, el => toggleModal('hide', all, el, options, overlay));
    }

    // toggle the page overlay
    if (options.overlay.enabled) app.overlay(overlay)[type]('dialog');

    // toggle the target modal
    app.Synergy(target).modifier('visible', (type === 'show') ? 'add' : 'remove');
}

/**
 * Initialise Modals from Data-Attributes
 * 
 * @access private
 * 
 * @param {NodeList} els - elements to initialise as modals
 * @param {String} namespace - name of modal module
 */
function initModals(els, namespace) {
    els.forEach((el, index) => {
        const id = el.href ? (el.href.substr(el.href.lastIndexOf('/') + 1).replace(/^#/, '')) : `_modal_${index}`;
        const style = (el.getAttribute('data-modal-style')) ? '-animate-' + el.getAttribute('data-modal-style') : '';
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