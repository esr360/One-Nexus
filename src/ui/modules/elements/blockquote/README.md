# One-Nexus Blockquote

<img width="750px" src="http://www.onenexus.io/github/Blockquote.png" />

<table>
  <thead>
    <th><a href="#overview">Overview</a></th>
    <th><a href="#configuration">Configuration</a></th>
    <th><a href="#API">API</a></th>
  </thead>
  <tr>
    <td><li><a href="#TODO">Live CodeSandbox Demo</a></li></td>
    <td><li><a href="#default-configuration">Default Configuration</a></li></td>
    <td><li><a href="#propssource"><code>props.source</code></a></li></td>
  </tr>
  <tr>
    <td><li><a href="#modifiers">Modifiers</a></li></td>
    <td></td>
    <td><li><a href="#blockquote-alerts">Blockquote Alerts</a></li></td>
  </tr>
</table>

## Overview

> [Learn more about One-Nexus Modules](https://github.com/esr360/One-Nexus/wiki/Modules)

```jsx
<Blockquote source='Optional Blockquote source'>This is a Blockquote</Blockquote>
```

###### Structural Interface [[?]](#TODO)

```jsx
<Module name='Blockquote'>
  <Component name='body' />
  <Component name='footer' />
</Module>
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
      <td><code>callout</code></td>
      <td>Add some prominence to the Blockquote</td>
    </tr>
  </tbody>
</table>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about Module configutation

### Default Configuration

> [`modules/elements/Blockquote/assets/config.js`](assets/config.js)

<pre>
{
  <a href="TODO">name</a>: 'Blockquote',
  <a href="TODO">object</a>: true,
  <a href="TODO">gutter</a>: <a href="TODO">theme.tokens.margin</a>,

  'font-family': 'Georgia, serif',

  <a href="#modifiers">'is-callout'</a>: {
    'padding': '0.5em 0.75em',
    'font-size': theme.typography.sizes['size-5'],
    'border-left': '7px solid',
    'border-left-color': theme.colors.opaque['dark-1']
  },

  footer: {
    'font-size': theme.typography.sizes['size-2'],
    'font-style': 'italic',
    'color': theme.colors.opaque['dark-4']
  }
}
</pre>

## API

* [`props.source`](#propssource)
* [Blockquote Alerts](#blockquote-alerts)

### `props.source`

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>(String | <a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a>)</code></td>
  </tr>
</table>

```jsx
<Blockquote source='Optional Blockquote source'>...</Blockquote>
```

This is syntactic sugar for:

```jsx
<Blockquote footer={{ content: 'Optional Blockquote source' }}>...</Blockquote>
```

### Blockquote Alerts

The Blockquote module works well in combination with the [Alert](https://github.com/esr360/One-Nexus/tree/master/src/ui/modules/elements/Alert) Module ([learn more](#TODO-combining-modules) about combining modules).

```jsx
<Blockquote as={Alert} callout success source='Someone Famous' icon={{ display: 'none' }}>
  This is a hybrid Blockquote/Alert
</Blockquote>
```

<img width="750px" src="http://www.onenexus.io/github/Blockquote--Alert.png" />