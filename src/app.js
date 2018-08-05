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
//import * as Synergy from '../../../Synergy/dist/synergy.js';
import * as Synergy from '../../../Synergy/src/index.js';

// PAX5
import PAX5 from '../../../pax5/repo/src/pax5';

// UI
//*****************************************************************

import * as tools from './ui/tools'
import * as foundation from './ui/foundation';

// Modules
import * as elements from './ui/modules/elements';
import * as objects from './ui/modules/objects';

// Themes
import one_nexus from './ui/themes/one_nexus.json';

// Views
//*****************************************************************

import * as pages from './views/pages';

// DOM/Window Preparation
//*****************************************************************

Object.assign(window, Synergy, { 
    PAX5,
    Link,
    theme: {
        ...tools,
        ...foundation
    },
    ...elements,
    ...objects
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

const App = ({ theme }) => {
    window.theme = Synergy.Module.config(window.theme, theme);

    if (process.env.APP_ENV === 'web') {
        require('./app.scss');
    }

    return (
        <Switch>
            <Route path='/' exact render={() => <pages.index config={config} />} />
            <Route path='/accordion' render={() => <pages.accordions config={config} />} />
            <Route path='/alert' render={() => <pages.alerts config={config} />} />
            <Route path='/blockquote' render={() => <pages.blockquotes config={config} />} />
            <Route path='/button' component={pages.buttons} />
            <Route path='/carousel' component={pages.carousels} />
            <Route path='/form' component={pages.forms} />
            <Route path='/heading' component={pages.headings} />
            <Route path='/image' component={pages.images} />
            <Route path='/list' component={pages.lists} />
            <Route path='/modal' component={pages.modals} />
        </Switch>
    );
}

ReactDOM.render(<HashRouter><App theme={one_nexus.theme} /></HashRouter>, app);