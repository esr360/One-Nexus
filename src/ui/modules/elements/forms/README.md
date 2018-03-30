# One-Nexus Form

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)

## Overview

### Quick Look

###### React

```jsx
<Carousel slides={[
    <img src="https://picsum.photos/640/480" />
]} />
```

###### HTML

```html
<div class="carousel">
    <img src="https://picsum.photos/640/480" />
</div>
```

### Components

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Components) about components

* slide

### Modifiers

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Modifiers) about modifiers

* [[...Global modifiers]](https://github.com/esr360/One-Nexus/wiki/Global-Modifiers)
* [hide-pagination](#hide-pagination)

#### Hide-pagination

> Removes the carousel pagination bullets

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "carousel": {
        "name": "carousel",
        "navigationItem": {
            "disable": false,
            "size": ["#FONT-SIZE", "size-10"],
            "background-color": ["#COLOR", "opaque", "light-8"]
        },
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
            <td><code>bullets.size</code></td>
            <td>The size for pagination bullets</td>
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

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Interactions

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-interactions) about module interactions

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

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

```jsx
<Carousel slides={[
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />
]} />
```

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [Props.slides](#propsslides)

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

###### Output

```html
<div class="carousel">
    <img src="https://picsum.photos/640/480" />
    <div>Carousel slide</div>
    <img src="https://picsum.photos/640/480" />
</div>
```