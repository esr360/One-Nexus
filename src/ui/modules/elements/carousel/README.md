# One-Nexus Carousel

[IMAGE COMING SOON]

<table>
  <thead>
    <th><a href="#overview">Overview</a></th>
    <th><a href="#configuration">Configuration</a></th>
    <th><a href="#API">API</a></th>
  </thead>
  <tr>
    <td><li><a href="#TODO">Live CodeSandbox Demo</a></li></td>
    <td><li><a href="#default-configuration">Default Configuration</a></li></td>
    <td><li><a href="#propsslides"><code>props.slides</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#confignaturalslidewidth--confignaturalslideheight"><code>config.naturalSlideWidth</code></a></li></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#confignaturalslidewidth--confignaturalslideheight"><code>config.naturalSlideHeight</code></a></li></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#pure-react-carousel-options">Pure-React-Carousel Options</a></li></td>
    <td></td>
  </tr>
</table>

## Overview

> [Learn more about One-Nexus Modules](https://github.com/esr360/One-Nexus/wiki/Modules)

```jsx
<Carousel slides={[
  <img src="https://picsum.photos/640/480" />,
  <img src="https://picsum.photos/640/480" />,
  <img src="https://picsum.photos/640/480" />,
  <img src="https://picsum.photos/640/480" />
]} />
```

###### Structural Interface [[?]](#TODO)

```jsx
<Module name='Carousel'>
  <Component name='frame'>
    <Component name='slider'>
        <Component name='slide' />
        ...
    </Component>

    <Component name='navigation'>
      <Component name='control' back />
      <Component name='control' next />
    </Component>
  </Component>

  <Component name='pager'>
    <Component name='dot'  />
    ...
  </Component>
</Module>
```

### [Live CodeSandbox Demo](#TODO)

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about Module configutation

### Default Configuration

> [`modules/elements/Alert/assets/config.js`](assets/config.js)

<pre>
{
  name: 'Carousel',
  object: true,
  gutter: theme.tokens.margin,
  naturalSlideWidth: 2,
  naturalSlideHeight: 1,

  frame: {
    background: theme.colors.opaque['dark-1'],
  },

  control: {
    borderStyle: 'none',
    background: theme.colors.brand['brand-4'],
    color: 'white',
    height: '2em',
    width: '2em',

    ':focus': {
      boxShadow: `0 0 0 4px ${theme.colors.brand['brand-1']}`
    },

    ':hover': {
      background: theme.colors.brand['brand-2']
    },

    ':disabled': {
      background: theme.colors.brand['brand-3']
    },

    back: <Icon glyph='caret-left' />,
    next: <Icon glyph='caret-right' />
  },

  pager: {
    padding: '1em'
  },

  dot: {
    height: '1em',
    width: '1em',
    border: 'none',
    background: theme.colors.greyscale['grey-3'],

    ':focus': {
      boxShadow: `0 0 0 4px ${theme.colors.brand['brand-1']}`
    },

    ':hover': {
      background: theme.colors.brand['brand-4']
    },

    ':disabled': {
      background: theme.colors.brand['brand-3']
    }
  }
}
</pre>

### `config.naturalSlideWidth` / `config.naturalSlideHeight`

> Control the aspect ratio of the Carousel

Combined, these values form an aspect ratio for the carousel. For example:

```js
{
  naturalSlideWidth: 16,
  naturalSlideHeight: 9
}
```

...would cause your carousel to have an aspect ratio of **16:9**.

### Pure-React-Carousel Options

Any prop passed to your `<Carousel />` instance will also be fed to the [`<CarouselProvider />`](https://www.npmjs.com/package/pure-react-carousel#carouselprovider-) Pure-React-Carousel component - meaning that any valid `CarouselProvider` prop can be passed.

```jsx
<Carousel slides={[...]} dragEnabled={false} orientation='vertical' visibleSlides={4} />
```

## API

* [`props.slides`](#propsslides)
* [Build Your Own Carousel](#build-your-own-carousel)

### `props.slides`

> The Carousel slides

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Array.&lt;<a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a>></code></td>
  </tr>
</table>

```jsx
<Carousel slides={[
  <img src="https://picsum.photos/640/480" />,
  <img src="https://picsum.photos/640/480" />,
  <img src="https://picsum.photos/640/480" />,
  <img src="https://picsum.photos/640/480" />
]} />
```

### Build Your Own Carousel

Due to the versatility of Carousels, your requirements may not be catered for by the out-the-box One-Nexus Carousel. In these cases, you can build your own by following these steps.

> Take a look at how the [out-the-box One-Nexus Carousel](/index.jsx) is built for a better understanding of these steps

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

Every Carousel created with `pure-react-carousel` needs to be wrapped with the `CarouselProvider` Component. We can tell our `MyComplexCarousel` Module to render as this Component using the [`as` prop](#TODO).

```jsx
...

const MyComplexCarousel = (props) => {
  const { name } = useConfig(props);

  return (
    // pass `CarouselProvider` to `as` prop
    <Module name={name} as={CarouselProvider} {...props}>
      ...
    </Module>
  );
}

...
```

#### Step 3 - Flesh Out The JSX

We can start fleshing out the JSX of our Carousel. We can see we are importing the `Slider`, `Slide`, `ButtonBack`, `ButtonNext` and `Dot` Components, so let's build something that utilises them.

> Remember to always use `<Module>` and `<Component>` when writing JSX for One-Nexus Modules

```jsx
...

const MyComplexCarousel = ({ slides, ...props }) => {
  const { name } = useConfig(props);

  return (
    <Module name={name} as={CarouselProvider} {...props}>
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
        {slides.map(($, index) => (<Component name='dot' as={Dot} slide={index} />))}
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
  const { name } = useConfig(props);

  const requiredParams = {
    totalSlides: slides.length,
    naturalSlideWidth: 16,
    naturalSlideHeight: 9
  }

  return (
    <Module name={name} as={CarouselProvider} {...requiredParams} {...props}>
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
    background: theme.colors.brand['brand-1']
  },

  pager: {
    padding: '1em',
    background: theme.colors.brand['brand-2']
  },

  dot: {
    'height': '1em',
    'width': '1em',,

    ':hover': {
      background: theme.colors.brand['brand-4']
    },

    ':disabled': {
      background: theme.colors.brand['brand-1'],
    }
  },

  control: {
    background: theme.colors.brand['brand-4'],
    padding: '0.25em 0.85em',
    color: 'white',

    ':hover': {
      background: theme.colors.brand['brand-2']
    }
  }
})
```

###### `MyComplexCarousel/assets/styles.js`

```js
export default ({ state, config }) => [config, {
  'text-align': 'center',

  control: ({ state }) => ({
    'border': 'none',
    'margin-left': state.isFirstChild ? 0 : '0.5em'
  }),

  dot: ({ state }) => ({
    'border-radius': '50%',
    'border': 'none',
    'margin-left': state.isFirstChild ? 0 : '0.5em'
  })
}, state];
```

...from here you can see how we now have complete control over building a fully customized Carousel.