import * as app from '../../app';

const panels = [
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'},
];

const Index = () => (
    <app.layouts.Base {...app.config.app.views}>
        <Accordion panels={panels} />

        <Alert>This is a default alert</Alert>

        <Blockquote content='Lorem ipsum dolor sit amet' />

        <Button>Button</Button>

        <Carousel slides={[
            <img src="https://picsum.photos/640/480" />,
            <img src="https://picsum.photos/640/480" />,
            <img src="https://picsum.photos/640/480" />
        ]} />

        
    </app.layouts.Base>
);

export default Index;