import ReactDOMServer from 'react-dom/server';

export class Html extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>My Static Site</title>
                </head>
                <body>
                    <div id='app'>{this.props.children}</div>
                    <script type="text/javascript" src='assets/scripts/app.js'></script>
                </body> 
            </html>
        )
    }
}

export default props => ReactDOMServer.renderToStaticMarkup(<Html {...props} />);