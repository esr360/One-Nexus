import * as app from '../../app';

const panels = [
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'},
];

const Index = () => (
    <app.layouts.Base {...app.config.app.views}>
        <Accordion panels={panels} />

        <Alert>This is a default alert</Alert>
    </app.layouts.Base>
);

export default Index;