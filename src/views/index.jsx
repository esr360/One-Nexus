import * as app from '../app';

const panels = [
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'},
];

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <app.Accordion panels={panels} />
                <app.Accordion panels={panels} modifiers={['foo', 'bar']} />
            </div>
        )
    }
}