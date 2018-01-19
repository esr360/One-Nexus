import ReactSyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism';

export default class SyntaxHighlighter extends React.Component {
    render() {
        return (
            <ReactSyntaxHighlighter {...this.props} style={xonokai}>
                {process(this.props.children)}
            </ReactSyntaxHighlighter>
        )
    }
}

function process(string) {
    let lines = string.split('\n');

    if (lines[0] === '') lines.shift();

    const matches = /^[\s\t]+/.exec(lines[0]);

    if (matches) var indentation = matches[0];

    if (indentation) {
        lines = lines.map(function(line) {
            return line.replace(indentation, '').replace(/\t/g, '    ')
        });
    }

    return indentation ? lines.join('\n').trim() : string;
}