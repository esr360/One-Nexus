import Base from '../../../layouts/base';

const Carousels = props => (
    <Base {...props.config.app.views}>
        <Carousel config={{
            slide: {
                background: 'red'
            }
        }} slides={[
            <img src="https://picsum.photos/640/480" />,
            <img src="https://picsum.photos/640/480" />,
            <img src="https://picsum.photos/640/480" />
        ]} />

        <Carousel hide-navigation slides={[
            <img src="https://picsum.photos/640/480" />,
            <img src="https://picsum.photos/640/480" />,
            <img src="https://picsum.photos/640/480" />
        ]} />
    </Base>
);

export default Carousels;