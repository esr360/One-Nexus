import Base from '../../../layouts/base';
import SyntaxHighlighter from '../../../tools/syntaxHighlighter';

const Blockquotes = ({ theme, config }) => (
  <Base {...config.views}>
    {/* <Blockquote content='Lorem ipsum dolor sit amet' />

    <Blockquote callout content='Lorem ipsum dolor sit amet' />

    <Blockquote content='Lorem ipsum dolor sit amet' footer='Someone Famous' />

    <Blockquote callout content='Lorem ipsum dolor sit amet' footer='Someone Famous' />

    <Blockquote content='Lorem ipsum dolor sit amet' /> */}

    <Alert error>This is some regular Alert</Alert>

    <SyntaxHighlighter language='jsx'>{`
      <Alert error>This is some regular Alert</Alert>
    `}</SyntaxHighlighter>

    <hr />

    <Blockquote callout content='This is a Callout Blockquote' footer='Someone Famous' />

    <SyntaxHighlighter language='jsx'>{`
      <Blockquote callout content='This is a Callout Blockquote' footer='Someone Famous' />
    `}</SyntaxHighlighter>

    <hr />

    <Blockquote as={Alert}
      icon={{ glyph: 'exclamation-triangle' }}
      callout 
      error
      box
      content='This is a fucking Error Callout Alert Blockquote hybrid' 
      footer='Someone Famous'
    />

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