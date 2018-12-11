import Base from '../../../layouts/base';

export default props => (
    <Base {...props.config.app.views}>
        <Tabs nav={{ round: true, full: true }} data={[
            {title: 'foo', content: 'bar', active: true},
            {title: 'fizz', content: 'buzz'},
            {title: 'fizz', content: 'qux'},
            {title: 'fizz', content: 'ting'}
        ]} />

        <Tabs nav={{ center: true, round: true }} data={[
            {title: 'foo', content: 'bar', active: true},
            {title: 'fizz', content: 'buzz'},
            {title: 'fizz', content: 'qux'},
            {title: 'fizz', content: 'ting'}
        ]} />

        <Tabs nav={{ right: true }} data={[
            {title: 'foo', content: 'bar', active: true},
            {title: 'fizz', content: 'buzz'},
            {title: 'fizz', content: 'qux'},
            {title: 'fizz', content: 'ting'}
        ]} />

        <Tabs data={[
            {title: <div><div>foo</div></div>, content: 'bar', active: true},
            {title: 'fizz', content: 'buzz'},
            {title: 'fizz', content: 'qux'},
            {title: 'fizz', content: 'ting'}
        ]} />
    </Base>
);