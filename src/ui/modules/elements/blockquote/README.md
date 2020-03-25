# One-Nexus Blockquote

* [Quick Look](#quick-look)
* [Configuration](#configuration)
* [API](#api)

## Quick Look

> [Learn more about One-Nexus Modules](#TODO)

```jsx
<Blockquote content='This is a blockquote' footer='Optional blockquote footer' />
```

### Structural Interface [[?]](#TODO)

```jsx
<Module name='blockquote'>
  <Component name='content' />
  <Component name='footer' />
</Module>
```

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about Module configutation

### Default Configuration

<pre>
{
  object: true,
  gutter: theme.tokens.margin,

  'font-family': 'Georgia, serif',

  'is-callout': {
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

### Passing Custom Configuration

> Configuration passed to the `config` prop will be merged into the default configuration

```jsx
<Blockquote config={{ object: false }} {...} />
```

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

> The Blockquote module works well in combination with the [Alert](https://github.com/esr360/One-Nexus/tree/master/src/ui/modules/elements/alert) module ([learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#combining-modules) about combining modules)

```jsx
<Blockquote 
  Alert='success' 
  callout 
  content='Lorem ipsum dolor sit amet' 
  footer='Someone Famous'
/>
```