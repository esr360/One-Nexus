import React from 'react';
import ReactDOM from 'react-dom';
import { Module, Component } from 'Synergy';
import jsdom from 'jsdom-global';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';

jsdom().defaultView;

export default new StaticSiteGeneratorPlugin({
    crawl: true,
    globals: {
        window, 
        document,
        React, 
        ReactDOM,
        Module, 
        Component
    }
});