# One-Nexus Button

* [Overview](#overview)
* [Configuration](#configuration)
* [API](#api)

## Overview

```jsx
<Button>Button</Button>
```

###### Internal Interface [[?]](#TODO)

```jsx
<Button { $color, $size, block, border, disabled, round, icon, active } />
```

###### Internal Interface - Button Group

```jsx
<Group { pills { round }, stack }>
  <Button />
  ...
</Group>
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
      <td><a href="#TODO"><code>$color</code></a></td>
      <td>TODO</td>
    </tr>
    <tr>
      <td><a href="#TODO"><code>$size</code></a></td>
      <td>TODO</td>
    </tr>
    <tr>
        <td><code>block</code></td>
        <td>Full-width button with centrally aligned text</td>
    </tr>
    <tr>
      <td><code>border</code></td>
      <td>Button with transparent background and a border</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>Disabled button</td>
    </tr>
    <tr>
      <td><code>round</code></td>
      <td>Button with rounded corners</td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td>Used for buttons which contain an icon instead of text</td>
    </tr>
    <tr>
      <td><code>active</code></td>
      <td>Button in the <code>active</code> state</td>
    </tr>
  </tbody>
</table>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

### Default Configuration

<pre>
{
  lightThreshold: 0.55,
  fluidScaling: true,
  sizes: theme.typography.sizes,

  colors: {
    ...theme.colors.brand,
    ...theme.colors.alert,
    ...theme.colors.greyscale,
    ...theme.colors.social
  },

  'color': theme.colors.greyscale.white,
  'color-inverse': theme.colors.opaque['dark-4'],
  'background': theme.colors.brand['brand-1'],
  'transition': theme.tokens.transition,
  'padding-y': '0.65em',
  'padding-x': '1em',
  'line-height': '1',
  'font-weight': 'normal',
  'border-width': '1px',
  'border-style': 'solid',

  hover: {
    'background': prev => Color(prev).desaturate(0.1).lighten(0.2)
  },

  active: {
    'background': theme.colors.brand['brand-1'],
    'color': theme.colors.greyscale.white
  },

  'is-disabled': {
    'opacity': 0.6
  },

  'is-round': {
    'border-radius': '1.2em'
  },

  'in-group': {
    'margin-left': '0.5em'
  },

  group: {
    object: true,
    gutter: theme.tokens.margin,
    stack: theme.grid.breakpoints['break-2']
  }
}
</pre>

### `config.colors`

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

### `config.sizes`

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

## API

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [DefaultProps](#defaultprops)

#### DefaultProps

```js
{
  fluid: true
}
```