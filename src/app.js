///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

// Expose the app object
import * as app from './app';
import App from './app.jsx';

// Theme
import Theme  from './ui/themes/One-Nexus/one-nexus';

export { Theme };

// React Router
//*****************************************************************

import { 
    HashRouter, Switch,  Route,  Link 
} from 'react-router-dom';

export { 
    HashRouter, Switch, Route, Link 
};

// UI Components
//*****************************************************************

export { Accordion } from './ui/modules/elements/accordions/accordions.jsx';

// Views
//*****************************************************************

import Index from './views/index.jsx';
import Accordions from './views/modules/elements/accordions.jsx';

export { Index, Accordions };

// Render DOM
//*****************************************************************

ReactDOM.render(
    <HashRouter><App /></HashRouter>, document.getElementById('app'), Theme
);