import Base from '../../../layouts/base';

export default props => (
    <Base {...props.config.app.views}>
        <Well>Well</Well>

        <Well dark>Well</Well>

        <Well round>Well</Well>

        <Well border>Well</Well>
    </Base>
);