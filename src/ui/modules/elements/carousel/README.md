# One-Nexus Carousel

> The One-Nexus carousels use [Flickity](https://flickity.metafizzy.co/)

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)

## Overview

### Quick Look

```jsx
<Carousel slides={[
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />
]} />
```

###### Internal Interface [[?]](#TODO)

```jsx
<Module name='carousel' { hide-pagination, hide-navigation }>
    <Component name='wrapper'>
        <Component name='slide' />
        ...
    </Component>

    <Component name='navigationItem' { (prev | next) } />

    <Component name='pagination'>
        <Component name='bullet' />
        ...
    </Component>
    ...
</Module>
```

### Modifiers

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Modifiers) about modifiers

<table class="table">
    <thead>
        <tr>
            <th>Modifier</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="https://github.com/esr360/One-Nexus/wiki/Global-Modifiers">[...Global modifiers]</a></td>
            <td>Modifiers that can be applied to any module</td>
        </tr>
        <tr>
            <td><a href="#hide-pagination"><code>hide-pagination</code></a></td>
            <td>Removes the carousel pagination bullets</td>
        </tr>
        <tr>
            <td><a href="#hide-navigation"><code>hide-navigation</code></a></td>
            <td>Removes the carousel navigation arrows</td>
        </tr>
    </tbody>
</table>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "carousel": {
        "name": "carousel",
        "navigationItem": {
            "disable": false,
            "size": ["#FONT-SIZE", "size-10"],
            "background-color": ["#COLOR", "opaque", "light-8"],
            "arrow-color": ["#COLOR", "opaque", "dark-4"],
            "arrow-size": "40%",
            "shape": "circle",
            "transition": ["#CORE", "transition"]
        },
        "bullet": {
            "disable": false,
            "size": "10px",
            "gutter": "25px",
            "fill": ["#COLOR", "opaque", "dark-4"],
            "active-fill": ["#COLOR", "brand", "brand-3"],
            "transition": ["#CORE", "transition"]
        },
        "Flickity": {
            "cellAlign": "left",
            "contain": true
        }
    }
}
```

> Certain values from the above configuration are excluded from the below table ([learn more](https://github.com/esr360/One-Nexus/tree/master/src/ui/modules#documenting-configuration-properties))

<table class="table">
    <thead>
        <tr>
            <th>Option</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>navigationItem.disable</code></td>
            <td>Hide navigation buttons by default</td>
        </tr>
        <tr>
            <td><code>navigationItem.size</code></td>
            <td>The size of the next/previous buttons</td>
        </tr>
        <tr>
            <td><code>navigationItem['arrow-color']</code></td>
            <td>The arrow color of the next/previous buttons</td>
        </tr>
        <tr>
            <td><code>navigationItem['arrow-size']</code></td>
            <td>The size of the next/previous buttons</td>
        </tr>
        <tr>
            <td><code>navigationItem.shape</code></td>
            <td>The shape of the next/previous buttons [circle|square]</td>
        </tr>
        <tr>
            <td><code>bullets.disable</code></td>
            <td>Hide the pagination/bullets by default</td>
        </tr>
        <tr>
            <td><code>bullets.size</code></td>
            <td>The size for pagination bullets</td>
        </tr>
        <tr>
            <td><code>bullets.gutter</code></td>
            <td>The space between the carousel viewport and the pagination</td>
        </tr>
        <tr>
            <td><code>bullets.fill</code></td>
            <td>The color for pagination bullets</td>
        </tr>
        <tr>
            <td><code>bullets['active-fill']</code></td>
            <td>The color for the active pagination bullet</td>
        </tr>
        <tr>
            <td><code>Flickity</code></td>
            <td>Object of [Flickity options](https://flickity.metafizzy.co/options.html) to pass to carousels</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `carousel` object in your theme's config file (e.g. [ui/themes/one_nexus.json](../../../themes/one_nexus.json)):

```js
{
    "theme": {
        "carousel": {
            ...
        }
    }
}
```

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Interactions

> Module interactions are applied by default within the module's `.jsx` file ([learn more](https://github.com/esr360/One-Nexus/wiki/Module-interactions))

* [Init](#toggle)

> See the [Flickity methods](https://flickity.metafizzy.co/api.html) for other available interactions

### Flickity Method Examples

```js
Carousel.Flickity('#myCarousel').next();
```

```js
Carousel.Flickity('#myCarousel').pausePlayer();
```

Reference a React Component:

```js
Carousel.Flickity(ReactDOM.findDOMNode(myCarousel)).toggleFullscreen();
```

### Init

> Initialise a carousel

```js
Carousel.init(target);
```

<table>
    <thead>
        <tr>
            <td><b>Parameter</b></td>
            <td><b>Type</b></td>
            <td><b>Description<b/></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>target</code></td>
            <td><code>HTMLElement</code></td>
            <td>The target modal to toggle</td>
        </tr>
    </tbody>
</table>

#### Examples

```js
// Initialise carousel from HTML Element
Carousel.init(document.getElementById('foo'));

// Initialise carousel from React Component reference
Carousel.init(ReactDOM.findDOMNode(myCarousel), 'show');
```

## Rendering

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

* [Examples](#examples)
* [API](#api)

### Examples

* [Using `<Carousel>` Tag](#using-carousel-tag)
* [Custom Build](#custom-build)

#### Using `<Carousel>` Tag

```jsx
<Carousel slides={[
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />
]} />
```

#### Custom Build

```jsx
<Module name='carousel' ref={node => Carousel.init(ReactDOM.findDOMNode(node))}>
    <Component name='slide'><img src="https://picsum.photos/640/480" /></Component>
    <Component name='slide'><img src="https://picsum.photos/640/480" /></Component>
    <Component name='slide'><img src="https://picsum.photos/640/480" /></Component>
</Module>
```

### API

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [defaultProps](#defaultprops)
* [Props.slides](#propsslides)
* [Props.options](#propsoptions)
* [Props.init](#propsinit)

#### defaultProps

```js
{
    object: true,
    init: interactions.init
}
```

#### Props.slides

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Array</code></td>
    </tr>
</table>

```jsx
const slides = [
    <img src="https://picsum.photos/640/480" />,
    <div>Carousel slide</div>,
    <img src="https://picsum.photos/640/480" />
]

<Carousel slides={slides} />
```

#### Props.options

> Object of [Flickity options](https://flickity.metafizzy.co/options.html) to pass to carousel

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Object</code></td>
    </tr>
</table>

```jsx
const options = {
    contain: true, 
    initialIndex: 1,
    draggable: false
}

<Carousel slides={...} options={options} />
```

#### Props.init

> Overwrite the default `init` method

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Function</code></td>
    </tr>
    <tr>
        <td><b>Default</b></td>
        <td><a href="#init"><code>interactions.init</code></a></td>
    </tr>
</table>

```jsx
<Carousel slides={slides} init={node => {
    // custom toggle event handler logic...
}} />
```

You can import and call the init interaction manually:

```jsx
import { init } from '../../carousel/carousel.js';
```

```jsx
<Carousel slides={slides} init={node => init(node)} />