# One-Nexus Alert/Notification

* [Quick Look](#quick-look)
* [Configuration](#configuration)
* [API](#api)

## Quick Look

> [Learn more about One-Nexus Modules](#TODO)

###### Basic

```jsx
<Alert alert='success'>This is an alert</Alert>
```

###### Dismiss Alert

```jsx
const [someCondition, setSomeCondition] = useState(true);

return someCondition && (
  <Alert alert='success' dismiss={() => setSomeCondition(false)}>This is an alert</Alert>
);
```

### Structural Interface [[?]](#TODO)

```jsx
<Module>
  <Component name='dismiss' />
  <Component name='icon' />
  <Component name='heading' />
  <Component name='content' />
</Module>
```

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

> Keep previously opened panels open when toggling a panel

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code><code>Array.&lt;{ <a href="#todo">color</a>, <a href="#panelcontent">icon</a> }></code></code></td>
  </tr>
  <tr>
    <td><b>Default</b></td>
    <td><a href="#">See above table</a></td>
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
* [`props.icon`](#propsicon)
* [`props.dismiss`](#propsdismiss)

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
    <tr>
        <td><b>Default</b></td>
        <td><code>undefined</code></td>
    </tr>
</table>

> Keyword should correspond to a [FontAwesome icon](http://fontawesome.io/icons/) name

```jsx
<Alert icon='exclamation-triangle'>This is an alert</Alert>
```

##### Right-Aligned Icon

```jsx
<Alert icon={['exclamation-triangle', 'right']}>This is an alert</Alert>
```

##### Props.close

> Add a close icon which calls the [`dismiss`](#dismiss) interaction when clicked

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Bool</code></td>
    </tr>
    <tr>
        <td><b>Default</b></td>
        <td><code>false</code></td>
    </tr>
</table>

> If your alert has a close icon, you cannot also have another __right-aligned__ icon

```jsx
<Alert close>This is an alert</Alert>
```

#### `props.dismiss`

> Overwrite the default `dismiss` method

* This method gets called automatically on click of any close `icon` components

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Function</code></td>
    </tr>
    <tr>
        <td><b>Default</b></td>
        <td><a href="#dismiss"><code>interactions.dismiss</code></a></td>
    </tr>
</table>

```jsx
<Alert dismiss={event => {
    // custom dismiss event handler logic...
}} >
    ...
</Alert>
```

You can import and call the dismiss interaction manually:

```jsx
import { dismiss } from '../../alert/alert.js';
```

```jsx
<Alert close dismiss={event => dismiss(event.target)}>...</Alert>
```