# One-Nexus Image

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Rendering](#rendering)

## Overview

### Quick Look

```jsx
<List>
    <ListItem>List item</ListItem>
    <ListItem>List item</ListItem>
    <ListItem>List item</ListItem>
</List>
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
            <td><code>reset</code></td>
            <td>Removes `padding-left` and `list-style` from the list</td>
        </tr>
        <tr>
            <td><code>clear</code></td>
            <td>Removes the default left padding applied to lists</td>
        </tr>
        <tr>
            <td><code>inline</code></td>
            <td>Aligns list items inline with each other</td>
        </tr>
        <tr>
            <td><code>divider</code></td>
            <td>Spaces list items out more with a line divider</td>
        </tr>
        <tr>
            <td><code>arrow</code></td>
            <td>Replaces default bullet style with a <a href="#TODO">FontAwesome</a> icon</td>
        </tr>
        <tr>
            <td><code>group</code></td>
            <td>Spaces list items out more</td>
        </tr>
    </tbody>
</table>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "list": {
        "name": "list",
        "inline-spacing": "1em",
        "arrow-icon": "'\\f138'",
        "arrow-color": ["#COLOR", "brand", "brand-1"]
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
            <td><code>inline-spacing</code></td>
            <td>The space between list items contained within a list which has the <code>inline</code> modifier</td>
        </tr>
        <tr>
            <td><code>arrow-icon</code></td>
            <td>The <a href="http://astronautweb.co/snippet/font-awesome/" target="blank">content value</a> for a FontAwesome icon</td>
        </tr>
        <tr>
            <td><code>arrow-color</code></td>
            <td>The color for the above FontAwesome icon</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `list` object in your theme's config file (e.g. [ui/themes/One-Nexus/theme.json](../../../themes/One-Nexus/theme.json)):

```js
{
    "theme": {
        "list": {
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
<List reset inline>
    <List.Item>List item</List.Item>
    <List.Item>List item</List.Item>
    <List.Item>List item</List.Item>
</List>
```

###### API

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [defaultProps](#defaultprops)
* [Static Item](#TODO)

### defaultProps

```js
{
    tag: 'ul'
}
```

### Static Item

> Used for creating [items in a list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)

```jsx
<List.Item>List item</List.Item>
```