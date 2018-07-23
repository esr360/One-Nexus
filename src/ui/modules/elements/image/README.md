# One-Nexus Image

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Rendering](#rendering)

## Overview

* All `<img>` tags have have a `max-width` value of `100%`
* All `<img>` tags have have a `display` value of `block`

### Quick Look

```jsx
<Image src='https://picsum.photos/640/480' />
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
            <td><a href="#center-xy"><code>center-xy</code></a></td>
            <td>Center an image within its parent container</td>
        </tr>
    </tbody>
</table>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "image": {
        "name": "image"
    }
}
```

Pass custom options to the `image` object in your theme's config file (e.g. [ui/themes/One-Nexus/theme.json](../../../themes/One-Nexus/theme.json)):

```js
{
    "theme": {
        "image": {
            ...
        }
    }
}
```

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Rendering

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

* [Examples](#examples)
* [API](#api)

### Examples

* [Using `<Image>` Tag](#using-image-tag)
* [Custom Build](#custom-build)

#### Using `<Image>` Tag

```jsx
<Image src='https://picsum.photos/640/480' />
```

#### Center-XY

```jsx
<Image center-xy src='https://picsum.photos/640/480' />
```

##### Output

```html
<div class="image-center-xy">   
    <img class="image_figure" src="https://picsum.photos/640/480" alt="" />
</div>
```

### API

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)