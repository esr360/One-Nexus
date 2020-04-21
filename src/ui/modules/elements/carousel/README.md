# One-Nexus Carousel

@TODO

## Overview

@TODO

## Configuration

@TODO

## API

* [Build Your Own Carousel](#)

### Build Your Own Carousel

Due to the versatility of Carousels, your requirements may not be catered for by the out-the-box One-Nexus Carousel. In these cases, you can build your own by following these steps.

#### Step 1 - Import `pure-react-carousel` Assets

Following [the basic structure of a One-Nexus Module](#TODO), import the desired Components from [`pure-react-carousel`](https://www.npmjs.com/package/pure-react-carousel#table-of-contents), along with its base stylesheet:

```jsx
// `pure-react-carousel` assets
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

// module assets
import config from './assets/config';
import styles from './assets/styles';

const MyComplexCarousel = (props) => {
  const { name } = useConfig(props);

  return (
    <Module name={name} {...props}>
      ...
    </Module>
  );
}

MyComplexCarousel.defaultProps = { config, styles }

export default MyComplexCarousel;
```

#### Step 2 - Add `CarouselProvider`

Every Carousel created with `pure-react-carousel` needs to be wrapped with the `CarouselProvider` Component. We can tell our `MyComplexCarousel` Module to render as this Component using the [`as` prop](#TODO). We will also create and pass a [`Ref`](#TODO) to the `CarouselProvider` so we can later access the Carousel store. This is done using the [`host` prop]:

```jsx
...

const MyComplexCarousel = (props) => {
  const { name } = useConfig(props);

  // Create a ref for CarouselProvider
  const provider = React.createRef();

  return (
    // pass appropriate `as` and `host` props
    <Module name={name} as={CarouselProvider} host={provider} {...props}>
      ...
    </Module>
  );
}

...
```

#### Step 3 - Expose `carouselStore`

It's likely that your custom Carousel will need access to each instances's store, so you can do things like apply "active" styles to [Carousel Dots](https://github.com/express-labs/pure-react-carousel#dot-). We can access the instance's store by accessing the `Ref` we created in the previous step (but only once the Component has mounted - which is why we must place it in a [`useEffect`](#TODO) call):

```jsx
...

const MyComplexCarousel = (props) => {
  const { name } = useConfig(props);

  const provider = React.useRef();

  // Create a `useEffect` passing an empty array as the dependencies,
  // then access the `provider.current.carouselStore` value
  React.useEffect(() => {
    const { carouselStore } = provider.current;
  
    console.log(carouselStore);
  }, []);

  return (
    <Module name={name} as={CarouselProvider} host={provider} {...props}>
      ...
    </Module>
  );
}

...
```

#### Step 4 - Map Store to State

Now that we have access to the Carousel instance's store, we can can abstract the values we need into our own Carousel's state and make use of them. This example will get the `currentSlide` value from the store and map it to the internal state of the Module. To subscribe to Carousel changes we use `carouselStore.subscribe`:


```jsx
...

const MyComplexCarousel = (props) => {
  const { name } = useConfig(props);

  const provider = React.useRef();

  // Store the `currentSlide` value in a local state
  const [currentSlide, setCurrentSlide] = useState(0);

  React.useEffect(() => {
    const { carouselStore } = provider.current;
  
    // Subscribe to Carousel changes then update the local state
    carouselStore.subscribe(() => setCurrentSlide(carouselStore.state.currentSlide));
  }, []);

  return (
    <Module name={name} as={CarouselProvider} host={provider} {...props}>
      ...
    </Module>
  );
}

...
```

Now the value `currentSlide` will always return the index of the current/active slide - we will make use of this later.

#### Step 5 - Flesh Out The JSX

We can start fleshing out the JSX of our Carousel. We can see we are importing the `Slider`, `Slide`, `ButtonBack`, `ButtonNext` and `Dot` Components, so let's build something that utilises them.

> Remember to always use `<Module>` and `<Component>` when writing JSX for One-Nexus Modules

```jsx
...

const MyComplexCarousel = ({ slides, ...props }) => {
  const { name } = useConfig(props);
  const provider = React.useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  React.useEffect(() => {
    const { carouselStore } = provider.current;
  
    carouselStore.subscribe(() => setCurrentSlide(carouselStore.state.currentSlide));
  }, []);

  return (
    <Module name={name} as={CarouselProvider} host={provider} {...props}>
      <Component name='slider' as={Slider}>
        {slides.map((slide, index) => (
          // We continue to pass the `pure-react-carousel` Components via `as`
          <Component name='slide' as={Slide} index={index} content={slide} />
        ))}
      </Component>

      <Component name='navigation'>
        <Component name='control' as={ButtonBack}>Back</Component>
        <Component name='control' as={ButtonNext}>Next</Component>
      </Component>

      <Component name='pager'>
        {slides.map(($, index) => (
          // Here you can see we make use of the `currentSlide` value
          <Component name='dot' as={Dot} active={currentSlide === index} slide={index} />
        ))}
      </Component>
    </Module>
  );
}

...
```

Each Carousel also needs the following properties (required by `pure-react-carousel`): `totalSlides`, `naturalSlideWidth` and `naturalSlideHeight`:

> `naturalSlideWidth` and `naturalSlideHeight` define an "aspect-ratio" for the Carousel/slides

```jsx
...

const MyComplexCarousel = ({ slides, ...props }) => {
  ...

  const params = {
    totalSlides: slides.length,
    naturalSlideWidth: 16,
    naturalSlideHeight: 9
  }

  return (
    <Module name={name} as={CarouselProvider} host={provider} {...params} {...props}>
      ...
    </Module>
  );
}

...
```

The Carousel Components can be [customized/configured as normal](#TODO):

###### `MyComplexCarousel/assets/config.js`

```js
export default (theme) => ({
  name: 'MyComplexCarousel',

  navigation: {
    padding: '1em',
    background: 'pink'
  },

  control: {
    background: 'blue',
    color: 'white',

    ':hover': {
      background: 'pink'
    }
  },

  pager: {
    padding: '1em',
    background: 'lime'
  },

  dot: {
    'is-active': {
      background: 'deepskyblue',
    }
  }
})
```

...from here you can see how we now have complete control over building a fully customized Carousel.