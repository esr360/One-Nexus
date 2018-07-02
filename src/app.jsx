import * as app from './app';
import { Switch, Route } from 'react-router-dom';

// Stylesheet
if (process.env.APP_ENV === 'web') {
    require('./app.scss');
}

// App JSX Component
const App = ({ theme }) => {
    window.theme = theme;

    return (
        <Switch>
            <Route path='/' exact component={app.pages.Index} />
            <Route path='/accordion' component={app.pages.Accordion} />
            <Route path='/alert' component={app.pages.Alert} />
            <Route path='/blockquote' component={app.pages.Blockquote} />
            <Route path='/button' component={app.pages.Button} />
            <Route path='/carousel' component={app.pages.Carousel} />
            <Route path='/form' component={app.pages.Form} />
            <Route path='/heading' component={app.pages.Heading} />
            <Route path='/image' component={app.pages.Image} />
            <Route path='/list' component={app.pages.List} />
            <Route path='/modal' component={app.pages.Modal} />
            {/*<Route path='/paragraph' component={app.pages.Paragraph} />
            <Route path='/progress-bar' component={app.pages.ProgressBar} />
            <Route path='/table' component={app.pages.Table} />
            <Route path='/tabs' component={app.pages.Tabs} />
            <Route path='/tooltip' component={app.pages.Tooltip} />
            <Route path='/well' component={app.pages.Well} /> */}
        </Switch>
    )
}

export default App;