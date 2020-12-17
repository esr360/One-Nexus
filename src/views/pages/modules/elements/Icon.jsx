const Icons = ({ layouts, ...props }) => {
  const [isPartyTime, setPartyTime] = React.useState(0);

  React.useEffect(() => {
    // setTimeout(() => setPartyTime(true), 3000);
  });

  return (
    <layouts.base {...props.config.views}>
      <Group>
        <Icon glyph='caret-left' />
        <Icon glyph='caret-right' />
        <Icon glyph='caret-up' />
        <Icon glyph='caret-down' />
      </Group>

      <Group>
        <Icon size-1 glyph='bell' />
        <Icon size-3 glyph='bell' />
        <Icon size-5 glyph='bell' />
        <Icon size-7 glyph='bell' />
        <Icon size-9 glyph='bell' />
      </Group>

      <Button help>
        <Icon glyph='bell' />
      </Button>
      <Button error>
        <Icon glyph='bell' />
      </Button>

      <Button size-5 success>
        <Icon glyph='bell' /> Some Text
      </Button>
    </layouts.base>
  );
}

export default Icons;