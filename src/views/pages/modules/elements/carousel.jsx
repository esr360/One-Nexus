import Base from '../../../layouts/base';

export default props => (
  <Base {...props.config.views}>
    <br />
    <Carousel slides={[
      <img src="https://picsum.photos/640/480" />,
      <img src="https://picsum.photos/640/480" />,
      <img src="https://picsum.photos/640/480" />,
      <img src="https://picsum.photos/640/480" />
    ]} pager={{ display: 'none' }} />

    {/* <Module name='projects' as={CarouselProvider}>
      <Group as={Slider}>
        <Component name='project' as={Slide} index={0}>First Slide</Component>
        <Component name='project' as={Slide} index={1}>Second Slide</Component>
        <Component name='project' as={Slide} index={2}>Third Slide</Component>
      </Group>
    </Module> */}
  </Base>
);