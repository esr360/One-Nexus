import * as app from '../../../../app';

export default class Button extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <Group object>
                    <app.Button size-4>Button</app.Button>
                    <app.Button>Button</app.Button>
                </Group>

            </app.layouts.Base>
        )
    }
}