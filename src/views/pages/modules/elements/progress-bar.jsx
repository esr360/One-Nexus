import Base from '../../../layouts/base';

export default props => (
    <Base {...props.config.app.views}>
        <ProgressBar max={100} value={70} />
    </Base>
);