# One-Nexus Button

<img width="350px" src="http://www.onenexus.io/github/Button.png" />

<table>
  <thead>
    <th><a href="#overview">Overview</a></th>
    <th><a href="#configuration">Configuration</a></th>
    <th><a href="#API">API</a></th>
  </thead>
  <tr>
    <td><li><a href="#TODO">Live CodeSandbox Demo</a></li></td>
    <td><li><a href="#default-configuration">Default Configuration</a></li></td>
    <td><li><a href="#TODO">Button Group</a></li></td>
  </tr>
  <tr>
    <td><li><a href="#modifiers">Modifiers</a></li></td>
    <td><li><a href="#configlightthreshold"><code>config.lightThreshold</code></a></li></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#configfluidscaling"><code>config.fluidScaling</code></a></li></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#configsizes"><code>config.sizes</code></a></li></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#configcolors"><code>config.colors</code></a></li></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#TODO"><code>config.hover.background</code></a></li></td>
    <td></td>
  </tr>
</table>

## Overview

```jsx
<Button>Button</Button>
```

###### Structural Interface [[?]](#TODO)

```jsx
<Module name='Button' />
```

### [Live CodeSandbox Demo](#TODO)

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

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about Module configutation

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

### `config.lightThreshold`

@TODO

### `config.fluidScaling`

@TODO

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


## API

* [Button Group](#defaultprops)

### Button Group

> [Learn more] about the `<Group>` Module

```jsx
<Group>
  <Button />
  <Button />
  <Button />
</Group>
```