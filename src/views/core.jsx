import React from 'react';
import ReactDOMServer from 'react-dom/server';

export const Core = props => (
  <html>
    <head>
      <title>Title</title>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/js/all.min.js" />
    </head>
    <body>
      <div id='app' className='render'>{props.children}</div>

      {props.styles && <link href='assets/styles/app.css' rel='stylesheet' />}

      <script type="text/javascript" src='app.js'></script>
    </body>
  </html>
);

export default props => ReactDOMServer.renderToStaticMarkup(<Core { ...props } />);