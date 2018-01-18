import * as app from '../../../../app';

export default class AlertBars extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <app.Heading heading='2' size='7'>Alert Bars/Boxes</app.Heading>

                <app.Well>
                    <app.Alert>This is an alert</app.Alert>
                </app.Well>

                <app.Heading size='5'>Props.bar</app.Heading>

                <app.Table small content={[{
                    default: 'true',
                    type: 'Bool'
                }]} />

                <app.SyntaxHighlighter language='jsx'>{
                    '<Alert bar>This is an alert</Alert>'
                }</app.SyntaxHighlighter>

                <app.Heading heading='4' size='3'>Output:</app.Heading>

                <app.SyntaxHighlighter language='html'>{
                    '<div class="alert-bar">This is an alert</div>'
                }</app.SyntaxHighlighter>

                <hr class="hrule" />

                <app.Heading size='5'>Props.box</app.Heading>

                <app.Table small content={[{
                    default: 'false',
                    type: 'Bool'
                }]} />

                <app.SyntaxHighlighter language='jsx'>{
                    '<Alert box>This is an alert</Alert>'
                }</app.SyntaxHighlighter>

                <app.Heading heading='4' size='3'>Output:</app.Heading>

                <app.SyntaxHighlighter language='html'>{
                    '<div class="alert-box">This is an alert</div>'
                }</app.SyntaxHighlighter>

                <app.Heading size='5'>Props.name</app.Heading>

                <app.Table small content={[{
                    default: 'alert',
                    type: 'String'
                }]} />

                <app.SyntaxHighlighter language='jsx'>{
                    `<Alert name='notice'>This is an alert</Alert>`
                }</app.SyntaxHighlighter>

                <app.Heading heading='4' size='3'>Output:</app.Heading>

                <app.SyntaxHighlighter language='html'>{
                    '<div class="notice-bar">This is an alert</div>'
                }</app.SyntaxHighlighter>

                <app.Heading size='5'>Props.alert</app.Heading>

                <app.Table small content={[{
                    default: 'success',
                    type: 'String'
                }]} />

                <app.SyntaxHighlighter language='jsx'>{
                    `<Alert alert='success'>This is an alert</Alert>`
                }</app.SyntaxHighlighter>

                <app.Heading heading='4' size='3'>Output:</app.Heading>

                <app.SyntaxHighlighter language='html'>{
                    '<div class="alert-bar-success">This is an alert</div>'
                }</app.SyntaxHighlighter>

                <app.Heading size='5'>Props.icon</app.Heading>

                <app.Table small content={[{
                    default: 'false',
                    type: '(String|Array)'
                }]} />

                <app.SyntaxHighlighter language='jsx'>{
                    `<Alert icon='exclamation-triangle'>This is an alert</Alert>`
                }</app.SyntaxHighlighter>

                <app.Heading heading='4' size='3'>Output:</app.Heading>

                <app.SyntaxHighlighter language='html'>{`
                    <div class="alert-bar">
                        <div class="alert_icon fa fa-exclamation-triangle"></div> This is an alert
                    </div>
                `}</app.SyntaxHighlighter>

            </app.layouts.Base>
        )
    }
}