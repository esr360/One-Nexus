# One-Nexus Accordion

* [Quick Look](#overview)
* [Configuration](#configuration)
* [API](#api)

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

### Internal Interface [[?]](#TODO)

```jsx
<Module { persist }>
  <Component name='panel' { active }>
    <Component name='title' />
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
  <a href="#configpersist">persist</a>: true,
  <a href="#todo">object</a>: true,

  <a href="#paneltitle">title</a>: {
    'background': 'transparent',
    'color': 'grey',
    'border': `1px solid ${theme.colors.opaque['dark-2']}`,
    'padding': '1em',

    <a href="https://github.com/One-Nexus/Lucid/wiki/Context#accessing-parents-state">'panel-is-active'</a>: {
      'background': theme.colors.brand['brand-2'],
      'color': theme.colors.greyscale.white,
      'border-color': 'transparent'
    },

    <a href="https://github.com/One-Nexus/Lucid/wiki/Styles#hover">':hover'</a>: {
      'background': theme.colors.brand['brand-6'],
      'color': theme.colors.greyscale.white
    }
  },

  toggle: {
    'color': theme.colors.opaque['dark-4'],
    'transition': theme.tokens.transition,

    <a href="https://github.com/One-Nexus/Lucid/wiki/Context#accessing-parents-state">'panel-is-active'</a>: {
      'color': theme.colors.greyscale.white
    },

    <a href="https://github.com/One-Nexus/Lucid/wiki/Context#accessing-parents-state">'title:hover'</a>: {
      'color': theme.colors.greyscale.white
    }
  },

  <a href="#panelcontent">content</a>: {
    'background': 'white',
    'color': 'grey',
    'border': '1px solid rgba(0,0,0, 0.15)',
    'padding': '1.5em',
  }
}
</pre>

### Config.persist

> Keep previously opened panels open when toggling a panel

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Boolean</code></td>
  </tr>
</table>

### Custom Configuration Via Theme

Pass custom configuration to the `Accordion` object in your [theme](https://github.com/esr360/One-Nexus/wiki/Themes) underneath the `modules` entry:

```js
{
  ...

  modules: {
    Accordion: {
      ...
    }
  }
}
```
### Custom Configuration - Inline

Pass custom configuration to the `Accordion` Component when using it (this will override any [default](#default-configuration) and [theme](#custom-configuration-via-theme) configuration):

```jsx
<Accordion config={{ ... }} panels={[
  ...
]} />
```

## API

* [Props.panels](#propspanels)

### Props.panels

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Array.&lt;{ <a href="#paneltitle">title</a>, <a href="#panelcontent">content</a>, <a href="#panelid">id</a>, <a href="#panelcallback">active</a>, <a href="#panelcallback">callback</a> }></code></td>
  </tr>
</table>

#### Panel.title

<table>
  <tr>
    <td><b>Type</b></td>
    <td>(<code>String</code> | <code><a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a></code>)</td>
  </tr>
</table>

#### Panel.content

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

#### Panel.id

> Use if panels are prone to changing after initial render to preserve correct state

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>String</code></td>
  </tr>
</table>

#### Panel.active

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

#### Panel.callback

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