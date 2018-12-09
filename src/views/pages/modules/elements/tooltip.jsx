import Base from '../../../layouts/base';

export default props => (
    <Base {...props.config.app.views}>
        Lorem Ipsum <Tooltip right content='tooltip content'>Tooltip</Tooltip> dolor sim amet
    </Base>
);