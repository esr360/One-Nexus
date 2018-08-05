import * as app from '../../../../app';
import Base from '../../../layouts/base';

export default class Carousel extends React.Component {
    render() {
        return (
            <Base {...app.config.app.views}>

                <div class="carousel">
                    <img src="https://picsum.photos/640/480" />
                    <img src="https://picsum.photos/640/480" />
                    <img src="https://picsum.photos/640/480" />
                    <img src="https://picsum.photos/640/480" />
                    <img src="https://picsum.photos/640/480" />
                </div>

                <app.Carousel slides={[
                    <img src="https://picsum.photos/640/480" />,
                    <img src="https://picsum.photos/640/480" />,
                    <img src="https://picsum.photos/640/480" />
                ]} />

            </Base>
        )
    }
}