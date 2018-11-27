import ReactDOMServer from 'react-dom/server';

const Core = props => (
    <html>
        <head>
            <title>Title</title>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </head>
        <body>
            <div id='app' className='render'>{props.children}</div>

            {props.styles && <link href='assets/styles/app.css' rel='stylesheet' />}

            <script type="text/javascript" src='assets/scripts/app.js'></script>
        </body> 
    </html>
);

export { Core };

export default props => ReactDOMServer.renderToStaticMarkup(<Core { ...props } />);