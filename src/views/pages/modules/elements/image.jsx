import Base from '../../../layouts/base';

export default props => (
    <Base {...props.config.app.views}>
        <Image src="https://picsum.photos/640/480" />
    </Base>
);