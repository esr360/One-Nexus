import Base from '../../../layouts/base';

const Buttons = props => (
  <Base {...props.config.views}>

    <Group object grid columns={8}>
      <Button light-100>Light 100</Button>
      <Button light-95>Light 95</Button>
      <Button light-90>Light 90</Button>
      <Button light-85>Light 85</Button>
      <Button light-80>Light 80</Button>
      <Button light-70>Light 70</Button>
      <Button light-60>Light 60</Button>
      <Button light-55>Light 55</Button>
      <Button light-50>Light 50</Button>
      <Button light-40>Light 40</Button>
      <Button light-30>Light 30</Button>
      <Button light-20>Light 20</Button>
      <Button light-10>Light 10</Button>
      <Button light-0>Light 0</Button>
    </Group>

    <Group grid columns={8}>
      <Button brand-1>Button</Button>
      <Button brand-2>Button</Button>
      <Button brand-3>Button</Button>
      <Button facebook>Button</Button>
      <Button twitter>Button</Button>
      <Button linkedin>Button</Button>
      <Button instagram>Button</Button>
      <Button youtube>Button</Button>
      <Button dribbble>Button</Button>
      <Button reddit>Button</Button>
      <Button email>Button</Button>
    </Group>

    <Group>
      <Button brand-2 size-1>Button 1</Button>
      <Button reddit>Button 2</Button>
      <Button help round>Button 3</Button>
      <Button round brand-1>Button 4</Button>
      <Button dribbble border size-5>Button 1</Button>
      <Button round>Button 4</Button>
    </Group>

    <Group>
      <Button icon help>
        <Icon glyph='bell' />
      </Button>
      <Button error>
        <Icon glyph='bell' />
      </Button>
      <Button help>
        <Icon glyph='bell' />
      </Button>
      <Button error>
        <Icon glyph='bell' />
      </Button>
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

    <Group object stack>
      <Button>Button</Button>
      <Button grey-3>Button</Button>
      <Button>Button</Button>
    </Group>

    <Group object pills round>
      <Button>Button</Button>
      <Button grey-3>Button</Button>
      <Button>Button</Button>
    </Group>
  </Base>
);

export default Buttons;