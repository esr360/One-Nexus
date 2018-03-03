import * as app from '../../../../app';

const panels = [
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: <div>potato</div>}
    //{title: 'fizz', content: '<div>potato</div>'}
];

export default class Accordions extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>
                <app.Accordion panels={panels} />
                <app.Accordion panels={panels} modifiers={['foo', 'keepOpen']} />
            </app.layouts.Base>
        )
    }
}