const Paragraphs = ({ layouts, ...props }) => (
  <layouts.base {...props.config.views}>
    <Paragraph>Lorem ipsum</Paragraph>
    <Paragraph>Lorem ipsum</Paragraph>
    <Paragraph tag="div">Lorem ipsum</Paragraph>
  </layouts.base>
);

export default Paragraphs;