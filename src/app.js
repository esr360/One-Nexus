///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import config from './app.json';

// Tools/Utilities
//*****************************************************************

import parents from './ui/tools/js/app.parents';

// React
import { HashLink as Link } from 'react-router-hash-link';
import { StaticRouter, HashRouter, Switch, Route } from 'react-router-dom';

// Flickity
import Flickity from 'flickity';

// Synergy
//import * as Synergy from 'Synergy';
import * as Synergy from '../../../Synergy/src/index.js';
//import * as Synergy from '../../../Synergy/dist/synergy.js';

// Kayzen-GS
//import * as KayzenGS from '../../../Kayzen-GS/dist/kayzen-gs';
import * as KayzenGS from 'kayzen-gs';

// UI React Components
//*****************************************************************

// Elements
import Accordion from './ui/modules/elements/accordion/accordion.jsx';
import Alert from './ui/modules/elements/alert/alert.jsx';
import Blockquote from './ui/modules/elements/blockquote/blockquote.jsx';
import Button from './ui/modules/elements/button/button.jsx';
import Carousel from './ui/modules/elements/carousel/carousel.jsx';
import Form from './ui/modules/elements/form/form.jsx';
import Heading from './ui/modules/elements/heading/heading.jsx';
import Image from './ui/modules/elements/image/image.jsx';
import List from './ui/modules/elements/list/list.jsx';
import Modal from './ui/modules/elements/modal/modal.jsx';
import Paragraph from './ui/modules/elements/paragraph/paragraph.jsx';
import Table from './ui/modules/elements/tables/table.jsx';
import Well from './ui/modules/elements/wells/well.jsx';

// Objects
import Header from './ui/modules/objects/header/header.jsx';
import Logo from './ui/modules/objects/logo/logo.jsx';
import Navigation from './ui/modules/objects/navigation/navigation.jsx';

// Themes
//*****************************************************************

import one_nexus from './ui/themes/One-Nexus/theme.json';

// Views
//*****************************************************************

// Tools
import SyntaxHighlighter from './views/tools/syntaxHighlighter.jsx';
import Section from './views/tools/section.jsx';

// Layouts
import Layout_Base from './views/layouts/base.jsx';

// Pages
import Index from './views/pages/index.jsx';
import Page_Accordion from './views/pages/modules/elements/accordion.jsx';
import Page_Alert from './views/pages/modules/elements/alert.jsx';
import Page_Blockquote from './views/pages/modules/elements/blockquote.jsx';
import Page_Button from './views/pages/modules/elements/button.jsx';
import Page_Carousel from './views/pages/modules/elements/carousel.jsx';
import Page_Form from './views/pages/modules/elements/form.jsx';
import Page_Heading from './views/pages/modules/elements/heading.jsx';
import Page_Image from './views/pages/modules/elements/image.jsx';
import Page_List from './views/pages/modules/elements/list.jsx';
import Page_Modal from './views/pages/modules/elements/modal.jsx';
import Page_Paragraph from './views/pages/modules/elements/paragraph.jsx';
import Page_ProgressBar from './views/pages/modules/elements/progress-bar.jsx';
import Page_Table from './views/pages/modules/elements/table.jsx';
import Page_Tabs from './views/pages/modules/elements/tabs.jsx';
import Page_Tooltip from './views/pages/modules/elements/tooltip.jsx';
import Page_Well from './views/pages/modules/elements/well.jsx';

// Exports
//*****************************************************************

const modules = {
    Index, 
    Accordion,
    Alert,
    Blockquote,
    Button,
    Carousel,
    Form,
    Heading,
    Image,
    List,
    Modal,
    Paragraph,
    Table,
    Header,
    Logo,
    Navigation
}

const layouts = { 
    Base: Layout_Base
};

export { 
    config, 
    Link, 
    StaticRouter, 
    HashRouter, 
    Switch, 
    Route, 
    SyntaxHighlighter,
    Section,
    modules,
    layouts
};

// DOM/Window Preparation
//*****************************************************************

Object.assign(window, KayzenGS, Synergy, { ...modules });

window.Synergy.CssClassProps = config.app.ui['css-class-props'];

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

// App JSX Component
const App = ({ theme }) => {
    window.theme = theme;

    if (process.env.APP_ENV === 'web') {
        require('./app.scss');
    }

    return (
        <Switch>
            <Route path='/' exact component={Index} />
            <Route path='/accordion' component={Page_Accordion} />
            <Route path='/alert' component={Page_Alert} />
            <Route path='/blockquote' component={Page_Blockquote} />
            <Route path='/button' component={Page_Button} />
            <Route path='/carousel' component={Page_Carousel} />
            <Route path='/form' component={Page_Form} />
            <Route path='/heading' component={Page_Heading} />
            <Route path='/image' component={Page_Image} />
            <Route path='/list' component={Page_List} />
            <Route path='/modal' component={Page_Modal} />
        </Switch>
    );
}

ReactDOM.render(<HashRouter><App theme={one_nexus.theme} /></HashRouter>, app);