import React from 'react';
import ReactDOM from 'react-dom';
import jsdom from 'jsdom-global';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import { Module, Component } from 'Synergy';
// import PAX5 from '../../../../PAX5/PAX5/dist/pax5';

jsdom().defaultView;

export default new StaticSiteGeneratorPlugin({
  crawl: true,
  globals: {
    window, 
    document,
    React, 
    ReactDOM,
    Module, 
    Component,
    // PAX5
  }
});