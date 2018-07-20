# One-Nexus Paragraph

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Rendering](#rendering)

## Overview

### Quick Look

```jsx
<Paragraph>Lorem ipsum dolor sit amet...</Paragraph>
```

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "paragraph": {
        "name": "paragraph"
    }
}
```

Pass custom options to the `paragraph` object in your theme's config file (e.g. [ui/themes/one_nexus.json](../../../themes/one_nexus.json)):

```js
{
    "theme": {
        "paragraph": {
            ...
        }
    }
}
```

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Rendering

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

```jsx
<Paragraph>Lorem ipsum dolor sit amet...</Paragraph>
```

###### API

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [defaultProps](#defaultprops)

### defaultProps

```js
{
    object: true,
    tag: 'p'
}
```