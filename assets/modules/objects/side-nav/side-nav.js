import * as app from '../../../app';
import defaults from './side-nav.json';

/**
 * Side-Nav
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
export function sideNav(els = 'sideNav', custom) {

    custom = app.custom('side-nav', custom);

    app.Synergy(els, (el, options) => {

        // toggle side nav on trigger click
        app.Synergy(options.name).component('trigger').forEach(trigger => {
            trigger.addEventListener('click', () => exports.toggle());
        });

        // close side nav on component click
        app.Synergy(options.name).component('close').forEach(trigger => {
            trigger.addEventListener('click', () => exports.hide());
        });

        // insert dropdown toggle element where appropriate
        el.querySelectorAll('li ul').forEach(dropdown => {
            dropdown.parentNode.insertBefore(sideNavDropdownIcon(options), dropdown);
            // set default collapse of dropdowns
            if (!options.collapsible['open-by-default']) {
                dropdown.classList.add('collapsed');
            }
        });

        // toggle dropdown on element click
        el.component('toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                toggle.nextSibling.classList.toggle('collapsed')
            });
        });

        exports.show = () => exports.toggle('show');
        exports.hide = () => exports.toggle('hide');

        exports.toggle = operator => toggleSideNav(el, operator, options);

    }, defaults, custom);

    app.config['side-nav'] = Object.assign(defaults['side-nav'], custom);

    return exports;
};

/**
 * Show/Hide the Side Navigation
 * 
 * @access private
 * 
 * @param {HTMLElement} el - the side-nav HTML element 
 * @param {('show'|'hide')} operator - the type of toggle to activate
 * @param {Object} options - the module options to use
 */
function toggleSideNav(el, operator, options) {
    // determine toggle state
    const state = (el.modifier('visible') || operator === 'hide') ? 'unset' : 'set';
    const listener = (state === 'set') ? 'addEventListener' : 'removeEventListener';

    // toggle sidenav
    el.modifier('visible', state);
    // toggle overlay
    app.siteOverlay(options.overlay).toggle('overlaySideNav');
    // toggle event handler to hide side-nav on overlay click
    app.Synergy(options.overlay).query[0][listener]('click', exports.hide);    
}

/**
 * Create Dropdown Toggle Icon
 * 
 * @access private
 * 
 * @param {Object} options - the module options to use
 */
function sideNavDropdownIcon(options) {
    const el = document.createElement('i');

    el.classList.add(`${options.name}_toggle`, 'fa', options.collapsible.icon);

    return el;  
}