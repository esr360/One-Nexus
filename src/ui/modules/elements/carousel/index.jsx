import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import config from './assets/config';
import styles from './assets/styles';

const Carousel = ({ slides, options, ...props }) => {
  const { name } = useConfig(props);

  return (
      <Module name={name} {...props}>
        <CarouselProvider naturalSlideWidth={16} naturalSlideHeight={9} totalSlides={3}>
          <Component name='slider' as={Slider}>
            { slides.map((slide, index) => <Component name='slide' as={Slide} index={index} key={index} content={slide} />) }
          </Component>

          <Component name='navigation'>
            <Component name='control' as={ButtonBack}>Back</Component>
            <Component name='control' as={ButtonNext}>Next</Component>
          </Component>

          <Component name='pager'>
            { slides.map(($, index) => <Component name='dot' as={Dot} slide={index} key={index} />) }
          </Component>
        </CarouselProvider>
      </Module>
  );
}

Carousel.defaultProps = { config, styles }

export default Carousel;