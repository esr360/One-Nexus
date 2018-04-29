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
                    <app.Button error disabled>Button</app.Button>
                    <app.Button href='#'>Button</app.Button>
                </Group>

                <Group object modifiers={['pills']}>
                    <app.Button>Button</app.Button>
                    <app.Button>Button</app.Button>
                    <app.Button>Button</app.Button>
                </Group>

                <Group object modifiers={['pills', 'round']}>
                    <app.Button>Button</app.Button>
                    <app.Button>Button</app.Button>
                    <app.Button>Button</app.Button>
                </Group>

                <div class="object button_group-pills">
                    <button class="button">Button</button>
                    <button class="button">Button</button>
                    <button class="button">Button</button>
                </div>

                <div class="object button_group-pills-round">
                    <button class="button">Button</button>
                    <button class="button">Button</button>
                    <button class="button">Button</button>
                </div>

            </app.layouts.Base>
        )
    }
}