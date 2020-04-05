# One-Nexus Alert/Notification

<img width="750px" src="http://www.onenexus.io/github/Alert.png" />

<table>
  <thead>
    <th><a href="#overview">Overview</a></th>
    <th><a href="#configuration">Configuration</a></th>
    <th><a href="#API">API</a></th>
  </thead>
  <tr>
    <td><li><a href="#TODO">Live CodeSandbox Demo</a></li></td>
    <td><li><a href="#default-configuration">Default Configuration</a></li></td>
    <td><li><a href="#propsalerttype"><code>props[$alertType]</code></a></li></td>
  </tr>
  <tr>
    <td><li><a href="#modifiers">Modifiers</a></li></td>
    <td><li><a href="#configalerts-alert-types"><code>config.alerts</code></a></li></td>
    <td><li><a href="#propsdismiss"><code>props.dismiss</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#configiconglyph"><code>config.icon.glyph</code></a></li></td>
    <td><li><a href="#propsheading"><code>props.heading</code></a></li></td>
  </tr>
</table>

## Overview

> [Learn more about One-Nexus Modules](https://github.com/esr360/One-Nexus/wiki/Modules)

```jsx
<Alert success>This is an alert</Alert>
```

###### Structural Interface [[?]](#TODO)

```jsx
<Module name='Alert'>
  <Icon as='icon' /> {children}
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
      <td><code><a href="#propsalerttype">[$alertType]</a></code></td>
      <td>Any available <a href="#configalerts-alert-types">Alert Type</a></td>
    </tr>
    <tr>
      <td><code>box</code></td>
      <td>Adds a larger padding to the Alert</td>
    </tr>
  </tbody>
</table>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about Module configutation

### Default Configuration

> [`modules/elements/Alert/assets/config.js`](assets/config.js)

<pre>
{
  <a href="TODO">name</a>: 'Alert',
  <a href="TODO">object</a>: true,
  <a href="TODO">gutter</a>: <a href="TODO">theme.tokens.margin</a>,

  'background-color': theme.colors.alert.info,
  'color': theme.colors.greyscale.white,
  'padding': '0.85em',

  <a href="#modifiers">'is-box'</a>: {
    'padding': '1.5em'
  },

  <a href="#configalerts-alert-types">alerts</a>: {
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

  icon: {
    <a href="#configiconglyph">glyph</a>: 'info-circle'
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

* An Alert type is a color paired with an optional icon

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Object.&lt;{ <a href="#alertsalerttypecolor">color</a>, <a href="#alertsalerttypeicon">icon</a> }></code></td>
  </tr>
</table>

##### `alerts[$alertType].color`

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>String</code></td>
  </tr>
</table>

##### `alerts[$alertType].icon`

* Value should correspond to a [FontAwesome icon](http://fontawesome.io/icons/) name

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>String</code></td>
  </tr>
</table>

##### Example

```js
{
  [$alertType]: {
    color: '#0099FF',
    icon: 'exclamation-triangle'
  },
  ...
}
```

### `config.icon.glyph`

> Control the default Alert icon

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>String</code></td>
  </tr>
</table>

* Value should correspond to a [FontAwesome icon](http://fontawesome.io/icons/) name

###### Override via Props

```jsx
<Alert icon={{ glyph: 'exclamation-triangle' }} {...} />
```

###### Disable Alert Icon

There is no dedicated API for disabling the icon as it can be done easily using [styles](#TODO):

```jsx
<Alert icon={{ glyph: 'exclamation-triangle', display: 'none' }} {...} />
```

## API

* [`props[$alertType]`](#propsalerttype)
* [`props.dismiss`](#propsdismiss)
* [`props.heading`](#propsheading)

#### `props[$alertType]`

> The type of the Alert

* Pass a [Modifier Prop](#TODO) whose value corresponds to an [Alert Type](#configalerts-alert-types)

```jsx
<Alert success {...} />
```

```jsx
<Alert error {...} />
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
  <Alert success dismiss={() => setSomeCondition(false)}>This is an alert</Alert>
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
<Alert box info heading='Alert Heading'>This is an <b>info</b> alert box</Alert>
```

This is syntactic sugar for:

```jsx
<Alert box info header={{ content: 'Alert Heading' }}>This is an <b>info</b> alert box</Alert>
```

<img width="750px" src="http://www.onenexus.io/github/Alert--box.png" />

###### Structural Interface [[?]](#TODO)

```jsx
<Module name='Alert'>
  <Icon as='icon' />
  <Component name='header' />
  <Component name='body'>{children}</Component>
</Module>
```