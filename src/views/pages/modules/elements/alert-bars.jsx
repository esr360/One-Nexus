import * as app from '../../../../app';

export default class AlertBars extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>
                <app.Alert alert='error'>Alert Bar 1</app.Alert>
                <app.Alert modifiers={['jizz']} alert='success' icon={['times', 'right']}>Alert Bar 2</app.Alert>
                <app.Alert alert='help'>Alert Bar 3</app.Alert>
                <app.Alert alert='info'>Alert Bar 4</app.Alert>
            </app.layouts.Base>
        )
    }
}