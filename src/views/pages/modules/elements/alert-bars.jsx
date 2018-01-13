import * as app from '../../../../app';

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism';

export default class AlertBars extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <app.Heading light size='7'>Alert Bars/Boxes</app.Heading>

                <div className="well">
                    <app.Alert>This is an alert</app.Alert>
                </div>

                <h2 className="heading-size-5">Props.bar</h2>

                <div class="row">
                    <div class="span-6">
                        <table class="table">
                            <tr>
                                <td><b>Default</b></td>
                                <td><code>true</code></td>
                            </tr>
                            <tr>
                                <td><b>Type</b></td>
                                <td><code>Bool</code></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <SyntaxHighlighter language='jsx' style={xonokai}>{
                    '<Alert bar>This is an alert</Alert>'
                }</SyntaxHighlighter>

                <h2 className="heading-size-3">Output:</h2>

                <SyntaxHighlighter language='html' style={xonokai}>{
                    '<div class="alert-bar">This is an alert</div>'
                }</SyntaxHighlighter>

                <h2 className="heading-size-5">Props.box</h2>

                <div class="row">
                    <div class="span-6">
                        <table class="table">
                            <tr>
                                <td><b>Default</b></td>
                                <td><code>false</code></td>
                            </tr>
                            <tr>
                                <td><b>Type</b></td>
                                <td><code>Bool</code></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <SyntaxHighlighter language='jsx' style={xonokai}>{
                    '<Alert box>This is an alert</Alert>'
                }</SyntaxHighlighter>

                <h2 className="heading-size-3">Output:</h2>

                <SyntaxHighlighter language='html' style={xonokai}>{
                    '<div class="alert-box">This is an alert</div>'
                }</SyntaxHighlighter>

            </app.layouts.Base>
        )
    }
}