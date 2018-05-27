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

// import { Module } from 'Synergy';
// import { Component, Group, Wrapper } from 'Synergy';
import { default as Module } from '../../../Synergy/src/js/module.jsx';
import { default as Component, Group, Wrapper } from '../../../Synergy/src/js/component.jsx';

window.Module = Module;
window.Component = Component;
window.Group = Group;
window.Wrapper = Wrapper;

// Kayzen-GS
//*****************************************************************

import { Row, Column } from '../../../Kayzen-GS/src/js/index.js';

window.Row = Row; 
window.Column = Column;

// UI React Components
//*****************************************************************

// Elements
export { default as Accordion } from './ui/modules/elements/accordion/accordion.jsx';
export { default as Alert } from './ui/modules/elements/alert/alert.jsx';
export { default as Blockquote } from './ui/modules/elements/blockquote/blockquote.jsx';
import { default as Button } from './ui/modules/elements/button/button.jsx';
export { default as Carousel } from './ui/modules/elements/carousel/carousel.jsx';
export { default as Form } from './ui/modules/elements/form/form.jsx';
export { default as Heading } from './ui/modules/elements/heading/heading.jsx';
export { default as Image } from './ui/modules/elements/image/image.jsx';
export { default as List } from './ui/modules/elements/list/list.jsx';
import { default as Modal } from './ui/modules/elements/modal/modal.jsx';
export { default as Paragraph } from './ui/modules/elements/paragraph/paragraph.jsx';
export { default as Table } from './ui/modules/elements/tables/table.jsx';
export { default as Well } from './ui/modules/elements/wells/well.jsx';

export {
    Button,
    Modal
}

window.Button = Button;
window.Modal = Modal;

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
import Blockquote from './views/pages/modules/elements/blockquote.jsx';
import _Button from './views/pages/modules/elements/button.jsx';
import Carousel from './views/pages/modules/elements/carousel.jsx';
import Form from './views/pages/modules/elements/form.jsx';
import Heading from './views/pages/modules/elements/heading.jsx';
import Image from './views/pages/modules/elements/image.jsx';
import List from './views/pages/modules/elements/list.jsx';
import _Modal from './views/pages/modules/elements/modal.jsx';
import Paragraph from './views/pages/modules/elements/paragraph.jsx';
import ProgressBar from './views/pages/modules/elements/progress-bar.jsx';
import Table from './views/pages/modules/elements/table.jsx';
import Tabs from './views/pages/modules/elements/tabs.jsx';
import Tooltip from './views/pages/modules/elements/tooltip.jsx';
import Well from './views/pages/modules/elements/well.jsx';

export const pages = {
    Index, 
    Accordion,
    Alert,
    Blockquote,
    Button: _Button,
    Carousel,
    Form,
    Heading,
    Image,
    List,
    Modal: _Modal,
    Paragraph,
    ProgressBar,
    Table,
    Tabs,
    Tooltip,
    Well
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

    ReactDOM.render(<HashRouter><App data={config.app.views} /></HashRouter>, app)
    //ReactDOM.render(<HashRouter><App data={config.app.views} /></HashRouter>, app, () => UI(config.app.ui));

    // @TODO add BLL logic option
    // if (window.BLL) BLL(app)
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