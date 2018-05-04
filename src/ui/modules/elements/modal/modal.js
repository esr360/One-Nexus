import * as UI from '../../../ui';
import defaults from './modal.json';
/**
 * Modal
 * 
 * @param {Object} custom
 */
export default function modal(custom) {

    const TARGET = UI.getTarget('modal', defaults, custom);

    let methods = {};

    UI.Synergy(TARGET, (modal, options) => {

        // Create any dynamic modals then re-run the function
        if (!(UI.config.modal && UI.config.modal.initialised)) {
            initModals(document.querySelectorAll('[data-modal-content]'), options.name);

            return UI.modal(TARGET);
        }

        const overlay = UI.Synergy(options.overlay.module).query[0];

        // setup overlay as modal close trigger
        if (options.overlay.clickToClose) {
            UI.Synergy([overlay, options.name]).query.component('close', 'add');
        }

        // setup animation modifier
        if (modal.modifier('animate') !== true && options['dafault-animation']) {
            modal.modifier(`animate-${options['dafault-animation']}`, 'add');
        }

        methods.show = () => toggleModal('show', TARGET, modal, options, overlay);
        methods.hide = () => toggleModal('hide', TARGET, modal, options, overlay);

        methods.toggle = operator => {
            if (modal.modifier('visible') || operator === 'hide') methods.hide(); 
            else methods.show();
        };

        // Open/Close Triggers
        const openTriggers  = document.querySelectorAll(`[data-modal-target="${modal.id}"], [href="#${modal.id}"]`);
        // @todo add option to change to modal.component('close') to protect outside influences
        const closeTriggers = UI.Synergy(options.name).component('close');

        openTriggers.forEach(trigger => trigger.addEventListener('click', methods.show, false));
        closeTriggers.forEach(trigger => trigger.addEventListener('click', methods.hide, false));

    }, defaults, custom, UI.evalConfig);

    return methods;
}

/**
 * Show/Hide a Modal
 * 
 * @access private
 * 
 * @param {('show'|'hide')} state - the type of toggle to activate
 * @param {(String|HTMLElement|NodeList)} all - a Synergy selector to match all modals
 * @param {(String|HTMLElement)} target - a Synergy selector to match the modal of interest
 * @param {Object} options - the module options to use when running the function
 * @param {HTMLElement} [overlay] - the HTML element acting as the page overlay
 */
function toggleModal(state, all, target, options, overlay) {
    // close any other currently openened modals
    if (state === 'show' && UI.isValidSelector(all) && document.querySelector(all) !== target) {
        UI.Synergy(all, el => toggleModal('hide', all, el, options, overlay));
    }

    // toggle the page overlay
    if (options.overlay.enabled) UI.overlay(overlay)[state]('dialog');

    // toggle the target modal
    UI.Synergy(target).modifier('visible', (state === 'show') ? 'add' : 'remove');
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