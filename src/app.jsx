import * as app from './app';

export default class App extends React.Component {
    render() {
        window.addEventListener('hashchange', app.UI, false);

        return (
            <div>
                <app.Link to='/'>Home</app.Link>
                <app.Link to='/accordions'>Accordions</app.Link>
                <app.Switch>
                    <app.Route exact path='/' component={app.Index} />
                    <app.Route exact path='/accordions' component={app.Accordions} />
                </app.Switch>
            </div>
        )
    }
}