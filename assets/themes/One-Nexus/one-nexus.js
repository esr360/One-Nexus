///****************************************************************
/// One-Nexus
/// themes\One-Nexus\one-nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import * as app from '../../app';
import config from './config.json';

app.theme  = config.app;
app.config = app.evalConfig(app.config);

///************************************************************
/// Utilities
///************************************************************

app.colors();
app.core();
app.grid();
app.typography();

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
app.search();
app.sideNav();