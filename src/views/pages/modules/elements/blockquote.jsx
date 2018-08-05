import * as app from '../../../../app';
import Base from '../../../layouts/base';

export default class Blockquote extends React.Component {
    render() {
        return (
            <Base {...app.config.app.views}>

                <app.Blockquote content='Lorem ipsum dolor sit amet' />

                <app.Blockquote callout content='Lorem ipsum dolor sit amet' />

                <app.Blockquote content='Lorem ipsum dolor sit amet' footer='Someone Famous' />

                <app.Blockquote callout content='Lorem ipsum dolor sit amet' footer='Someone Famous' />

                <app.Blockquote 
                    Alert='success' 
                    callout 
                    content='Lorem ipsum dolor sit amet' 
                    footer='Someone Famous'
                />

                <app.Blockquote content='Lorem ipsum dolor sit amet' />

            </Base>
        )
    }
}