import * as app from '../../app';

export default class Core extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    <div>
                        <app.Link to='/'>Home</app.Link>
                        <app.Link to='/accordions'>Accordions</app.Link>
                        <app.Link to='/alert-bars'>Alert Bars</app.Link>
                    </div>

                    {this.props.children}
                </div>
            </main>
        )
    }
}