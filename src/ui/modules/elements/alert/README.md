# One-Nexus Alert/Notification

* [Overview](#overview)
* [Configuration](#configuration)
* [API](#api)

## Overview

> [Learn more about One-Nexus Modules](#TODO)

```jsx
<Alert alert='success'>This is an alert</Alert>
```

###### Structural Interface [[?]](#TODO)

```jsx
<Module name='Alert'>
  <Component name='icon' /> {children}
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
      <td><<code>box</code></td>
      <td>Adds a larger padding to the Alert</td>
    </tr>
  </tbody>
</taboe>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about Module configutation

### Default Configuration

<pre>
{
  object: true,
  gutter: theme.tokens.margin,
  default: 'info',
  icon: true,

  'color': theme.colors.greyscale.white,
  'padding': '0.85em',

  'is-box': {
    'padding': '1.5em'
  },

  alerts: {
    error: {
      color: theme.colors.alert.error,
      icon: 'times'
    },
    success: {
      color: theme.colors.alert.success,
      icon: 'check'
    },
    info: {
      color: theme.colors.alert.info,
      icon: 'info-circle'
    },
    help: {
      color: theme.colors.alert.help,
      icon: 'question-circle'
    }
  },

  content: {
    'margin-top': `calc(${theme.tokens.margin}/2)`,
    'padding-top': `calc(${theme.tokens.margin}/2)`,
    'border-top': `1px solid ${theme.colors.opaque['dark-1']}`
  }
}
</pre>

### `config.alerts`

> @TODO

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code><code>Array.&lt;{ <a href="#todo">color</a>, <a href="#panelcontent">icon</a> }></code></code></td>
  </tr>
</table>

### `config.default`

@TODO

### `config.icon`

@TODO

### Passing Custom Configuration

> Configuration passed to the `config` prop will be merged into the default configuration

```jsx
<Alert config={{ icon: false }} alert='success' />
```

## API

* [`props.alert`](#propsalert)
* [`props.dismiss`](#propsdismiss)
* [`props.icon`](#propsicon)
* [`props.heading`](#propsheading)

#### `props.alert`

> The type/color of alert

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>String</code></td>
  </tr>
  <tr>
    <td><b>Default</b></td>
    <td><code>'success'</code></td>
  </tr>
</table>

> Available values are set in the [module's configuration](#configuration)

```jsx
<Alert alert='success'>This is an alert</Alert>
```

#### `props.icon`

> Add an icon to the alert

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>(String|Array)</code></td>
  </tr>
</table>

> Keyword should correspond to a [FontAwesome icon](http://fontawesome.io/icons/) name

```jsx
<Alert icon='exclamation-triangle'>This is an alert</Alert>
```

#### `props.dismiss`

> Allow the Alert to be dismissable

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Function</code></td>
  </tr>
</table>

```jsx
const [someCondition, setSomeCondition] = useState(true);

return someCondition && (
  <Alert alert='success' dismiss={() => setSomeCondition(false)}>This is an alert</Alert>
);
```

###### Structural Interface [[?]](#TODO)

```jsx
<Module>
  <Component name='icon' /> {children} <Component name='dismiss' />
</Module>
```

#### `props.heading`

> Pass a heading to an Alert

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>(String | <a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a>)</code></td>
  </tr>
</table>

```jsx
<Alert alert='success' heading='Alert Heading'>This is an alert</Alert>
```

###### Structural Interface [[?]](#TODO)

```jsx
<Module>
  <Component name='icon' />
  <Component name='heading' />
  <Component name='content'>{children}</Component>
</Module>
```