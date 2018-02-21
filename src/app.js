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

// React
//*****************************************************************

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { HashLink as Link } from 'react-router-hash-link';
import { StaticRouter, HashRouter, Switch, Route } from 'react-router-dom';
export { Link, StaticRouter, HashRouter, Switch, Route };

// Theme/UI
//*****************************************************************

import UI from './ui/ui';

// Synergy
//*****************************************************************

import Module from '../../../Synergy/src/js/module.jsx';
import { default as Component, Group, Wrapper } from '../../../Synergy/src/js/component.jsx';

window.Module = Module;
window.Component = Component;

// UI React Components
//*****************************************************************

// Elements
export { default as Accordion } from './ui/modules/elements/accordion/accordion.jsx';
export { default as Alert } from './ui/modules/elements/alert/alert.jsx';
export { default as Button } from './ui/modules/elements/buttons/button.jsx';
export { default as Heading } from './ui/modules/elements/heading/heading.jsx';
export { default as List, ListItem } from './ui/modules/elements/lists/list.jsx';
export { default as Paragraph } from './ui/modules/elements/paragraph/paragraph.jsx';
export { default as Table } from './ui/modules/elements/tables/table.jsx';
export { default as Well } from './ui/modules/elements/wells/well.jsx';

// Objects
export { Header } from './ui/modules/objects/header/header.jsx';
export { Logo } from './ui/modules/objects/logo/logo.jsx';
export { Navigation } from './ui/modules/objects/navigation/navigation.jsx';

// Views
//*****************************************************************

// Tools
export { default as SyntaxHighlighter } from './views/tools/syntaxHighlighter.jsx';
export { default as Section } from './views/tools/section.jsx';

// Layouts
import Base from './views/layouts/base.jsx';

export const layouts = { 
    Base
};

// Pages
import Index from './views/pages/index.jsx';
import Accordion from './views/pages/modules/elements/accordion.jsx';
import Alert from './views/pages/modules/elements/alert.jsx';

export const pages = {
    Index, 
    Accordion,
    Alert
}

// Render App
//*****************************************************************

import App from './app.jsx';
import { Core } from './views/core.jsx';

// Render on the server for static pages
export default locals => ReactDOMServer.renderToStaticMarkup(
    <StaticRouter location={locals.path} context={{}}>
        <Core styles={true}><App data={config.app.views} /></Core>
    </StaticRouter>
);

// Render on the client for standard React app
if (process.env.APP_ENV === 'web') {
    UI(config.app.ui);

    //ReactDOM.render(<HashRouter><App data={config.app.views} /></HashRouter>, app)
    ReactDOM.render(<HashRouter><App data={config.app.views} /></HashRouter>, app, () => UI(config.app.ui))
}

// Call the UI function once the react app has loaded
if (process.env.APP_ENV === 'node') {
    var ReactDOMLoaded = setInterval(() => {
        if (document.getElementById('app') !== '') {
            UI(config.app.ui);
    
            clearInterval(ReactDOMLoaded);
        }
    }, 100);
}