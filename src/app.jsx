import * as app from './app';

import React from 'react';
import ReactDOM from 'react-dom';

[window.React, window.ReactDOM] = [React, ReactDOM];

export default class App extends React.Component {
    render() {
        window.addEventListener('hashchange', app.UI, false);

        return (
            <app.Switch>
                <app.Route path='/' exact component={app.pages.Index} />
                <app.Route path='/accordions' component={app.pages.Accordions} />
                <app.Route path='/alert-bars' component={app.pages.AlertBars} />
            </app.Switch>
        )
    }
}