# One-Nexus Well

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Rendering](#rendering)

## Overview

### Quick Look

```jsx
<Well>Well</Well>
```

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "well": {
        "name": "well",
        "background": "white",
        "border": "1px solid",
        "border-color": ["#COLOR", "opaque", "dark-2"],
        "padding": "1em",
        "color": "inherit",
        "-dark": {
            "background": ["#COLOR", "opaque", "dark-4"],
            "border": "none",
            "color": ["#COLOR", "greyscale", "white"]
        },
        "-round": {
            "border-radius": "0.4em"
        },
        "-border": {
            "background": "transparent"
        }
    }
}
```

Pass custom options to the `well` object in your theme's config file (e.g. [ui/themes/one_nexus.json](../../../themes/one_nexus.json)):

```js
{
    "theme": {
        "well": {
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

* [Basic Example](#basic-example)

#### Basic Example

```jsx
<Well>Well</Well>
```

### API

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [DefaultProps](#defaultprops)

#### DefaultProps

```js
{
    object: true
}
```