///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import config from './app.json'
import App from './app.jsx';

// Theme/UI
//*****************************************************************

import { UI } from './ui/ui';
export { UI };

// React Router
//*****************************************************************

import { HashRouter, Link } from 'react-router-dom';
export { HashRouter, Link };

// Synergy
//*****************************************************************

import { Module, Component } from '../../../Synergy/src/js/synergy';

[window.Module, window.Component] = [Module, Component];

// UI React Components
//*****************************************************************

export { Accordion } from './ui/modules/elements/accordions/accordions.jsx';
export { AlertBar } from './ui/modules/elements/alert-bars/alert-bars.jsx';

// Views
//*****************************************************************

// Layouts
import Core from './views/layouts/core.jsx';

export const layouts = { Core };

// Pages
import Index from './views/pages/index.jsx';
import Accordions from './views/pages/modules/elements/accordions.jsx';
import AlertBars from './views/pages/modules/elements/alert-bars.jsx';

export const pages = {
    Index, 
    Accordions,
    AlertBars
 }

// Render DOM
//*****************************************************************

ReactDOM.render(
    <HashRouter><App /></HashRouter>, app, () => UI(config.app.ui)
);