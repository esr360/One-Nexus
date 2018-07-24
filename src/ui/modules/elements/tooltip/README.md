# One-Nexus Tooltip

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Rendering](#rendering)

## Overview

### Quick Look

```jsx
<Tooltip content='tooltip content'>Tooltip</Tooltip>
```

###### Internal Interface [[?]](#TODO)

```jsx
<Module name='tooltip' { inline, (top | bottom | left | right) }>
    { content }

    <Component name='wrapper' { (top | bottom | left | right) }>
        <Component name='content' />
    </Component>
</Module>
```

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "tooltip": {
        "name": "tooltip",
        "distance": "-1em",
        "arrow-size": "0.5em",
        "arrow-color": ["#COLOR", "opaque", "dark-8"],
        "content": {
            "max-width": "500px",
            "padding": "0.5em 0.75em",
            "border-radius": "0",
            "line-height": "1.75",
            "background": ["#COLOR", "opaque", "dark-8"],
            "font-size": ["#FONT-SIZE", "size-2", true],
            "font-family": ["#CORE", "font-family"],
            "text-transform": "none",
            "font-weight": "normal",
            "color": "white",
            "transition": ["#CORE", "transition"],
            "z-index": 9999
        }
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
            <td><code>distance</code></td>
            <td>The distance the tooltip should be from the parent object</td>
        </tr>
        <tr>
            <td><code>arrow-size</code></td>
            <td>The size of the tooltip arrow</td>
        </tr>
        <tr>
            <td><code>arrow-color</code></td>
            <td>The color of the tooltip arrow</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `tooltip` object in your theme's config file (e.g. [ui/themes/one_nexus.json](../../../themes/one_nexus.json)):

```js
{
    "theme": {
        "tooltip": {
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
* [Inline Tooltip](#inline-tooltip)
* [Positioned Tooltip](#positioned-tooltip)

#### Basic Example

```jsx
<Tooltip content='tooltip content'>Tooltip</Tooltip>
```

#### Inline Tooltip

> Use when the tooltip parent should be displayed `inline`

```jsx
<p>Lorem ipsum dolor sit amet <Tooltip inline content='tooltip content'>Tooltip</Tooltip>.</p>
```

#### Positioned Tooltip

###### Top Tooltip (default)

```jsx
<Tooltip top content='tooltip content'>Tooltip</Tooltip>
```

###### Bottom Tooltip

```jsx
<Tooltip bottom content='tooltip content'>Tooltip</Tooltip>
```

###### Left Tooltip

```jsx
<Tooltip left content='tooltip content'>Tooltip</Tooltip>
```

###### Right Tooltip

```jsx
<Tooltip right content='tooltip content'>Tooltip</Tooltip>
```

### API

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [DefaultProps](#defaultprops)
* [Props.position](#propsposition)
* [Props.content](#propscontent)

#### DefaultProps

```js
{
    tag: 'span',
    position: 'top'
}
```

#### Props.position

> Sets where the tooltip should appear relative to its parent

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>('top'|'bottom'|'left'|'right)</code></td>
    </tr>
</table>

> See the [Positioned Tooltip](#positioned-tooltip) section for examples

#### Props.content

> Content of the tooltip element

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>(String | <a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a>)</code></td>
    </tr>
</table>

```jsx
<Tooltip content='tooltip element content'>Tooltip parent content</Tooltip>
```