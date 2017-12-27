///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import App from './app.jsx';

// React
//*****************************************************************

import { HashRouter, Switch, Route, Link } from 'react-router-dom';
export { HashRouter, Switch, Route, Link };

// Synergy
//*****************************************************************

import { Module, Component } from '../../../Synergy/src/js/synergy';

[window.Module, window.Component] = [Module, Component];

// Theme/UI
//*****************************************************************

import UI from './ui/themes/One-Nexus/one-nexus';
export { UI };

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
    <HashRouter><App /></HashRouter>, document.getElementById('app'), UI
);