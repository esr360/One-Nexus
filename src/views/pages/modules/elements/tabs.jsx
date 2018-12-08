import Base from '../../../layouts/base';

export default props => (
    <Base {...props.config.app.views}>
        <Tabs nav={{ round: true, full: true }} data={[
            {title: 'foo', content: 'bar', active: true},
            {title: 'fizz', content: 'buzz'}
        ]} />

        <Tabs content={{ glue: true }} data={[
            {title: <div><div>foo</div></div>, content: 'bar', active: true},
            {title: 'fizz', content: 'buzz'}
        ]} />
    </Base>
);