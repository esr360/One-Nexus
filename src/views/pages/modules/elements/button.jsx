import * as app from '../../../../app';

export default class Button extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <Group object>
                    <app.Button facebook>Button</app.Button>
                    <app.Button brand-1>Button</app.Button>
                    <app.Button grey-2>Button</app.Button>
                    <app.Button success>Button</app.Button>
                    <app.Button success disabled>Button</app.Button>
                </Group>

            </app.layouts.Base>
        )
    }
}