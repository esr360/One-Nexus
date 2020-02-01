# One-Nexus Accordion

* [Quick Look](#overview)
* [Configuration](#configuration)
* [API](#api)
* [Use Outside of One-Nexus](#use-outside-of-one-nexus)

## Quick Look

###### Multi-Panel

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

###### [[Upcoming Feature]](#TODO) Single-Panel

```jsx
<Accordion title='foo' content='bar' />
```

### Structural Interface [[?]](#TODO)

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

##### Components [[?]](#TODO)

* ###### panel
* ###### title
* ###### toggle
* ###### content

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about Module configutation

### Default Configuration

<pre>
{
  <a href="#configpersist">persist</a>: true,
  <a href="#todo">object</a>: true,

  <a href="#title">title</a>: {
    'background': 'transparent',
    'color': 'grey',
    'border': `1px solid ${theme.colors.opaque['dark-2']}`,
    'padding': '1em',

    'panel-is-active'<a href="https://github.com/One-Nexus/Lucid/wiki/Context#accessing-parents-state">[?]</a>: {
      'background': theme.colors.brand['brand-2'],
      'color': theme.colors.greyscale.white,
      'border-color': 'transparent'
    },

    ':hover'<a href="https://github.com/One-Nexus/Lucid/wiki/Styles#hover">[?]</a>: {
      'background': theme.colors.brand['brand-6'],
      'color': theme.colors.greyscale.white
    }
  },

  <a href="#toggle">toggle</a>: {
    'color': theme.colors.opaque['dark-4'],
    'transition': theme.tokens.transition,

    'panel-is-active'<a href="https://github.com/One-Nexus/Lucid/wiki/Context#accessing-parents-state">[?]</a>: {
      'color': theme.colors.greyscale.white
    },

    'title:hover'<a href="https://github.com/One-Nexus/Lucid/wiki/Context#accessing-parents-state">[?]</a>: {
      'color': theme.colors.greyscale.white
    }
  },

  <a href="#content">content</a>: {
    'background': 'white',
    'color': 'grey',
    'border': '1px solid rgba(0,0,0, 0.15)',
    'padding': '1.5em',
  }
}
</pre>

### `config.persist`

> Keep previously opened panels open when toggling a panel

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Boolean</code></td>
  </tr>
</table>

### Custom Configuration

> [Learn how to pass custom configuration to your Modules](#TODO)

## API

* [`props.panels`](#propspanels)

### `props.panels`

> The unique data sections that form the [Accordion panel components](#panel)

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Array.&lt;{ <a href="#paneltitle">title</a>, <a href="#panelcontent">content</a>, <a href="#panelid">id</a>, <a href="#panelcallback">active</a>, <a href="#panelcallback">callback</a> }></code></td>
  </tr>
</table>

#### `panel.title`

> The content to use for the [title Component](#title) of the Accordion panel

<table>
  <tr>
    <td><b>Type</b></td>
    <td>(<code>String</code> | <code><a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a></code>)</td>
  </tr>
</table>

#### `panel.content`

> The content to use for the [content Component](#content) of the Accordion panel

<table>
  <tr>
    <td><b>Type</b></td>
    <td>(<code>String</code> | <code><a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a></code>)</td>
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

## Use Outside of One-Nexus

```bash
npm install --save @one-nexus/modules
```

```jsx
import React from 'react';
import { Accordion } from '@one-nexus/modules';

const Screen = () => (
  <Accordion { ... } />
);

export default Screen;
```