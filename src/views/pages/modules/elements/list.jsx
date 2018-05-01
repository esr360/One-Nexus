import * as app from '../../../../app';

export default class List extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <app.List reset>
                    <app.ListItem>Foo</app.ListItem>
                    <app.ListItem>Foo</app.ListItem>
                    <app.ListItem>Foo</app.ListItem>
                </app.List>

                <app.List reset inline>
                    <app.ListItem>Foo</app.ListItem>
                    <app.ListItem>Foo</app.ListItem>
                    <app.ListItem>Foo</app.ListItem>
                </app.List>

                <app.List reset divider>
                    <app.ListItem>Foo</app.ListItem>
                    <app.ListItem>Foo</app.ListItem>
                    <app.ListItem>Foo</app.ListItem>
                </app.List>

                <app.List arrow>
                    <app.ListItem>Foo</app.ListItem>
                    <app.ListItem>Foo</app.ListItem>
                    <app.ListItem>Foo</app.ListItem>
                </app.List>

                <app.List arrow highlight>
                    <app.ListItem>Foo</app.ListItem>
                    <app.ListItem>Foo</app.ListItem>
                    <app.ListItem>Foo</app.ListItem>
                </app.List>

                <app.List clear group>
                    <app.ListItem>Foo</app.ListItem>
                    <app.ListItem>Foo</app.ListItem>
                    <app.ListItem>Foo</app.ListItem>
                </app.List>

            </app.layouts.Base>
        )
    }
}