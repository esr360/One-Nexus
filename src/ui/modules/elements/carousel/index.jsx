import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import config from './assets/config';
import styles from './assets/styles';

const Carousel = ({ slides, defaultSlide = 0, ...props }) => {
  const { name, naturalSlideWidth, naturalSlideHeight } = useConfig(props);

  const [currentSlide, setCurrentSlide, provider] = [...useState(defaultSlide), React.useRef()];

  const params = { naturalSlideWidth, naturalSlideHeight }

  React.useEffect(() => {
    const { carouselStore } = provider.current;
  
    carouselStore.subscribe(() => setCurrentSlide(carouselStore.state.currentSlide));
  }, []);

  return (
    <Module name={name} as={CarouselProvider} totalSlides={slides.length} host={provider} {...params} {...props}>
      <Component name='slider' as={Slider}>
        {slides.map((slide, index) => (
          <Component name='slide' as={Slide} index={index} key={index} content={slide} />
        ))}
      </Component>

      <Component name='navigation'>
        <Component name='control' as={ButtonBack}>Back</Component>
        <Component name='control' as={ButtonNext}>Next</Component>
      </Component>

      <Component name='pager'>
        {slides.map(($, index) => (
          <Component name='dot' as={Dot} active={currentSlide === index} slide={index} key={index} />
        ))}
      </Component>
    </Module>
  );
}

Carousel.defaultProps = { config, styles }

export default Carousel;