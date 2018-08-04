///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import config from './app.json';

// Vendor
//*****************************************************************

// React
import { HashLink as Link } from 'react-router-hash-link';
import { HashRouter, Switch, Route } from 'react-router-dom';

// Synergy
//import * as Synergy from 'Synergy';
import * as Synergy from '../../../Synergy/src/index.js';
//import * as Synergy from '../../../Synergy/dist/synergy.js';

// PAX5
import PAX5 from '../../../pax5/repo/src/pax5';

// Tools
//*****************************************************************

import verticalRhythm from './ui/tools/styles/verticalRhythm.jss';

// Modules
//*****************************************************************

// Utilities
import {
    colors,
    grid
} from './ui/modules/utilities';

// Elements
import { 
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
    ProgressBar,
    Table,
    Tabs,
    Tooltip,
    Well
} from './ui/modules/elements';

// Objects
import {
    Billboard,
    Breadcrumb,
    Footer,
    Header,
    Logo,
    Navigation,
    Overlay,
    Preloader,
    Search,
    SideNav 
} from './ui/modules/objects';

// Themes
//*****************************************************************

import one_nexus from './ui/themes/one_nexus.json';

// Views
//*****************************************************************

// Layouts
import Base from './views/layouts/base.jsx';

// Pages
import Index from './views/pages/index.jsx';
import accordions from './views/pages/modules/elements/accordion.jsx';
import alerts from './views/pages/modules/elements/alert.jsx';
import blockquotes from './views/pages/modules/elements/blockquote.jsx';
import buttons from './views/pages/modules/elements/button.jsx';
import carousels from './views/pages/modules/elements/carousel.jsx';
import forms from './views/pages/modules/elements/form.jsx';
import headings from './views/pages/modules/elements/heading.jsx';
import images from './views/pages/modules/elements/image.jsx';
import lists from './views/pages/modules/elements/list.jsx';
import modals from './views/pages/modules/elements/modal.jsx';
import paragraphs from './views/pages/modules/elements/paragraph.jsx';
import progressBars from './views/pages/modules/elements/progress-bar.jsx';
import tables from './views/pages/modules/elements/table.jsx';
import tabs from './views/pages/modules/elements/tabs.jsx';
import tooltips from './views/pages/modules/elements/tooltip.jsx';
import wells from './views/pages/modules/elements/well.jsx';

// Exports
//*****************************************************************

const tools = {
    verticalRhythm
}

const utilities = {
    colors,
    grid
}

const elements = {
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
    ProgressBar,
    Table,
    Tabs,
    Tooltip,
    Well 
}

const objects = {
    Billboard,
    Breadcrumb,
    Footer,
    Header,
    Logo,
    Navigation,
    Overlay,
    Preloader,
    Search,
    SideNav    
}

const modules = {
    ...utilities,
    ...elements,
    ...objects
}

const layouts = { 
    Base
};

export { 
    config,
    Link,
    layouts
};

// DOM/Window Preparation
//*****************************************************************

Object.assign(window, Synergy, { 
    PAX5,
    theme: {
        ...tools,
        ...utilities
    },
    ...modules
});

window.Synergy.CssClassProps = config.app.ui['css-class-props'];

Element.prototype.component = function(component, operator) {
    return Synergy.Synergy(this).component(component, operator, this);
};

Element.prototype.modifier = function(modifier, operator) {
    return Synergy.Synergy(this).modifier(modifier, operator, this);
};

// Render App
//*****************************************************************

// App JSX Component
const App = ({ theme }) => {
    window.theme = Synergy.Module.config(window.theme, theme);

    if (process.env.APP_ENV === 'web') {
        require('./app.scss');
    }

    return (
        <Switch>
            <Route path='/' exact component={Index} />
            <Route path='/accordion' component={accordions} />
            <Route path='/alert' component={alerts} />
            <Route path='/blockquote' component={blockquotes} />
            <Route path='/button' component={buttons} />
            <Route path='/carousel' component={carousels} />
            <Route path='/form' component={forms} />
            <Route path='/heading' component={headings} />
            <Route path='/image' component={images} />
            <Route path='/list' component={lists} />
            <Route path='/modal' component={modals} />
        </Switch>
    );
}

ReactDOM.render(<HashRouter><App theme={one_nexus.theme} /></HashRouter>, app);