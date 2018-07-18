# One-Nexus Blockquote

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Rendering](#rendering)

## Overview

### Quick Look

```jsx
<Blockquote content='This is a blockquote' footer='Optional blockquote footer' />
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
            <td><a href="#configuration"><code>callout</code></a></td>
            <td>Alternative style for blockquote</td>
        </tr>
    </tbody>
</table>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "blockquote": {
        "name": "blockquote",
        "font-family": ["Georgia", "serif"],
        "-callout": {
            "padding": "0.5em 0.75em",
            "font-size": ["#FONT-SIZE", "size-5"],
            "border-left": "7px solid",
            "border-left-color": ["#COLOR", "opaque", "dark-1"]
        },
        "footer": {
            "font-size": ["#FONT-SIZE", "size-2"],
            "font-style": "italic",
            "color": ["#COLOR", "opaque", "dark-4"]
        }
    }
}
```

Pass custom options to the `blockquote` object in your theme's config file (e.g. [ui/themes/One-Nexus/theme.json](../../../themes/One-Nexus/theme.json)):

```js
{
    "theme": {
        "blockquote": {
            ...
        }
    }
}
```

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Rendering

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

###### Using `<Blockquote>` Tag

```jsx
<Blockquote content='This is a blockquote' footer='Optional blockquote footer' />
```

###### Custom Build

```jsx
<Module name="blockquote">
    <Component name='content'>This is a blockquote</Component>
    <Component name='footer'>Optional blockquote footer</Component>
</Module>
```

###### API

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [Props.content](#propscontent)
* [Props.footer](#propsfooter)
* [Blockquote Alerts](#blockquote-alerts)

### Props.content

<table>
    <tr>
        <td><b>Type</b></td>
        <td><a href="https://reactjs.org/docs/glossary.html#elements">React Element</td>
    </tr>
</table>

```jsx
<Blockquote content={<div>Blockquote content</div>} />
```

### Props.footer

<table>
    <tr>
        <td><b>Type</b></td>
        <td><a href="https://reactjs.org/docs/glossary.html#elements">React Element</td>
    </tr>
</table>

```jsx
<Blockquote content={...} footer='Optional blockquote footer'} />
```

### Blockquote Alerts

> The Blockquote module works well in combination with the [Alert](https://github.com/esr360/One-Nexus/tree/master/src/ui/modules/elements/alert) module ([learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#combining-modules) about combining modules)

```jsx
<app.Blockquote 
    Alert='success' 
    callout 
    content='Lorem ipsum dolor sit amet' 
    footer='Someone Famous'
/>
```