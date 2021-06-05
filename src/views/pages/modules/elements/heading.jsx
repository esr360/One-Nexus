import Base from '../../../layouts/base';

export default props => (
    <Base {...props.config.views}>
      <Heading size-7 flush heading={1}>Signup Form</Heading>
      <Heading size-3 flush heading={2} heavy>Signup Form</Heading>

      <Heading size-7 heading={1}>Signup Form</Heading>

      <Heading size-3 heading={2} heavy>Signup Form</Heading>

      <Heading light>Signup Form</Heading>

      <Heading uppercase>Signup Form</Heading>

      <Group>
        <Heading size-5>Group Heading 1</Heading>
        <Heading size-3>Group Heading 3</Heading>
      </Group>

      <Group>
        <Heading>Group Heading 1</Heading>
        <Heading>Group Heading 2</Heading>
        <Heading>Group Heading 3</Heading>
      </Group>
    </Base>
);