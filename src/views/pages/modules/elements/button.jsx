import Base from '../../../layouts/base';

const Buttons = props => (
    <Base {...props.config.app.views}>

        <Group object>
            <Button facebook>Button</Button>
            <Button brand-1>Button</Button>
            <Button grey-2>Button</Button>
            <Button success>Button</Button>
            <Button error disabled>Button</Button>
            <Button href='#'>Button</Button>
        </Group>

        <Group object>
            <Button size-1>Button</Button>
            <Button size-2>Button</Button>
            <Button size-3>Button</Button>
            <Button size-8>Button</Button>
        </Group>

        <Group object modifiers={['pills']}>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
        </Group>

        <Group object modifiers={['pills', 'round']}>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
        </Group>

    </Base>
);

export default Buttons;