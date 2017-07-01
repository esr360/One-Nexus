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

app.accordion(document.getElementById('foo')).close(1);

app.carousel();

app.modal();

app.progressBar();

app.siteOverlay();

//$('.modal, [class*="modal-"]').modal();