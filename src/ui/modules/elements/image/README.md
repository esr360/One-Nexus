# One-Nexus Image

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)

## Overview

* All `<img>` tags have have a `max-width` value of `100%`
* All `<img>` tags have have a `display` value of `block`

### Quick Look

###### React

```jsx
<Image src='https://picsum.photos/640/480' />
```

###### HTML

```html
<div class="image">   
    <img class="image_figure" src="https://picsum.photos/640/480" alt="" />
</div>
```

### Components

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Components) about components

* figure

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
    "app": {
        "image": {
            ...
        }
    }
}
```

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Interactions

> This module has no interactions

## Rendering

> If you are *not* using React, simply look to the 'Output' section of any example

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

```jsx
<Image src='https://picsum.photos/640/480' />
```

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)

### Center-XY

```jsx
<Image center-xy src='https://picsum.photos/640/480' />
```

##### Output

```html
<div class="image-center-xy">   
    <img class="image_figure" src="https://picsum.photos/640/480" alt="" />
</div>
```