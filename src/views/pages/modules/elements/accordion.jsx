import * as app from '../../../../app';

export default class Accordions extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>
                <app.Accordion panels={[
                    {title: 'foo', content: 'bar'},
                    {title: 'fizz', content: <div>potato</div>}
                ]} />

                <app.Accordion modifiers={['foo', 'keepOpen']} panels={[
                    {title: 'foo', content: 'bar'},
                    {title: 'fizz', content: (
                        <app.Accordion id='foo' panels={[
                            {title: 'foo', content: 'bar'},
                            {title: 'fizz', content: (
                                <app.Accordion modifiers={['keepOpen']} panels={[
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