import * as app from '../../../../app';

export default class Blockquote extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <app.Blockquote content='Lorem ipsum dolor sit amet' />
                <app.Blockquote callout content='Lorem ipsum dolor sit amet' />

                <app.Blockquote content='Lorem ipsum dolor sit amet' footer='Someone Famous' />
                <app.Blockquote callout content='Lorem ipsum dolor sit amet' footer='Someone Famous' />

                <app.Blockquote Alert Button content='Lorem ipsum dolor sit amet' />

            </app.layouts.Base>
        )
    }
}