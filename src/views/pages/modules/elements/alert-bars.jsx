import * as app from '../../../../app';

export default class AlertBars extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <app.Alert className='object' alert='error'>Alert Bar 1</app.Alert>

                <app.Alert className='object' alert='help' icon='desktop' close={true}>Alert Bar 2</app.Alert>

                <app.Alert className='object' modifiers={['fizz']} icon={['desktop', 'right']}>Alert Bar 3</app.Alert>

                <app.Alert className='object' bar alert='info'>Alert Bar 4</app.Alert>

                <app.Alert className='object' box alert='info' close>
                    <h4>Alert Bar 4</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                </app.Alert>

            </app.layouts.Base>
        )
    }
}