import * as app from '../../../../app';

export default class Image extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <app.Image src="https://picsum.photos/640/480" />

                <app.Image center-xy src="https://picsum.photos/640/480" />

            </app.layouts.Base>
        )
    }
}