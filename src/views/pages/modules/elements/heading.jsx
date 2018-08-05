import * as app from '../../../../app';
import Base from '../../../layouts/base';

export default class Heading extends React.Component {
    render() {
        return (
            <Base {...app.config.app.views}>

                <app.Heading size='4' heading='2'>Signup Form</app.Heading>

            </Base>
        )
    }
}