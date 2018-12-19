///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import './app.scss';
import config from './app.json';

// Vendor
//*****************************************************************

import { HashLink as Link } from 'react-router-hash-link';
import PAX5 from '../../../PAX5/PAX5/src/pax5';
import '../../../Synergy/Synergy/src/synergy';

// UI
//*****************************************************************

import * as tools from './ui/tools'
import * as foundation from './ui/foundation';
import * as modules from './ui/modules';
import * as themes from './ui/themes';

// Views
//*****************************************************************

import * as pages from './views/pages';

// DOM/Window Preparation
//*****************************************************************

Object.assign(window, { PAX5, Link });

// Render App
//*****************************************************************

Synergy.app.defaultProps = {
    theme: Synergy.config(themes[config.app.ui.theme].theme, config.app.ui),
    modules: modules,
    ui: { ...tools, ...foundation },
    pages: pages,
    config: config
}

const container = document.getElementById('app');

if (container && container.classList.contains('render')) {
    ReactDOM.render(<Synergy.app />, container);
}

export default Synergy.app;