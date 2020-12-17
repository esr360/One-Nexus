import Base from '../../../layouts/base';

const Buttons = props => (
  <Base {...props.config.views}>
    <Group>
      <Button brand-2 size-1>Button 1</Button>
      <Button dribbble border size-5>Button 1</Button>
      <Button reddit>Button 2</Button>
      <Button linkedin round>Button 3</Button>
      <Button round>Button 4</Button>
    </Group>

    {/* <Group>
      <Button facebook border>Button</Button>
      <Button twitter border>Button</Button>
      <Button linkedin border>Button</Button>
      <Button github border>Button</Button>
      <Button instagram border>Button</Button>
      <Button youtube border>Button</Button>
      <Button dribbble border>Button</Button>
      <Button reddit border>Button</Button>
      <Button email border>Button</Button>
    </Group>

    <Group object>
      <Button border success>Button</Button>
    </Group>

    <Group object>
      <Button facebook>Button</Button>
      <Button twitter>Button</Button>
      <Button linkedin>Button</Button>
      <Button github>Button</Button>
      <Button instagram>Button</Button>
      <Button youtube>Button</Button>
      <Button dribbble>Button</Button>
      <Button reddit>Button</Button>
      <Button email>Button</Button>
    </Group>

    <Group object>
      <Button brand-1>Button</Button>
      <Button youtube size-4>Button</Button>
      <Button brand-3>Button</Button>
      <Button brand-4>Button</Button>
      <Button primary>Button</Button>
    </Group>

    <Group object>
      <Button facebook block>Button</Button>
      <Button twitter disabled>Button</Button>
      <Button linkedin round>Button</Button>
      <Button email active>Button</Button>
    </Group>

    <Group object>
      <Button grey-1>Button</Button>
      <Button grey-2>Button</Button>
      <Button grey-3>Button</Button>
      <Button grey-4>Button</Button>
      <Button grey-5>Button</Button>
      <Button grey-6>Button</Button>
    </Group>

    <Group object>
      <Button size-1>Button</Button>
      <Button size-2>Button</Button>
      <Button size-3 grey-3>Button</Button>
      <Button size-8>Button</Button>
    </Group>

    <Group object pills>
      <Button>Button</Button>
      <Button grey-3>Button</Button>
      <Button>Button</Button>
    </Group>

    <Group object stack modifiers={['stack']}>
      <Button>Button</Button>
      <Button grey-3>Button</Button>
      <Button>Button</Button>
    </Group> */}

    <Group object pills round>
      <Button>Button</Button>
      <Button grey-3>Button</Button>
      <Button>Button</Button>
    </Group>
  </Base>
);

export default Buttons;