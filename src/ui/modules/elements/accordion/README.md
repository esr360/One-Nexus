# One-Nexus Accordion

* [Overview](#overview)
* [Configuration](#configuration)
* [API](#api)

## Overview

> [Learn more about One-Nexus Modules](https://github.com/esr360/One-Nexus/wiki/Modules)

```jsx
<Accordion panels={[
  { 
    title: 'foo', 
    content: 'bar' 
  },
  { 
    title: 'fizz', 
    content: 'buzz' 
  }
]} />
```

###### Structural Interface [[?]](#TODO)

```jsx
<Module>
  <Component name='panel' { active }>
    <Component name='title'>
      <Component name='toggle' />
    </Component>

    <Component name='content' />
  </Component>
  ...
</Module>
```

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about Module configutation

### Default Configuration

<pre>
{
  <a href="TODO">object</a>: true,
  <a href="TODO">gutter</a>: <a href="TODO">theme.tokens.margin</a>,
  <a href="#configpersist">persist</a>: true,

  title: {
    'background': 'transparent',
    'color': 'grey',
    'border': `1px solid ${<a href="TODO">theme.colors.opaque['dark-2']</a>}`,
    'padding': '1em',

    'panel-is-active'<a href="https://github.com/One-Nexus/Lucid/wiki/Context#accessing-parents-state">[?]</a>: {
      'background': <a href="TODO">theme.colors.brand['brand-2']</a>,
      'color': <a href="TODO">theme.colors.greyscale.white</a>,
      'border-color': 'transparent'
    },

    ':hover'<a href="https://github.com/One-Nexus/Lucid/wiki/Styles#hover">[?]</a>: {
      'background': <a href="TODO">theme.colors.brand['brand-3']</a>,
      'color': <a href="TODO">theme.colors.greyscale.white</a>
    }
  },

  toggle: {
    'color': <a href="TODO">theme.colors.opaque['dark-4']</a>,
    'transition': <a href="TODO">theme.tokens.transition</a>,

    'panel-is-active'<a href="https://github.com/One-Nexus/Lucid/wiki/Context#accessing-parents-state">[?]</a>: {
      'color': <a href="TODO">theme.colors.greyscale.white</a>
    },

    'title:hover'<a href="https://github.com/One-Nexus/Lucid/wiki/Context#accessing-parents-state">[?]</a>: {
      'color': <a href="TODO">theme.colors.greyscale.white</a>
    }
  },

  content: {
    'background': 'white',
    'color': 'grey',
    'border': `1px solid ${<a href="TODO">theme.colors.opaque['dark-2']</a>}`,
    'padding': '1.5em',
  }
}
</pre>

### `config.persist`

> Set the default [Persist](#propspersist) value

> [This value can be overridden via Props](#propspersist)

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Boolean</code></td>
  </tr>
</table>

## API

* [`props.panels`](#propspanels)
* [`props.persist`](#propspanels)

### `props.panels`

> The unique data sections that form the Accordion panel components

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Array.&lt;{ <a href="#paneltitle">title</a>, <a href="#panelcontent">content</a>, <a href="#panelid">id</a>, <a href="#panelcallback">active</a>, <a href="#panelcallback">callback</a> }></code></td>
  </tr>
</table>

#### `panel.title`

> The content to use for the title Component of the Accordion panel

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>(String | <a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a>)</code></td>
  </tr>
</table>

#### `panel.content`

> The content to use for the content Component of the Accordion panel

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>(String | <a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a>)</code></td>
  </tr>
</table>

Accordions can be nested:

```jsx
<Accordion panels={[
  {title: ..., content: 'alpha'},
  {title: ..., content: (
    <Accordion panels={[
      {title: ..., content: 'beta'},
      {title: ..., content: (
        <Accordion panels={[
          {title: ..., content: 'gamma'},
          {title: ..., content: <div>potato</div>}
        ]} />
      )}
    ]} />
  )},
  {title: ..., content: <div>buzz</div>}
]} />
```

#### `panel.id`

> Use if panels are prone to changing after initial render to preserve correct state

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>String</code></td>
  </tr>
</table>

#### `panel.active`

> Set panel(s) to be active (open) by default

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Boolean</code></td>
  </tr>
</table>

```jsx
<Accordion panels={[
  {title: ..., content: ...}
  {title: ..., content: ..., active: true}
]} />
```

#### `panel.callback`

> Callback function to call on panel toggle

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Function(state: 'open' | 'close')</code></td>
  </tr>
</table>

###### Example

```jsx
<Accordion panels={[
  ...
  {
    title: ..., 
    content: ..., 
    callback: (state) => {
      if (state === 'open') {
        // do something
      }

      if (state === 'close') {
        // do something
      }
    }
  }
]} />
```

### `props.persist`

> Keep previously opened panels open when toggling a panel

> Overrides [`config.persist`](#configpersist)

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Boolean</code></td>
  </tr>
</table>