///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

// Theme
import UI from './ui/themes/One-Nexus/one-nexus';

export { UI };

// React Router
//*****************************************************************

import { 
    HashRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export { 
    HashRouter,
    Switch,
    Route,
    Link
};

// UI Components
//*****************************************************************

export { Accordion } from './ui/modules/elements/accordions/accordions.jsx';

// Views
//*****************************************************************

import Index from './views/index.jsx';
import Accordions from './views/modules/elements/accordions.jsx';

export { 
    Index,
    Accordions
};

// Render DOM
//*****************************************************************

import App from './app.jsx';

ReactDOM.render(
    <HashRouter><App /></HashRouter>, document.getElementById('app'), UI
);