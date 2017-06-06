//*****************************************************************
// One-Nexus - A front-end framework for creating modular and 
// configurable UI components - https://github.com/esr360/One-Nexus
//*****************************************************************

// Vendor
//*****************************************************************

//import synergy from '../node_modules/Synergy/src/js/synergy';
import synergy from '../../../Synergy/src/js/synergy';
import Flickity from 'flickity';

// Elements
//*****************************************************************

import { accordion } from './modules/elements/accordions/accordions';
import { carousel } from './modules/elements/carousels/carousels';

// Config
//*****************************************************************

const config = {};

// Export
//*****************************************************************

export {
    config, synergy, Flickity, accordion, carousel
}