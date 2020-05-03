# One-Nexus Container

[IMAGE COMING SOON]

<table>
  <thead>
    <th><a href="#overview">Overview</a></th>
    <th><a href="#configuration">Configuration</a></th>
  </thead>
  <tr>
    <td><li><a href="#TODO">Live CodeSandbox Demo</a></li></td>
    <td><li><a href="#default-configuration">Default Configuration</a></li></td>
  </tr>
  <tr>
    <td><li><a href="#modifiers">Modifiers</a></li></td>
    <td></td>
  </tr>
</table>

## Overview

```jsx
<Container>
  ...
</Container>
```

###### Structural Interface [[?]](#TODO)

```jsx
<Module name='Container' />
```

### [Live CodeSandbox Demo](#TODO)

### Modifiers

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Modifiers) about Modifiers

<table class="table">
  <thead>
    <tr>
      <th>Modifier</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>large</code></td>
      <td>Provides a larger Container (determined by <a href="#default-configuration"><code>config['is-large']</code></a>)</td>
    </tr>
    <tr>
      <td><code>section</code></td>
      <td>Provides internal top and bottom padding to the container (determined by <a href="#default-configuration"><code>config['is-section']</code></a>)</td>
    </tr>
  </tbody>
</table>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

### Default Configuration

> [`modules/elements/Button/assets/config.js`](assets/config.js)

<pre>
{
  name: 'Container',
  object: true,
  gutter: theme.tokens.margin,

  'width': '90%',
  'max-width': theme.grid.breakpoints['break-4'],

  'is-large': {
    'max-width': theme.grid.breakpoints['break-6']
  },

  'is-section': {
    'padding-top': theme.core.margin,
    'padding-bottom': theme.core.margin
  }
}
</pre>