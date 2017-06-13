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

app.accordion().open(2);

app.accordion(document.querySelector('.joojoo'));

app.carousel('carousel', config.app.carousels);