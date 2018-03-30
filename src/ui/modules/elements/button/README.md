# One-Nexus Button

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)

## Overview

### Quick Look

###### React

```jsx
<Button>Button</Button>
```

###### HTML

```html
<button class="button">Button</button>
```

### Components

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Components) about components

* group

### Modifiers

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Modifiers) about modifiers

* [[...Global modifiers]](https://github.com/esr360/One-Nexus/wiki/Global-Modifiers)
* [[...button.palettes.palette]](#color-palettes)
* [[...button.sizes]](#sizes)
* [block](#TODO)
* [border](#TODO)
* [disabled](#TODO)
* [round](#TODO)
* [oval/circle](#TODO)
* [sharp](#TODO)
* [icon](#TODO)
* [active](#TODO)

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "button": {
        "name": "button",
        "color": ["#COLOR", "greyscale", "white"],
        "background": ["#COLOR", "greyscale", "grey-4"],
        "transition": ["#CORE", "transition"],
        "padding": "0.65em 1em",
        "line-height": "1",
        "font-weight": "normal",
        "font-family": ["#CORE", "font-family"],
        "border-width": "1px",
        "border-style": "solid",
        "disabled-opacity": "0.6",
        "round-radius": "0.4em",
        "group-spacing": "0.5em",
        "group-stack": "break-1",
        "palettes": ["brand", "greyscale", "alert", "social"],
        "border-palettes": false,
        "sizes": ["#TYPOGRAPHY-CONFIG", "sizes"],
        "active": {
            "background": ["#COLOR", "brand", "brand-1"],
            "color": ["#COLOR", "greyscale", "white"]
        },
        "greyscale-text-threshold": 77
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
            <td><code>disabled-opacity</code></td>
            <td>The opacity to be used when a Button has the `disabled` modifier</td>
        </tr>
        <tr>
            <td><code>round-radius</code></td>
            <td>The border-radius to be used when a Button has the `round` modifier</td>
        </tr>
        <tr>
            <td><code>group-spacing</code></td>
            <td>The margin between each Button when contained within a <a href="https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#groupwrap-modules">Group component</a></td>
        </tr>
        <tr>
            <td><code>group-stack</code></td>
            <td>The browser window width at which Buttons within a <a href="https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#groupwrap-modules">Group component</a> should become stacked</td>
        </tr>
        <tr>
            <td><code>palettes</code></td>
            <td>Array of palettes to be used to generate Button colors</td>
        </tr>
        <tr>
            <td><code>border-palettes</code></td>
            <td>Array of palettes to be used to generate Button colors for Buttons with the `border` modifier (falsey value will default to the value used by the `palettes` option)</td>
        </tr>
        <tr>
            <td><code>sizes</code></td>
            <td>Object of font-size to use to generate Buttons</td>
        </tr>
        <tr>
            <td><code>active</code></td>
            <td>Styles for Buttons with a `active` modifier</td>
        </tr>
        <tr>
            <td><code>greyscale-text-threshold</code></td>
            <td>The background-color threshold at which dark text should be applied to a Button with a bright background color</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `button` object in your theme's config file (e.g. [ui/themes/One-Nexus/theme.json](../../../themes/One-Nexus/theme.json)):

```js
{
    "app": {
        "button": {
            ...
        }
    }
}
```

#### Color Palettes

This option accepts a list of palettes defined by the [Colors](https://github.com/esr360/One-Nexus/tree/master/src/ui/modules/utilities/colors) module.

```json
"palettes": ["brand", "greyscale", "alert", "social"]
```

This will create a modifier for each color in each palette, with the color's key as the modifier name.

###### React

```jsx
<Button brand-1>Button</Button>
<Button grey-3>Button</Button>
<Button success>Button</Button>
<Button facebook>Button</Button>
```

###### HTML

```html
<button class="button-brand-1">Button</button>
<button class="button-grey-3">Button</button>
<button class="button-success">Button</button>
<button class="button-facebook">Button</button>
```

If you only want to create modifiers for specific colors in a certain palette, you can pass the keys like so:

```js
"palettes": [
    "brand", 
    {"greyscale": ["grey-1", "grey-3", "grey-4"]}, 
    "alert", 
    {"social": ["facebook", "twitter"]}
]
```

You can also create new palettes:

```js
"palettes": [
    {"foo": "blue", "bar": "#FF5733"}
]
```

Using your new values like so:

###### React

```jsx
<Button foo>Button</Button>
<Button bar>Button</Button>
```

###### HTML

```html
<button class="button-foo">Button</button>
<button class="button-bar">Button</button>
```

#### Sizes

This option accepts an object and will create a modifier for each key using the key's value for the modifier's font-size:

```js
"sizes": {
    "size-1": "0.67em",
    "size-2": "0.83em",
    "size-3": "1.17em",
    "size-4": "1.25em",
    "size-5": "1.5em",
    "size-6": "2em",
    "size-7": "2.4em",
    "size-8": "3em",
    "size-9": "3.4em"
}
```

```jsx
<Button size-8>Button</Button>
```

```html
<button class="button-size-8">Size 8 Button</button>
```

By default, a value of <code>["#TYPOGRAPHY-CONFIG", "sizes"]</code> is passed to the "sizes" option, which will fetch the font sizes from the [Typography module](https://github.com/esr360/One-Nexus/tree/master/src/ui/modules/utilities/typography).

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Interactions

> This module has no interactions

## Rendering

> If you are *not* using React, simply look to the 'Output' section of any example

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

```jsx
<Button>Button</Button>
```

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)

### Button Group

```jsx
<Group>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
</Group>
```

##### Output

```html
<div class="button_group">
    <button class="button">Button</button>
    <button class="button">Button</button>
    <button class="button">Button</button>
</Group>
```