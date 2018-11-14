///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import './app.scss';
import config from './app.json';

// Vendor
//*****************************************************************

import { HashLink as Link } from 'react-router-hash-link';
import { HashRouter, Switch, Route } from 'react-router-dom';
import PAX5 from '../../../pax5/repo/src/pax5';
import '../../../Synergy/src/synergy';

// UI
//*****************************************************************

import * as tools from './ui/tools'
import * as foundation from './ui/foundation';
import * as modules from './ui/modules';
import * as themes from './ui/themes';

// Views
//*****************************************************************

import * as pages from './views/pages';

// DOM/Window Preparation
//*****************************************************************

Object.assign(window, { PAX5, Link });

window.Synergy.CssClassProps = config.app.ui['css-class-props'];

// Render App
//*****************************************************************

const App = ({ modules, ui, theme }) => {
    Synergy.theme(modules, ui, theme);

    return (
        <Switch>
            <Route path='/' exact render={() => <pages.index config={config} />} />

            {Object.keys(pages).map((page, index) => <Route key={index} path={`/${page}`} render={() => {
                const Page = pages[page];

                return <Page config={config} />;
            }} />)}
        </Switch>
    );
}

ReactDOM.render((
    <HashRouter>
        <App 
            modules={modules}
            ui={{ ...tools, ...foundation }}
            theme={Synergy.config(themes[config.app.ui.theme].theme, config.app.ui)}
        />
    </HashRouter>
), document.getElementById('app'));

export default App;