import * as app from '../app';

const panels = [
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'},
];

export default function index() {
    ReactDOM.render(
        <app.Accordion panels={panels} modifiers={['foo', 'bar']} />, document.getElementById('react')
    );
}