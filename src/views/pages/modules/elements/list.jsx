const Lists = ({ layouts, ...props }) => {
  return (
    <layouts.base {...props.config.views}>
      <List reset>
        <List.Item>Foo</List.Item>
        <List.Item>Foo</List.Item>
        <List.Item>Foo</List.Item>
      </List>

      <List reset inline>
        <List.Item>Foo</List.Item>
        <List.Item icon='chevron-circle-up'>Foo</List.Item>
        <List.Item>Foo</List.Item>
      </List>

      <List reset divider>
        <List.Item>Foo</List.Item>
        <List.Item>Foo</List.Item>
        <List.Item>Foo</List.Item>
      </List>

      <List arrow>
        <List.Item icon='chevron-circle-up'>Foo</List.Item>
        <List.Item>Foo</List.Item>
        <List.Item>Foo</List.Item>
      </List>

      <List arrow>
        <List.Item>Foo</List.Item>
        <List.Item>Foo</List.Item>
        <List.Item>Foo</List.Item>
      </List>

      <List clear>
        <List.Item>Foo</List.Item>
        <List.Item>Foo</List.Item>
        <List.Item>Foo</List.Item>
      </List>
    </layouts.base>
  );
}

export default Lists;