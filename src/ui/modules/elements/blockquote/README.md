# One-Nexus Blockquote

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)

## Overview

### Components

> [Learn more](#) about components

* content
* footer

### Modifiers

> [Learn more](#) about modifiers

* [...Global modifiers]()
* [callout](#configuration)

### Quick Look

###### React

```jsx
<Blockquote content='This is a blockquote' footer='Optional blockquote footer' />
```

###### HTML

```html
<div class="blockquote">
    <div class="blockquote_content">This is a blockquote</div>
    <div class="blockquote_footer">Optional blockquote footer</div>
</div>
```

## Configuration

> [Learn more]() about module configutation

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
    "app": {
        "blockquote": {
            ...
        }
    }
}
```

## Styles

> [Learn more]() about module styles

## Interactions

> This module has no interactions

## Rendering

> [Learn more]() about rendering modules

```jsx
<Blockquote content='This is a blockquote' />
```

* [[...Global props]]()
* [Props.content](#propscontent)
* [Props.footer](#propsfooter)

### Props.content

<table>
    <tr>
        <td><b>Type</b></td>
        <td>JSX</td>
    </tr>
</table>

```jsx
<Blockquote content={<div>Blockquote content</div>} />
```

###### Output:

```html
<div class="blockquote">
    <div class="blockquote_content">
        <div>Blockquote content</div>
    </div>
</div>
```

### Props.footer

<table>
    <tr>
        <td><b>Type</b></td>
        <td>JSX</td>
    </tr>
</table>

```jsx
<Blockquote content={...} footer='Optional blockquote footer'} />
```

###### Output:

```html
<div class="blockquote">
    <div class="blockquote_content">...</div>
    <div class="blockquote_footer">Optional blockquote footer</div>
</div>
```