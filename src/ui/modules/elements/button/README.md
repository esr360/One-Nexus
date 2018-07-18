# One-Nexus Button

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Rendering](#rendering)

## Overview

### Quick Look

```jsx
<Button>Button</Button>
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
            <td><a href="#color-palettes">[...button.palettes.palette]</a></td>
            <td>The color palettes to use to generate color modifiers</td>
        </tr>
        <tr>
            <td><a href="#sizes">[...button.sizes]</a></td>
            <td>The different size modifiers for buttons</td>
        </tr>
        <tr>
            <td><code>block</code></td>
            <td>Full-width buttons with centrally aligned text</td>
        </tr>
        <tr>
            <td><code>border</code></td>
            <td>Buttons with transparent background and a border</td>
        </tr>
        <tr>
            <td><code>disabled</code></td>
            <td>Disabled/Opaque buttons</td>
        </tr>
        <tr>
            <td><code>round</code></td>
            <td>Buttons with rounded corners</td>
        </tr>
        <tr>
            <td><code>oval</code> / <code>circle</code></td>
            <td>Buttons with fully rounded corners to form a circular/oval shape</td>
        </tr>
        <tr>
            <td><code>sharp</code></td>
            <td>Force buttons to not have round corners</td>
        </tr>
        <tr>
            <td><code>icon</code></td>
            <td>Used for buttons which contain an icon instead of text</td>
        </tr>
        <tr>
            <td><code>active</code></td>
            <td>Signals that the button is in the <code>active</code> state</td>
        </tr>
    </tbody>
</table>

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
            <td>Object of font sizes to use to generate modifiers (<a href="#sizes">learn more</a>)</td>
        </tr>
        <tr>
            <td><code>active</code></td>
            <td>Styles for Buttons with the <code>active</code> modifier</td>
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
    "theme": {
        "button": {
            ...
        }
    }
}
```

#### Tip: Combine commonly reused modifiers ([Learn More](https://github.com/esr360/Synergy/wiki/Sass-Mixin-%E2%80%93-Extend#overview))

If you are commonly reusing the same combination of modifiers multiple times, you can combine them into a new modifier:

```js
"button" {
    ...
    "combine": {
        "primary" : ["round", "size-4", "brand-1"],
        "social"  : ["icon", "oval", "size-6", "brand-2"]
    }
}
```

##### Usage

```jsx
<Button primary>Button</Button>

// Equivilent to:
<Button round size-4 brand-1>Button</Button>

// Equivilent to:
<Button modifiers={['round', 'size-4', 'brand-1']}>Button</Button>
```

#### Color Palettes

This option accepts a list of palettes defined by the [Colors](https://github.com/esr360/One-Nexus/tree/master/src/ui/modules/utilities/colors) module.

```json
"palettes": ["brand", "greyscale", "alert", "social"]
```

This will create a modifier for each color in each palette, with the color's key as the modifier name.

```jsx
<Button brand-1>Button</Button>
<Button grey-3>Button</Button>
<Button success>Button</Button>
<Button facebook>Button</Button>
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
    {
        "foo": "blue", 
        "bar": "#FF5733"
    }
]
```

Using your new values like so:

```jsx
<Button foo>Button</Button>
<Button bar>Button</Button>
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

By default, a value of <code>["#TYPOGRAPHY-CONFIG", "sizes"]</code> is passed to the "sizes" option, which will fetch the font sizes from the [Typography module](https://github.com/esr360/One-Nexus/tree/master/src/ui/modules/utilities/typography).

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Rendering

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

###### Using `<Button>` Tag

```jsx
<Button>Button</Button>
```

###### Custom Build

```jsx
<Module name="button">Button</Module>
```

###### API

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

#### Pills Group

```jsx
<Group pills>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
</Group>
```

##### Output

```html
<div class="button_group-pills">
    <button class="button">Button</button>
    <button class="button">Button</button>
    <button class="button">Button</button>
</div>
```

#### Round Pills Group

```jsx
<Group round pills>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
</Group>
```

##### Output

```html
<div class="button_group-pills-round">
    <button class="button">Button</button>
    <button class="button">Button</button>
    <button class="button">Button</button>
</div>
```