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
  <tr>
    <td></td>
    <td><li><a href="#TODO"><code>config.colorInverse</code></a></li></td>
    <td></td>
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

### `config.sizes`

> An object containing the list of available font-sizes to use for the Button Module, which will be passed to the [`fontSize()` utility function]

###### Inside `./assets/styles.js`

```js
'font-size': utils.fontSize(state, config.sizes, theme, config)
```

###### Sample

```js
{
  'size-1': '12px',
  'size-2': '16px',
  'size-3': '20px',
  large: '2em'
}
```

Sizes can be applied by passing the desired key as a [Modifier](#TODO) when using the Button Module:

```jsx
<Button size-1>...</Button>
<Button large>...</Button>
```

> The Button size can be affected by [fluid scalability](#TODO)

### `config.colors`

> An object containing the list of available colors to use for the Button Module

###### Sample

```js
{
  'brand-1': '#2E3882',
  'brand-2': '#06d2ff',
  'brand-3': '#04CEC0',
  success: '#3BB85D'
}
```

Colors can be applied by passing the desired key as a [Modifier](#TODO) when using the Button Module:

```jsx
<Button brand-1>Button</Button>
<Button success>Button</Button>
```

#### Use with `border` Modifier

Color Modifiers are compatible with the [`border` Modifier](#TODO):

```jsx
<Button success border>Button</Button>
```

### `config.hover.background`

> By default this value is a function which determines the hovered Button's background color based off the Button's non-hovered background color, by utilizing [Lucid's Previous Value feature](https://github.com/One-Nexus/Lucid/wiki/Styles#previous-value) and the [`color`](https://www.npmjs.com/package/color) JavaScript library

```js
'background': prev => Color(prev).desaturate(0.1).lighten(0.2)
```

This assumes the logic for a given Button's hovered color is transferable from Button to Button - but this may not neccesserily be the case for your system. It's a neat way to generate dynamic [modifiers](#TODO) with hover states for Button colors, but you may have to create your Button modifiers manually if the logic to determine your hovered colors is non-transferable.

### `config.colorInverse`

> The value to use for the Button's text color if the background contrast becomes too great (determined by [`config.lightThreshold`](#TODO))

### `config.lightThreshold`

> This value determines whether or not to use [`config.colorInverse`](#TODO) as the Button's text color, based on the Button's [background color](#TODO)

### `config.fluidScaling`

> This value determines whether or not Buttons should have [fluid scalability](#TODO)

## API

* [Button Group](#defaultprops)

### Button Group

> [Learn more](#TODO) about the `<Group>` Module

```jsx
<Group>
  <Button />
  <Button />
  <Button />
</Group>
```