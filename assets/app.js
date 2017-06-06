//*****************************************************************
// One-Nexus
// A powerful and responsive grid system.
// https://github.com/esr360/One-Nexus
//*****************************************************************

//import synergy from '../node_modules/Synergy/src/js/synergy';
import synergy from '../../../Synergy/src/js/synergy';
import Flickity from 'flickity';

//*****************************************************************
// Elements
//*****************************************************************

import { accordion } from './modules/elements/accordions/accordions';
import { carousel } from './modules/elements/carousels/carousels';

//*****************************************************************
// Config
//*****************************************************************

const config = {};

export {
    config, synergy, Flickity, accordion, carousel
}