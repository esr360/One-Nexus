///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import * as UI from './ui';
import config from './ui.json';
export { config };

// Vendor
//*****************************************************************

import deepextend from 'deep-extend';
import Browser from 'detect-browser';
import Flickity from 'flickity';
import PubSub from 'pubsub-js';
//import { Synergy } from 'Synergy';
import Synergy from '../../../../Synergy/src/js/synergy';

export { 
    Browser,
    deepextend,
    Flickity,
    PubSub,
    Synergy
};

// Modules
//*****************************************************************

// Elements
import accordion from './modules/elements/accordion/accordion';
import alert from './modules/elements/alert/alert';
import carousel from './modules/elements/carousel/carousel';
import form from './modules/elements/form/form';
import { modal } from './modules/elements/modals/modals';
import { progressBar } from './modules/elements/progress-bars/progress-bars';
import { tabs } from './modules/elements/tabs/tabs';
import { tooltips } from './modules/elements/tooltips/tooltips';

// Objects
import { googleMap } from './modules/objects/google-map/google-map';
import { header } from './modules/objects/header/header';
import { overlay } from './modules/objects/overlay/overlay';
import { preloader } from './modules/objects/preloader/preloader';
import { scrollTop } from './modules/objects/scroll-top/scroll-top';
import { search } from './modules/objects/search/search';
import { sideNav } from './modules/objects/side-nav/side-nav';

// Utilities
import { colors } from './modules/utilities/colors/colors';
import { core } from './modules/utilities/core/core';
import { grid } from './modules/utilities/grid/grid';
import { typography  } from './modules/utilities/typography/typography';

export { 
    accordion,
    alert,
    carousel,
    form,
    modal,
    progressBar,
    tabs,
    tooltips,
    googleMap,
    header,
    overlay,
    preloader,
    scrollTop,
    search,
    sideNav,
    colors,
    core,
    grid,
    typography
};

// Tools
//*****************************************************************

import { custom } from './tools/js/app.custom';
import dynamicCallback from './tools/js/app.dynamicCallback';
import { evalConfig } from './tools/js/app.evalConfig';
import { formatThemeName } from './tools/js/app.formatThemeName';
import get from './tools/js/app.get';
import getTarget from './tools/js/app.getTarget';
import { inViewport } from './tools/js/app.inViewport';
import { isValidSelector } from './tools/js/app.isValidSelector';
import { media } from './tools/js/app.media';
import { parents } from './tools/js/app.parents';
import { parse } from './tools/js/app.parse';
import { smoothScroll } from './tools/js/app.smoothScroll';
import { scrollSpy } from './tools/js/app.scrollSpy';

export { 
    custom,
    dynamicCallback,
    evalConfig,
    formatThemeName,
    get,
    getTarget,
    inViewport,
    isValidSelector,
    media,
    parents,
    parse,
    smoothScroll,
    scrollSpy
};

// Theme
//*****************************************************************

export { default as One_Nexus } from './themes/One-Nexus/theme';

export default function(custom, callback) {
    config.ui = deepextend(config.ui, custom);
    
    UI[formatThemeName(config.ui.theme)](config.ui.modules);

    let modules = {};

    // get module config
    Object.entries(UI.config).forEach(entry => {
        modules[entry[0]] = { config: entry[1] }
    });

    // get module methods
    Object.keys(UI).map(entry => UI[entry]).forEach(method => {
        if (typeof method === 'function' && UI.config[method.name]) {
            modules[method.name].methods = method(UI.config[method.name]);
        }
    });

    window.UI = UI;

    window.Synergy.CssClassProps = config.ui['css-class-props'];
    window.Synergy.config = UI.config.ui;
    window.Synergy.modules = modules;
}

// Global Methods
//*****************************************************************

Element.prototype.component = function(component, operator) {
    return Synergy(this).component(component, operator, this);
};

Element.prototype.modifier = function(modifier, operator) {
    return Synergy(this).modifier(modifier, operator, this);
};

Element.prototype.parents = function(selector) {
    return parents(this, selector);
};