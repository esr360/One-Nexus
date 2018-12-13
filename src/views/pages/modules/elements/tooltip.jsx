import Base from '../../../layouts/base';

export default props => (
    <Base {...props.config.app.views}>
        <Paragraph>Lorem Ipsum <Tooltip top content='tooltip content lorem ipsum dolor sit'>Tooltip</Tooltip> dolor sim amet</Paragraph>
        <Paragraph>Lorem Ipsum <Tooltip bottom content='tooltip'>Tooltip</Tooltip> dolor sim amet</Paragraph>
        <Paragraph>Lorem Ipsum <Tooltip left content='tooltip content lorem ipsum dolor sit'>Tooltip</Tooltip> dolor sim amet</Paragraph>
        <Paragraph>Lorem Ipsum <Tooltip right content='tooltip'>Tooltip</Tooltip> dolor sim amet</Paragraph>
    </Base>
);