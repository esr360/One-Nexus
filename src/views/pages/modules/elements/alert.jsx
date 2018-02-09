import * as app from '../../../../app';

export default class AlertBars extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <app.Heading heading='2' size='7'>Alert Bars/Boxes</app.Heading>

                <app.Heading heading='3' size='5'>Quick Look</app.Heading>

                <app.SyntaxHighlighter language='jsx'>{
                    '<Alert>This is a default alert</Alert>'
                }</app.SyntaxHighlighter>

                <app.Well>
                    <app.Alert>This is a default alert</app.Alert>
                </app.Well>

                <app.List>
                    <app.ListItem><app.Link to='#configuration'>Configuration</app.Link></app.ListItem>
                    <app.ListItem><app.Link to='#styles'>Styles</app.Link></app.ListItem>
                    <app.ListItem><app.Link to='#interactions'>Interactions</app.Link></app.ListItem>
                    <app.ListItem><app.Link to='#render-with-react'>Render With React</app.Link></app.ListItem>
                    <app.ListItem><app.Link to='#examples'>Examples</app.Link></app.ListItem>
                </app.List>

                <app.Section id='configuration'>
                    <app.Heading heading='3' size='5'>Configuration</app.Heading>

                    <app.Alert alert="help"><a href="#">Learn more</a> about module configutation</app.Alert>
                    <app.Alert alert="info"><i>Icons</i> in the <i>alerts</i> section use FontAwesome keywords</app.Alert>

                    <app.SyntaxHighlighter language='json'>{`
                        "alert": {
                            "name": "alert",
                            "alerts": {
                                "error": {
                                    "color": ["#COLOR", "alert", "error"],
                                    "icon": "times"
                                },
                                "success": {
                                    "color": ["#COLOR", "alert", "success"],
                                    "icon": "check"
                                },
                                "info": {
                                    "color": ["#COLOR", "alert", "info"],
                                    "icon": "info-circle"
                                },
                                "help": {
                                    "color": ["#COLOR", "alert", "help"],
                                    "icon": "question-circle"
                                }
                            },
                            "text-color": ["#COLOR", "greyscale", "white"],
                            "icon": {
                                "enable-by-default": true,
                                "margin-right": "0.5em",
                                "line-height": "1.25",
                                "-right": {
                                    "margin-left": "0.5em"
                                }
                            },
                            "-bar": {
                                "padding": "0.85em"
                            },
                            "-box": {
                                "padding": "1.5em"
                            }
                        }
                    `}</app.SyntaxHighlighter>

                    <app.Heading heading='4' size='3'>Colors</app.Heading>

                    <app.SyntaxHighlighter language='json'>{`
                        {
                            "theme": {
                                "alert": {
                                    "alerts": {
                                        "carrot": {
                                            "color": "#F58220",
                                            "icon": "times"
                                        },
                                        "grape": {
                                            "color": "#421C52",
                                            "icon": "check"
                                        },
                                        "banana": {
                                            "color": "#FEDF49",
                                            "icon": "info-circle"
                                        }
                                    }
                                }
                            }
                        }
                    `}</app.SyntaxHighlighter>

                    <app.Heading heading='5' size='2'>Usage:</app.Heading>

                    <app.SyntaxHighlighter language='jsx'>{
                        '<Alert grape>This is an alert</Alert>'
                    }</app.SyntaxHighlighter>

                    <app.SyntaxHighlighter language='html'>{
                        '<div class="alert-bar-grape">This is an alert</div>'
                    }</app.SyntaxHighlighter>
                </app.Section>

                <app.Section id='styles'>
                    <app.Heading heading='3' size='5'>Styles</app.Heading>

                    <app.Alert alert="info">Edit styles in <a href="#">ui/modules/elements/alert/_alert.scss</a></app.Alert>

                    <app.Alert alert="help"><a href="#">Learn how to modify styles using the above configuration</a> so you don't have to touch the source</app.Alert>
                </app.Section>

                <app.Section id='interactions'>
                    <app.Heading heading='3' size='5'>Interactions</app.Heading>

                    <p><i>This module has no interactions.</i></p>
                </app.Section>

                <app.Section id='render-with-react'>
                    <app.Heading heading='3' size='5'>Render With React</app.Heading>

                    <app.SyntaxHighlighter language='jsx'>{
                        '<Alert>This is an alert</Alert>'
                    }</app.SyntaxHighlighter>

                    <app.List>
                        <app.ListItem><app.Link to='#props.bar'>[...Global.props]</app.Link></app.ListItem>
                        <app.ListItem><app.Link to='#props.bar'>Props.bar</app.Link></app.ListItem>
                        <app.ListItem><app.Link to='#props.box'>Props.box</app.Link></app.ListItem>
                        <app.ListItem><app.Link to='#props.alert'>Props.alert</app.Link></app.ListItem>
                        <app.ListItem><app.Link to='#props.icon'>Props.icon</app.Link></app.ListItem>
                        <app.ListItem><app.Link to='#props.close'>Props.close</app.Link></app.ListItem>
                    </app.List>

                    <app.Section id='props.bar'>
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

                        <app.Heading heading='4' size='3'>Preview:</app.Heading>

                        <app.Well>
                            <app.Alert bar>This is an alert</app.Alert>
                        </app.Well>
                    </app.Section>

                    <app.Section id='props.box'>
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

                        <app.Heading heading='4' size='3'>Preview:</app.Heading>

                        <app.Well>
                            <app.Alert box>This is an alert</app.Alert>
                        </app.Well>
                    </app.Section>

                    <app.Section id='props.alert'>
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

                        <p>You can directly reference available alerts as a prop name:</p>

                        <app.SyntaxHighlighter language='jsx'>{`
                            <Alert success>This is an alert</Alert>
                        `}</app.SyntaxHighlighter>
                    </app.Section>

                    <app.Section id='props.icon'>
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

                        <app.Heading heading='4' size='3'>Preview:</app.Heading>

                        <app.Well>
                            <app.Alert icon='exclamation-triangle'>This is an alert</app.Alert>
                        </app.Well>

                        <app.Heading heading='4' size='3'>With right-aligned icon:</app.Heading>

                        <app.Alert info>A right-aligned icon cannot be used in conjunction with the <code>close</code> prop</app.Alert>

                        <app.SyntaxHighlighter language='jsx'>{
                            `<Alert icon={['exclamation-triangle', 'right']}>This is an alert</Alert>`
                        }</app.SyntaxHighlighter>

                        <app.SyntaxHighlighter language='html'>{`
                            <div class="alert-bar">
                                <div class="alert_icon-right fa fa-exclamation-triangle"></div> This is an alert
                            </div>
                        `}</app.SyntaxHighlighter>

                        <app.Well>
                            <app.Alert icon={['exclamation-triangle', 'right']}>This is an alert</app.Alert>
                        </app.Well>
                    </app.Section>

                    <app.Section id='props.close'>
                        <app.Heading size='5'>Props.close</app.Heading>

                        <app.Alert info>This prop cannot be used in conjunction with a right-aligned icon</app.Alert>

                        <app.SyntaxHighlighter language='jsx'>{
                            `<Alert close>This is an alert</Alert>`
                        }</app.SyntaxHighlighter>

                        <app.SyntaxHighlighter language='html'>{`
                            <div class="alert-bar">
                                <div class="alert_icon-close-right fa fa-times"></div> This is an alert
                            </div>
                        `}</app.SyntaxHighlighter>

                        <app.Well>
                            <app.Alert close>This is an alert</app.Alert>
                        </app.Well>

                        <app.Heading heading='4' size='3'>With callback function onClick:</app.Heading>

                        <app.Alert info>You need to define the callback function yourself</app.Alert>

                        <app.SyntaxHighlighter language='jsx'>{
                            `<Alert close={callback}>This is an alert</Alert>`
                        }</app.SyntaxHighlighter>
                    </app.Section>
                </app.Section>

                <app.Section id='examples'>
                    <app.Heading heading='3' size='5'>Examples</app.Heading>

                    <app.Alert error>You need to define the callback function yourself</app.Alert>
                    <app.Alert success>You need to define the callback function yourself</app.Alert>
                    <app.Alert info>You need to define the callback function yourself</app.Alert>
                    <app.Alert help>You need to define the callback function yourself</app.Alert>

                    <app.Alert alert="help">You need to define the callback function yourself</app.Alert>
                </app.Section>

            </app.layouts.Base>
        )
    }
}