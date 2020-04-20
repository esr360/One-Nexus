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

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import PAX5 from '../../../PAX5/PAX5/src/pax5';
import { Container, useTheme, useConfig, useUtils } from '../../../Synergy/Synergy/src';
// import { Container, useTheme, useConfig, useUtils} from '../../../Synergy/Synergy/dist/synergy';

// UI
//*****************************************************************

import * as utils from './ui/utils'
import * as modules from './ui/modules';
import * as themes from './ui/themes';

// Views
//*****************************************************************

import * as pages from './views/pages';
import * as layouts from './views/layouts';

// DOM/Window Preparation
//*****************************************************************

const { useState, useContext, Fragment } = React;

Object.assign(window, { 
  React, 
  ReactDOM,
  useState, 
  useContext, 
  Fragment,
  useTheme, 
  useConfig, 
  PAX5, 
  Link 
});

// Render App
//*****************************************************************

const App = ({ modules, theme, utils, pages, layouts, config }) => {
  return (
    <HashRouter>    
      <Container {...{ modules, theme, utils }}>
        <Route path='/' exact render={() => <pages.index config={config} />} />

        {Object.keys(pages).map((page, index) => (
          <Route key={index} path={`/${page}`} render={() => {
            const Page = pages[page];

            return <Page {...{ modules, theme, utils, layouts, config } } />;
          }} />
        ))}
      </Container>
    </HashRouter>
  );
}

App.defaultProps = {
  theme: themes[config.options.THEME_NAME],
  utils: utils,
  modules: modules,
  pages: pages,
  layouts: layouts,
  config: config
}

export default App;