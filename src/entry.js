import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { AppContainer } from 'react-hot-loader';
import deepextend from 'deep-extend';

const container = document.getElementById('app');

// Dependencies
window.ONE_NEXUS = {
  deepextend
}

if (container && container.classList.contains('render')) {
  // ReactDOM.render(<AppContainer><App /></AppContainer>, container);
  ReactDOM.render(<App />, container);
}

// if (module.hot) {
//   module.hot.accept('./app.js', () => {
//     const NextRootContainer = require('./app.js').default;
//     ReactDOM.render(<AppContainer><NextRootContainer /></AppContainer>, container);
//   });
// }