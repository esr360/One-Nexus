import Base from '../../../layouts/base';

const Buttons = props => (
    <Base {...props.config.app.views}>

        <Group object>
            <Button facebook border>Button</Button>
            <Button twitter border>Button</Button>
            <Button linkedin border>Button</Button>
            <Button github border>Button</Button>
            <Button skype border>Button</Button>
            <Button pinterest border>Button</Button>
            <Button instagram border>Button</Button>
            <Button rss border>Button</Button>
            <Button youtube border>Button</Button>
            <Button flickr border>Button</Button>
            <Button vimeo border>Button</Button>
            <Button dribbble border>Button</Button>
            <Button behance border>Button</Button>
            <Button deviantart border>Button</Button>
            <Button reddit border>Button</Button>
            <Button google-plus border>Button</Button>
            <Button email border>Button</Button>
            <Button stumbleupon border>Button</Button>
        </Group>

        <Group object>
            <Button facebook>Button</Button>
            <Button twitter>Button</Button>
            <Button linkedin>Button</Button>
            <Button github>Button</Button>
            <Button skype>Button</Button>
            <Button pinterest>Button</Button>
            <Button instagram>Button</Button>
            <Button rss>Button</Button>
            <Button youtube>Button</Button>
            <Button flickr>Button</Button>
            <Button vimeo>Button</Button>
            <Button dribbble>Button</Button>
            <Button behance>Button</Button>
            <Button deviantart>Button</Button>
            <Button reddit>Button</Button>
            <Button google-plus>Button</Button>
            <Button email>Button</Button>
            <Button stumbleupon>Button</Button>
        </Group>

        <Group object>
            <Button facebook block>Button</Button>
            <Button twitter disabled>Button</Button>
            <Button linkedin round>Button</Button>
            <Button github oval> ovalButton</Button>
            <Button google-plus sharp>Button</Button>
            <Button email active>Button</Button>
            <Button stumbleupon border active>Button</Button>
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

        <Group object modifiers={['pills']}>
            <Button>Button</Button>
            <Button grey-3>Button</Button>
            <Button>Button</Button>
        </Group>

        <Group object modifiers={['stack']}>
            <Button>Button</Button>
            <Button grey-3>Button</Button>
            <Button>Button</Button>
        </Group>

        <Group object modifiers={['pills', 'round']}>
            <Button>Button</Button>
            <Button grey-3>Button</Button>
            <Button>Button</Button>
        </Group>

    </Base>
);

export default Buttons;