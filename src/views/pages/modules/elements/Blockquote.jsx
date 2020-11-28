import Base from '../../../layouts/base';
import SyntaxHighlighter from '../../../tools/syntaxHighlighter';

const Blockquotes = ({ theme, config }) => (
  <Base {...config.views}>
    <Blockquote render='Lorem ipsum dolor sit amet' />
    <Blockquote>Lorem ipsum dolor sit amet</Blockquote>

    <Blockquote callout>Lorem ipsum dolor sit amet</Blockquote>

    <Blockquote source='Someone Famous'>Lorem ipsum dolor sit amet</Blockquote>

    <Blockquote callout source='Someone Famous'>Lorem ipsum dolor sit amet</Blockquote>

    <Blockquote>Lorem ipsum dolor sit amet</Blockquote>

    <Alert error>This is some regular Alert</Alert>

    <SyntaxHighlighter language='jsx'>{`
      <Alert error>This is some regular Alert</Alert>
    `}</SyntaxHighlighter>

    <hr />

    <Blockquote callout source='Someone Famous'>This is a Callout Blockquote</Blockquote>

    <SyntaxHighlighter language='jsx'>{`
      <Blockquote callout content='This is a Callout Blockquote' footer='Someone Famous' />
    `}</SyntaxHighlighter>

    <hr />

    <Blockquote as={Alert} callout box error source='Someone Famous' icon={{ display: 'none' }}>
      This is a hybrid Blockquote/Alert
    </Blockquote>

    <SyntaxHighlighter language='jsx'>{`
      <Blockquote 
        as={Alert}
        callout 
        error
        content='This is a fucking Error Callout Alert Blockquote hybrid' 
        footer='Someone Famous'
      />
    `}</SyntaxHighlighter>
  </Base>
);

export default Blockquotes;