# One-Nexus Carousel

> The One-Nexus carousels use [Flickity](https://flickity.metafizzy.co/)

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)

## Overview

### Components

> [Learn more](#) about components

* slide
* navigationItem
* pagination
* bullet

### Modifiers

> [Learn more](#) about modifiers

* [[...Global modifiers]](#TODO)
* [hide-pagination](#TODO)
* [hide-navigation](#TODO)

#### Hide-pagination

> Removes the carousel pagination bullets

#### Hide-navigation

> Removes the carousel navigation arrows

###### React

```jsx
<Carousel slides={[
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />
]} />
```

###### HTML

```html
<div class="carousel">
    <img src="https://picsum.photos/640/480" />
    <img src="https://picsum.photos/640/480" />
    <img src="https://picsum.photos/640/480" />
    <img src="https://picsum.photos/640/480" />
    <img src="https://picsum.photos/640/480" />
</div>
```

## Configuration

> [Learn more]() about module configutation

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

> Certain values from the above configuration are excluded from the below table ([learn more](#TODO))

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

Pass custom options to the `carousel` object in your theme's config file (e.g. [ui/themes/One-Nexus/theme.json](../../../themes/One-Nexus/theme.json)):

```js
{
    "app": {
        "carousel": {
            ...
        }
    }
}
```

## Styles

> [Learn more]() about module styles

## Interactions

> [Learn more]() about module interactions

> See the [Flickity methods](https://flickity.metafizzy.co/api.html) for available interactions

### Flickity method example

```js
// This should refer to an instantiated One-Nexus carousel
const carousel = document.getElementById('foo');

// Flickity API
UI.carousel(carousel).Flickity.next();
UI.carousel(carousel).Flickity.previous();
```

## Rendering

> If you are *not* using React, simply look to the 'Output' section of any example

> [Learn more]() about rendering modules

```jsx
<Carousel slides={[
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />
]} />
```

* [[...Global props]]()
* [Props.slides](#TODO)
* [Props.options](#TODO)

### Props.slides

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

###### Output:

```html
<div class="carousel">
    <img src="https://picsum.photos/640/480" />
    <img src="https://picsum.photos/640/480" />
    <img src="https://picsum.photos/640/480" />
</div>
```

### Props.options

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
    initialIndex: 1
}

<Carousel slides={...} options={options} />
```

###### Output:

```html
<div class="carousel" data-carousel='{"contain": true, "initialIndex": 1}'>
    ...
</div>
```