///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import * as app from '../../ui';
import config from './config.json';

// @TODO this doesn't seem to work
app.theme  = config.app;

export default function theme() {

    ///************************************************************
    /// Utilities
    ///************************************************************

    app.colors();
    app.grid();
    app.typography();
    app.core();

    ///************************************************************
    /// Elements
    ///************************************************************

    app.accordion();
    app.carousel();
    app.modal();
    app.overlay();
    app.progressBar();
    app.tabs();
    app.tooltips();

    ///************************************************************
    /// Objects
    ///************************************************************

    app.googleMap();
    app.header();
    app.preloader();
    app.scrollTop();
    //app.search();
    app.sideNav();

    ///************************************************************
    /// Export Options
    ///************************************************************
    
    window.APPUI.config = app.evalConfig(app.config);

}