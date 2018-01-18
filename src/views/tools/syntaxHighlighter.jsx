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

function process(str) {
    const div = document.createElement('div');

    div.innerHTML = str.trim();

    return format(div, 0).innerHTML
        .replace(/(^[ \t]*\n)/gm, '')
        .replace(/\=\"\"/gi, '');
}

function format(node, level) {
    var indentBefore = new Array(level++ + 1).join('    ');
    var indentAfter = new Array(level - 1).join('    ');
    var textNode;

    for (var i = 0; i < node.children.length; i++) {
        textNode = document.createTextNode('\n' + indentBefore);
        node.insertBefore(textNode, node.children[i]);

        format(node.children[i], level);

        if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
        }
    }

    return node;
}