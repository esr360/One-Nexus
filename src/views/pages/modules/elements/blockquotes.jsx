import Base from '../../../layouts/base';

const Blockquotes = ({ theme, config }) => (
  <Base {...config.views}>

    <Blockquote content='Lorem ipsum dolor sit amet' />

    <Blockquote callout content='Lorem ipsum dolor sit amet' />

    <Blockquote content='Lorem ipsum dolor sit amet' footer='Someone Famous' />

    <Blockquote callout content='Lorem ipsum dolor sit amet' footer='Someone Famous' />

    <Blockquote 
      Alert={['success']}
      callout 
      content='Lorem ipsum dolor sit amet' 
      footer='Someone Famous'
    />

    <Blockquote content='Lorem ipsum dolor sit amet' />
  </Base>
);

export default Blockquotes;