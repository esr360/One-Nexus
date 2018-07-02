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

// Tools
//*****************************************************************

import { parents } from './ui/tools/js/app.parents';

// React
//*****************************************************************

import { HashLink as Link } from 'react-router-hash-link';
import { StaticRouter, HashRouter, Switch, Route } from 'react-router-dom';

export { Link, StaticRouter, HashRouter, Switch, Route };

// Synergy
//*****************************************************************

//import * as Synergy from 'Synergy';
import * as Synergy from '../../../Synergy/src/index.js';
//import * as Synergy from '../../../Synergy/dist/synergy.js';

window.Synergy = Synergy.Synergy;
window.Module = Synergy.Module;
window.Component = Synergy.Component;
window.Group = Synergy.Group;
window.Wrapper = Synergy.Wrapper;

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

// Themes
//*****************************************************************

import one_nexus from './ui/themes/One-Nexus/theme.json';

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

// Global Methods
//*****************************************************************

Element.prototype.component = function(component, operator) {
    return Synergy.Synergy(this).component(component, operator, this);
};

Element.prototype.modifier = function(modifier, operator) {
    return Synergy.Synergy(this).modifier(modifier, operator, this);
};

Element.prototype.parents = function(selector) {
    return parents(this, selector);
};

// Render App
//*****************************************************************

import App from './app.jsx';

ReactDOM.render(<HashRouter><App theme={one_nexus.theme} /></HashRouter>, app);