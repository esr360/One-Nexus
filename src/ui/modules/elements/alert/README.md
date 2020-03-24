# One-Nexus Alert/Notification

* [Overview](#overview)
* [Configuration](#configuration)
* [API](#api)

## Overview

> [Learn more about One-Nexus Modules](https://github.com/esr360/One-Nexus/wiki/Modules)

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
      <td><code>box</code></td>
      <td>Adds a larger padding to the Alert</td>
    </tr>
  </tbody>
</table>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about Module configutation

### Default Configuration

> `modules/elements/Alert/assets/config.js`

<pre>
{
  <a href="TODO">name</a>: 'Alert',
  <a href="TODO">object</a>: true,
  <a href="TODO">gutter</a>: <a href="TODO">theme.tokens.margin</a>,
  <a href="TODO">alert</a>: 'info',
  <a href="TODO">icon</a>: true,

  'color': theme.colors.greyscale.white,
  'padding': '0.85em',

  <a href="TODO">'is-box'</a>: {
    'padding': '1.5em'
  },

  <a href="TODO">alerts</a>: {
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

### `config.alerts` (Alert types)

> Specify the available Alert types

* An Alert type is a color paired with an optoinal icon

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Object.&lt;{ <a href="#alertsalertcolor">color</a>, <a href="#configicon">icon</a> }></code></td>
  </tr>
</table>

##### `alerts[$alert].color`

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>String</code></td>
  </tr>
</table>

##### `alerts[$alert].icon`

* Value should correspond to a [FontAwesome icon](http://fontawesome.io/icons/) name

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>String</code></td>
  </tr>
</table>

### `config.alert`

> Set the default [Alert](#TODO) type

> [This value can be overridden via Props](#TODO)

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>(String|Object&lt;{ <a href="#alertsalertcolor">color</a>, <a href="#alertsalerticon">icon</a> }>)</code></td>
  </tr>
</table>

##### ...as String

* Specify a key from the [Alert type's](#TODO)

##### ...as Object

* Specify a new custom [Alert type](#TODO)

### `config.icon`

> Control the default display of the Alert's icon

> [This value can be overridden via Props](#TODO)

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>(Boolean|String)</code></td>
  </tr>
</table>

##### ...as Boolean

* If `true`, the Alert type's icon ([`alerts[$alert].icon`](#TODO)) will be displayed, if `false` no Alert icon will be displayed

##### ...as String

* Value should correspond to a [FontAwesome icon](http://fontawesome.io/icons/) name

## API

* [`props.alert`](#propsalert)
* [`props.dismiss`](#propsdismiss)
* [`props.icon`](#propsicon)
* [`props.heading`](#propsheading)

#### `props.alert`

> The type/color of the Alert

> Overrides [`config.alert`](#TODO)

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>(String|Object&lt;{ <a href="#alertsalertcolor">color</a>, <a href="#alertsalerticon">icon</a> }>)</code></td>
  </tr>
</table>

###### ...as String

```jsx
<Alert alert='success'>This is an alert</Alert>
```

###### ...as Object

```jsx
<Alert alert={{ color: '#0099FF' , icon: 'exclamation-triangle'}}>This is an alert</Alert>
```

#### `props.icon`

> Overrides [`config.icon`](#TODO)

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>(Boolean|String)</code></td>
  </tr>
</table>

###### ...as Boolean

```jsx
<Alert icon={false} {...}>This is an alert</Alert>
```

###### ...as String

```jsx
<Alert icon='exclamation-triangle' {...}>This is an alert</Alert>
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