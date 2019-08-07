///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import './app.scss';
import { app as config } from './app.json';

// Vendor
//*****************************************************************

import React, { useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import PAX5 from '../../../PAX5/PAX5/src/pax5';
// import '../../../Synergy/Synergy/src/synergy';
import '../../../Synergy/Synergy/dist/synergy';

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

Object.assign(window, { PAX5, Link, useState });

// Render App
//*****************************************************************

const App = ({ modules, globals, theme, pages, config }) => {
  Synergy.theme(modules, theme, globals, config);

  return (
    <HashRouter ref={() => window.appLoaded = true}>
      <Provider theme={theme}>
        <React.Fragment>
          <Route path='/' exact render={() => <pages.index config={config} />} />

          {Object.keys(pages).map((page, index) => <Route key={index} path={`/${page}`} render={() => {
            const Page = pages[page];

            return <Page config={config} />;
          }} />)}
        </React.Fragment>
      </Provider>
    </HashRouter>
  );
}

App.defaultProps = {
  theme: themes[config.options.THEME_NAME],
  modules: modules,
  globals: { ...tools, ...foundation },
  pages: pages,
  config: config
}

export default App;