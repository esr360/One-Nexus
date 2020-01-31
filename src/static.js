import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './app';
import { Core } from './views/core';

export default locals => ReactDOMServer.renderToStaticMarkup(
  <StaticRouter location={locals.path} context={{}}>
      <Core styles={true}><App /></Core>
  </StaticRouter>
);