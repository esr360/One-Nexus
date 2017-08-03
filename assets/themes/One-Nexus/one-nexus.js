///****************************************************************
/// One-Nexus
/// themes\One-Nexus\one-nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

///************************************************************
/// Elements
///************************************************************

app.accordion();
app.carousel();
app.modal();
app.progressBar();
app.siteOverlay();
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

app.core();

console.log(app.colors().color('greyscale', 'grey-1'));