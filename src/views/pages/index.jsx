import * as app from '../../app';

export default class Index extends React.Component {
    render() {
        return (
            <app.layouts.Core {...app.config.app.views}>
            </app.layouts.Core>
        )
    }
}