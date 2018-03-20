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

* [[...Global modifiers]](#TODO)
* [callout](#configuration)

### Quick Look

###### React

```jsx
<Blockquote content='This is a blockquote' footer='Optional blockquote footer' />
```

###### HTML

```html
<blockquote class="blockquote">
    <div class="blockquote_content">This is a blockquote</div>
    <div class="blockquote_footer">Optional blockquote footer</div>
</blockquote>
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
* [Blockquote Alerts](#blockquote-alerts)

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
<blockquote class="blockquote">
    <div class="blockquote_content">
        <div>Blockquote content</div>
    </div>
</blockquote>
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
<blockquote class="blockquote">
    <div class="blockquote_content">...</div>
    <div class="blockquote_footer">Optional blockquote footer</div>
</blockquote>
```

### Blockquote Alerts

> The Blockquote module works well in combination with the [Alert](#TODO) module ([learn more](#TODO) about combining modules)

```jsx
<app.Blockquote 
    Alert='success' 
    callout 
    content='Lorem ipsum dolor sit amet' 
    footer='Someone Famous'
/>
```

###### Output:

```html
<blockquote class="blockquote-callout alert-success">
    <div class="blockquote_content">Lorem ipsum dolor sit amet</div>
    <div class="blockquote_footer">Someone Famous</div>
</blockquote>
```