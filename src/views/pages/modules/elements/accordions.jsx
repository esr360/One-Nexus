import Base from '../../../layouts/base';

const Accordions = props => (
    <Base {...props.config.app.views}>

        <Accordion keep-open panels={[
            {title: 'foo', content: 'bar', active: true},
            {title: 'fizz', content: <div>potato</div>}
        ]} />

        <Accordion keepOpen panels={[
            {title: 'foo', content: 'bar'},
            {title: 'fizz', content: (
                <Accordion id='foo' panels={[
                    {title: 'foo', content: 'bar'},
                    {title: 'fizz', content: (
                        <Accordion modifiers={['keepOpen']} panels={[
                            {title: 'foo', content: 'bar'},
                            {title: 'fizz', content: <div>potato</div>}
                        ]} />
                    )}
                ]} />
            )},
            {title: 'fizz', content: <div>buzz</div>}
        ]} />
    </Base>
);

export default Accordions;