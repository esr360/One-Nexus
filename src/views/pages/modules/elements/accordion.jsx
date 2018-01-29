import * as app from '../../../../app';

const panels = [
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'},
];

export default class Accordions extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>
                <app.Accordion panels={panels} />
                <app.Accordion panels={panels} modifiers={['foo', 'bar']} />
            </app.layouts.Base>
        )
    }
}