import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import config from './assets/config';
import styles from './assets/styles';

const Carousel = ({ slides, defaultSlide = 0, ...props }) => {
  const { name, naturalSlideWidth, naturalSlideHeight, control } = useConfig(props);

  const requiredParams = { naturalSlideWidth, naturalSlideHeight, totalSlides: slides.length }

  return (
    <Module name={name} as={CarouselProvider} {...requiredParams} {...props}>
      <Component name='frame'>
        <Component name='slider' as={Slider}>
          {slides.map((slide, index) => (
            <Component name='slide' as={Slide} index={index} key={index} content={slide} />
          ))}
        </Component>

        <Component name='navigation'>
          <Component name='control' as={ButtonBack} back content={control.back} />
          <Component name='control' as={ButtonNext} next content={control.next} />
        </Component>
      </Component>

      <Component name='pager'>
        {slides.map(($, index) => <Component name='dot' as={Dot} slide={index} key={index} />)}
      </Component>
    </Module>
  );
}

Carousel.defaultProps = { config, styles }

export default Carousel;