# One-Nexus Blockquote

* [Overview](#overview)
* [Configuration](#configuration)
* [API](#api)

## Overview

> [Learn more about One-Nexus Modules](https://github.com/esr360/One-Nexus/wiki/Modules)

```jsx
<Blockquote content='This is a blockquote' footer='Optional blockquote footer' />
```

###### Structural Interface [[?]](#TODO)

```jsx
<Module name='Blockquote'>
  <Component name='content' />
  <Component name='footer' />
</Module>
```

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
      <td>TODO</td>
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

* [`props.content`](#propscontent)
* [`props.footer`](#propsfooter)
* [Blockquote Alerts](#blockquote-alerts)

#### `props.content`

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>(String | <a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a>)</code></td>
  </tr>
</table>

```jsx
<Blockquote content={<div>Blockquote content</div>} />
```

#### `props.footer`

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>(String | <a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a>)</code></td>
  </tr>
</table>

```jsx
<Blockquote content={...} footer='Optional blockquote footer'} />
```

#### Blockquote Alerts

> The Blockquote module works well in combination with the [Alert](https://github.com/esr360/One-Nexus/tree/master/src/ui/modules/elements/Alert) module ([learn more](#TODO-combining-modules) about combining modules)

```jsx
<Blockquote 
  Alert={[{ alert: { color: '#3BB85D' } }]}
  callout 
  content='Lorem ipsum dolor sit amet' 
  footer='Someone Famous'
/>
```