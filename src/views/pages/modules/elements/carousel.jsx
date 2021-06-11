import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';

const Carousels = ({ layouts, ...props }) => {
  return (
    <layouts.base {...props.config.views}>
      <br />
      <Carousel slides={[
        <img src="https://picsum.photos/1500/750" />,
        <img src="https://picsum.photos/1500/750" />,
        <img src="https://picsum.photos/1500/750" />,
        <img src="https://picsum.photos/1500/750" />,
      ]} pager={{ display: 'none' }} />

      {/* <Module name='projects' as={CarouselProvider}>
        <Group as={Slider}>
          <Component name='project' as={Slide} index={0}>First Slide</Component>
          <Component name='project' as={Slide} index={1}>Second Slide</Component>
          <Component name='project' as={Slide} index={2}>Third Slide</Component>
        </Group>
      </Module> */}
    </layouts.base>
  );
}

export default Carousels;