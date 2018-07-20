# One-Nexus Progress-Bar

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Rendering](#rendering)

## Overview

### Quick Look

```jsx
<ProgressBar max={100} value={50} />
```

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "progress-bar": {
        "name": "progress-bar",
        "background": ["#COLOR", "opaque", "dark-1"],
        "height": "1.5em",
        "border-radius": "0",
        "fill-background": ["#COLOR", "brand", "brand-1"],
        "value-color": ["#COLOR", "greyscale", "white"],
        "value-size": ["#FONT-SIZE", "size-2"]
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
            <td><code>fill-background</code></td>
            <td>The fill color of the progress bar</td>
        </tr>
        <tr>
            <td><code>value-color</code></td>
            <td>The color of the progress value text</td>
        </tr>
        <tr>
            <td><code>value-size</code></td>
            <td>The font size of the progress value text</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `progress-bar` object in your theme's config file (e.g. [ui/themes/one_nexus.json](../../../themes/one_nexus.json)):

```js
{
    "theme": {
        "progress-bar": {
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
<ProgressBar max={100} value={50} text='Almost there...' />
```

###### API

> `max` and `value` are part of the standard [HTML `<progress>` element API](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#Attributes)

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [defaultProps](#defaultprops)
* [Props.text](#propstoggle)

### defaultProps

```js
{
    object: true,
    tag: 'progress'
}
```

### Props.text

> Text value for the progress-bar

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>String</code></td>
    </tr>
</table>