///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import initialConfig from './app.json';

export const config = JSON.parse(
    JSON.stringify(initialConfig).replace(/"'/g,'"').replace(/'"/g,'"')
);

//*****************************************************************

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Link, StaticRouter, HashRouter, Switch, Route } from 'react-router-dom';
export { Link, StaticRouter, HashRouter, Switch, Route };

// Theme/UI
//*****************************************************************

import UI from './ui/ui';
export { UI };

// Synergy
//*****************************************************************

import { Module, Component } from 'Synergy';

[window.Module, window.Component] = [Module, Component];

// UI React Components
//*****************************************************************

// Elements
export { Accordion } from './ui/modules/elements/accordions/accordions.jsx';
export { AlertBar } from './ui/modules/elements/alert-bars/alert-bars.jsx';

// Objects
export { Header } from './ui/modules/objects/header/header.jsx';
export { Logo } from './ui/modules/objects/logo/logo.jsx';
export { Navigation } from './ui/modules/objects/navigation/navigation.jsx';

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

//*****************************************************************

import App from './app.jsx';
import { Html } from './views/layouts/foo.jsx';

// Call the UI function on the React DOM once it has loaded
var ReactDOMLoaded = setInterval(() => {
    if (document.getElementById('app') !== '') {
        UI(config.app.ui);

        clearInterval(ReactDOMLoaded);
    }
}, 100);

export default locals => ReactDOMServer.renderToStaticMarkup(
    <StaticRouter location={locals.path} context={{}}>
        <Html styles={true}><App data={config.app.views} /></Html>
    </StaticRouter>
);

if (process.env.APP_ENV === 'web') {
    ReactDOM.render(
        <HashRouter><App data={config.app.views} /></HashRouter>, document.getElementById('app')
    )
}