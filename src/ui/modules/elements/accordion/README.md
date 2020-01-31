# One-Nexus Accordion

* [Quick Look](#overview)
* [Default Configuration](#default-configuration)
* [API](#api)

## Quick Look

```jsx
<Accordion panels={[
  { title: 'foo', content: 'bar' },
  { title: 'fizz', content: 'buzz' }
]} />
```

## Default Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```js
{
  object: true,

  title: {
    'background': 'transparent',
    'color': 'grey',
    'border': `1px solid ${theme.colors.opaque['dark-2']}`,
    'padding': '1em',

    'panel-is-active': {
      'background': theme.colors.brand['brand-2'],
      'color': theme.colors.greyscale.white,
      'border-color': 'transparent'
    },

    ':hover': {
      'background': theme.colors.brand['brand-6'],
      'color': theme.colors.greyscale.white
    }
  },

  toggle: {
    'color': theme.colors.opaque['dark-4'],
    'transition': theme.tokens.transition,

    'panel-is-active': {
      'color': theme.colors.greyscale.white
    },

    'title:hover': {
      'color': theme.colors.greyscale.white
    }
  },

  content: {
    'background': 'white',
    'color': 'grey',
    'border': '1px solid rgba(0,0,0, 0.15)',
    'padding': '1.5em',
  }
}
```

Pass custom options to the `Accordion` object in your theme's config file underneath the `modules` entry (e.g. [ui/themes/one_nexus.json](../../../themes/one_nexus.json)):

```js
{
  // TODO
}
```

## API

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [DefaultProps](#defaultprops)
* [Props.panels](#propspanels)
* [Props.toggle](#propstoggle)

#### DefaultProps

```js
{
  object: true,
  toggle: interactions.toggle
}
```

#### Props.panels

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Array</code></td>
  </tr>
</table>

```jsx
const panels = [
  { title: 'foo', content: 'bar' },
  { title: <div>alpha</div>, content: <div>beta</div> }
];

<Accordion panels={panels} />
```

##### Panel.title

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>(String | <a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a>)</code></td>
  </tr>
</table>

##### Panel.content

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

##### Panel.active

> Set panel(s) to be active (open) by default

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Bool</code></td>
  </tr>
</table>

```jsx
<Accordion panels={[
  {title: ..., content: ...}
  {title: ..., content: ..., active: true}
]} />
```

#### Props.toggle

> Overwrite the default `toggle` method

* This method gets called on click of each `title` component

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Function</code></td>
  </tr>
  <tr>
    <td><b>Default</b></td>
    <td><a href="#toggle"><code>interactions.toggle</code></a></td>
  </tr>
</table>

```jsx
<Accordion panels={panels} toggle={event => {
    // custom toggle event handler logic...
}} />
```