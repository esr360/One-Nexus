import App from './app';
import { AppContainer } from 'react-hot-loader';

const container = document.getElementById(App.defaultProps.config.options.appDomNodeID);

if (container && container.classList.contains('render')) {
    ReactDOM.render(<AppContainer><App /></AppContainer>, container);
}

if (module.hot) {
    module.hot.accept('./app.js', () => {
        const NextRootContainer = require('./app.js').default;
        ReactDOM.render(<AppContainer><NextRootContainer /></AppContainer>, container);
    });
}