import * as app from '../../../../app';

export default class Accordions extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>
                <Accordion panels={[
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
            </app.layouts.Base>
        )
    }
}