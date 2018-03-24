import * as app from '../../../../app';

export default class Carousel extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <div class="carousel">
                    <img src="https://picsum.photos/640/480" />
                    <img src="https://picsum.photos/640/480" />
                    <img src="https://picsum.photos/640/480" />
                    <img src="https://picsum.photos/640/480" />
                    <img src="https://picsum.photos/640/480" />
                </div>

            </app.layouts.Base>
        )
    }
}