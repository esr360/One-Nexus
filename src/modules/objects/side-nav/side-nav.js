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
export function sideNav(els = 'sideNav', custom = {}) {

    custom = app.custom('side-nav', custom);

    app.Synergy(els, (el, options) => {
        // populate the side-navigation
        if (options.navigation) {
            el.querySelector('nav').innerHTML = app.Synergy(options.navigation).query[0].innerHTML;
        }

        // toggle side nav on component click
        app.Synergy(options.name).component('toggle').forEach(toggle => {
            toggle.addEventListener('click', () => exports.toggle());
        });

        // close side nav on component click
        Array.prototype.forEach.call(app.Synergy(options.name).component('close'), close => {
            close.addEventListener('click', () => exports.hide());
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
        el.component('dropdown_toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                toggle.nextSibling.classList.toggle('collapsed');
            });
        });

        exports.show = () => exports.toggle('show');
        exports.hide = () => exports.toggle('hide');

        exports.toggle = operator => toggleSideNav(el, operator, options);

    }, defaults, custom, app.evalConfig);

    app.config['side-nav'] = app.parse(defaults['side-nav'], custom);

    return exports;
}

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
    if (options.overlay) {
        app.overlay(options.overlay).toggle('overlaySideNav');
        // toggle event handler to hide side-nav on overlay click
        app.Synergy(options.overlay).query[0][listener]('click', exports.hide);
    }
}

/**
 * Create Dropdown Toggle Icon
 * 
 * @access private
 * 
 * @param {Object} options - the module options to use
 */
function sideNavDropdownIcon(options) {
    const toggle = document.createElement('div');
    const icon = document.createElement('i');

    toggle.classList.add(`${options.name}_dropdown_toggle`);
    icon.classList.add('fa', options.collapsible.icon);

    toggle.appendChild(icon);

    return toggle;  
}