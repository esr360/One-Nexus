///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

// Expose the app object
import * as app from './app';
// Export global app config
export { default as global } from './app.json';
// Instantiate the configuration object 
export const config = {};

// Vendor
//*****************************************************************

//import Synergy  from 'Synergy';
import Synergy    from '../../../Synergy/src/js/synergy';
import deepextend from 'deep-extend';
import Flickity   from 'flickity';

export { Synergy, deepextend, Flickity };

// Modules
//*****************************************************************

// Elements
import { accordion   } from './modules/elements/accordions/accordions';
import { carousel    } from './modules/elements/carousels/carousels';
import { modal       } from './modules/elements/modals/modals';
import { progressBar } from './modules/elements/progress-bars/progress-bars';
import { tabs        } from './modules/elements/tabs/tabs';
import { tooltips    } from './modules/elements/tooltips/tooltips';

// Objects
import { googleMap   } from './modules/objects/google-map/google-map';
import { header      } from './modules/objects/header/header';
import { overlay     } from './modules/objects/overlay/overlay';
import { preloader   } from './modules/objects/preloader/preloader';
import { scrollTop   } from './modules/objects/scroll-top/scroll-top';
import { search      } from './modules/objects/search/search';
import { sideNav     } from './modules/objects/side-nav/side-nav';

// Utilities
import { colors      } from './modules/utilities/colors/colors';
import { core        } from './modules/utilities/core/core';
import { grid        } from './modules/utilities/grid/grid';
import { typography  } from './modules/utilities/typography/typography';

export { 
    accordion, carousel, modal, progressBar, tabs, tooltips, 
    googleMap, header, overlay, preloader, scrollTop, search, sideNav,
    colors, core, grid, typography
};

// Tools
//*****************************************************************

import { custom          } from './tools/js/app.custom';
import { evalConfig      } from './tools/js/app.evalConfig';
import { inViewport      } from './tools/js/app.inViewport';
import { isValidSelector } from './tools/js/app.isValidSelector';
import { media           } from './tools/js/app.media';
import { parents         } from './tools/js/app.parents';
import { parse           } from './tools/js/app.parse';
import { smoothScroll    } from './tools/js/app.smoothScroll';
import { scrollSpy       } from './tools/js/app.scrollSpy';

export { 
    custom, evalConfig, inViewport, isValidSelector, media, parents, 
    parse, smoothScroll, scrollSpy
};

// Attach `app` to the Window object
window.APPUI = window.APPUI || app;

// Global Methods
//*****************************************************************

Element.prototype.component = function(component, set) {
    return app.Synergy(this).component(component, set, this);
};

Element.prototype.modifier = function(modifier, set) {
    return app.Synergy(this).modifier(modifier, set, this);
};

Element.prototype.parents = function(selector) {
	return app.parents(this, selector);
};

// App-Level Functions
//*****************************************************************

smoothScroll();