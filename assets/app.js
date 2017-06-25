//*****************************************************************
// One-Nexus - A front-end framework for creating modular and 
// configurable UI components - https://github.com/esr360/One-Nexus
//*****************************************************************

import * as app from './app';

// Vendor
//*****************************************************************

import Synergy from '../../../Synergy/src/js/synergy';
//import Synergy  from 'synergy';
import Flickity from 'flickity';
import Sizzle from 'sizzle'; const $ = Sizzle;

export { Synergy, Flickity, $ }

// Modules
//*****************************************************************

import { accordion } from './modules/elements/accordions/accordions';
import { carousel  } from './modules/elements/carousels/carousels';
import { modal     } from './modules/elements/modals/modals';

export { accordion, carousel, modal }

// Config
//*****************************************************************

export const config = {};

// Get custom config from ./config.json
export function custom(module, custom) {
    return (typeof app.theme[module] !== 'undefined' && !custom) ? app.theme[module] : custom
}

// Tools
//*****************************************************************

Element.prototype.component = function(component, set) {
    return app.Synergy(this).component(component, set, this);
};

Element.prototype.modifier = function(modifier, set) {
    return app.Synergy(this).modifier(modifier, set, this);
};

function breakpoint(media, value) {
    return window.matchMedia(`(${media}: ${app.config.grid.breakpoints[value]})`).matches;
}