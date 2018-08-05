import * as app from '../../../../app';
import Base from '../../../layouts/base';

export default class Image extends React.Component {
    render() {
        return (
            <Base {...app.config.app.views}>

                <app.Image src="https://picsum.photos/640/480" />

                <app.Image center-xy src="https://picsum.photos/640/480" />

            </Base>
        )
    }
}