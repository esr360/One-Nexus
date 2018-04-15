import * as app from '../../../../app';

export default class Heading extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <app.Heading size='4' heading='2'>Signup Form</app.Heading>

            </app.layouts.Base>
        )
    }
}