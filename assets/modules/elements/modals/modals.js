import * as app from '../../../app';
import defaults from './modals.json';
/**
 * Modal
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 * @param {Object} exports
 */
export function modal(els = 'modal', custom) {

    custom = app.custom('modals', custom);

    app.Synergy(els, function(el, options) {

        const trigger = document.querySelector(`[data-modal-target="${el.id}"]`) || document.querySelector(`[href="#${el.id}"`);

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

        exports.open = function(target) {
        }

        exports.close = function(target) {
        }

    }, defaults, custom);

    app.config.modals = Object.assign(defaults.modals, custom);

    return exports;
};

/**
 * toggleModal
 * 
 * @access private
 * 
 * @param {('open'|'close')} type
 * @param {(String|Object)} target
 * @param {String} activeClass
 */
function toggleModal(type, target, options) {
    let modal, operator;

    if (type === 'show') { operator = 'add' }
    if (type === 'hide') { operator = 'remove' }

    if (typeof target === 'string') {
        modal = document.querySelector(target) || document.getElementById(target);
    } else if (target instanceof HTMLElement) {
        modal = target;
    }

    if (type === 'show') {
        // close any pre-exisintg visible modals
    }

    modal.classList[operator]('modal-visible');

    if (options.overlay) {
        //app.siteOverlay(type, 'dialog');
    }
}

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


////////


(function ($) {

    $.fn.modalx = function(custom) {
        
        // Options
        var options = $.extend({
            overlay         : true,
            overlaySelector : '#site-overlay',
            animate         : 'left'
        }, custom);
            
        var animateStyle = options.animate;
        
        function openModal(el) {
            // close any pre-exisintg visible modals
            $('.modal').removeClass('modal-visible');
            // show the target modal
            el.addClass('modal-visible');
            if (options.overlay) {
                $(options.overlaySelector).siteOverlay('show', 'dialog');
            }
        }
        
        function closeModal(el) {
            el.removeClass('modal-visible');
            if (options.overlay) {
                $(options.overlaySelector).siteOverlay('hide', 'dialog');
            }
        }
        
        return this.each(function() {
            
            var el = $(this);
            var id = el.attr('id');
            
            if (el.is('[class*="-animate"]')) {
                var $animate = true;
            }
            
            if (!$animate) {
                el.addClass('modal-animate-' + animateStyle);
            }
            
            $('[data-modal="' + id + '"], [href*="' + id + '"]').click(function(e) {
                openModal(el);
                e.preventDefault();
                $(options.overlaySelector + ', .modal_close').click(function() {
                    closeModal(el);
                });
            });
            
        });
            
    } // modal()

}(jQuery));