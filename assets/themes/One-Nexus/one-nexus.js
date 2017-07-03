///****************************************************************
/// One Nexus
/// themes\One-Nexus\one-nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

app.accordion();

app.carousel();

app.modal();

app.progressBar();

app.siteOverlay();

app.tabs();

//$('.tabs').tabsFoo();

//$('.modal, [class*="modal-"]').modal();