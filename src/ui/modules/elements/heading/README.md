# One-Nexus Heading

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)

## Overview

### Quick Look

###### React

```jsx
<Heading>Heading</Heading>
```

###### HTML

```html
<h3 class="heading">Button</h3>
```

### Components

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Components) about components

* group

### Modifiers

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Modifiers) about modifiers

* [[...Global modifiers]](https://github.com/esr360/One-Nexus/wiki/Global-Modifiers)
* [[...button.sizes]](#sizes)
* [heavy](#TODO)
* [light](#TODO)
* [uppercase](#TODO)
* [flush](#TODO)

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "heading": {
        "name": "heading",
        "group_heading-lineHeight": 0.8,
        "sizes": ["#TYPOGRAPHY-CONFIG", "sizes"]
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
            <td><code>group_heading-lineHeight</code></td>
            <td>Line-height for heading inside a <code>group</code> component</td>
        </tr>
        <tr>
            <td><code>sizes</code></td>
            <td>Object of font-size to use to generate Buttons (<a href="#sizes">learn more</a>)</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `heading` object in your theme's config file (e.g. [ui/themes/One-Nexus/theme.json](../../../themes/One-Nexus/theme.json)):

```js
{
    "app": {
        "heading": {
            "sizes": {
                "small": "8px",
                "large": "20px"
            }
        }
    }
}
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
<Heading>Button</Heading>
```

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)

### Button Group

```jsx
<Group>
    <Heading heading={2}>Primary Heading</Heading>
    <Heading heading={3}>Secondary heading</Heading>
</Group>
```

##### Output

```html
<div class="heading_group">
    <h2 class="heading">Primary heading</h2>
    <h3 class="heading">Secondary heading</h3>
</Group>
```

### Flushed Headings (no margin)

```css
margin-top: 0 !important;
margin-bottom: 0 !important;
```

```jsx
<Heading flush>Flushed Heading</Heading>
```

##### Output

```html
<h3 class="heading-flush">Flushed Heading</h3>
```