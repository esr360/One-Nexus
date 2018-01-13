import ReactDOMServer from 'react-dom/server';

export class Core extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Title</title>
                </head>
                <body>
                    <div id='app'>{this.props.children}</div>

                    {this.props.styles && <link href='assets/styles/app.css' rel='stylesheet' />}

                    <script type="text/javascript" src='assets/scripts/app.js'></script>

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                </body> 
            </html>
        )
    }
}

export default props => ReactDOMServer.renderToStaticMarkup(<Core />);