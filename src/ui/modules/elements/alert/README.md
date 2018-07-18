# One-Nexus Alert

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)

## Overview

### Quick Look

```jsx
<Alert>This is an alert</Alert>
```

### Modifiers

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Modifiers) about modifiers

<table class="table">
    <thead>
        <tr>
            <th>Modifier</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="https://github.com/esr360/One-Nexus/wiki/Global-Modifiers">[...Global modifiers]</a></td>
            <td>Modifiers that can be applied to any module</td>
        </tr>
        <tr>
            <td><a href="#configuration">[...alert.alerts]</a></td>
            <td>The different type/styles of alerts</td>
        </tr>
        <tr>
            <td><a href="#configuration"><code>bar</code></a></td>
            <td>Regular alert bar (applied by default)</td>
        </tr>
        <tr>
            <td><a href="#configuration"><code>box</code></a></td>
            <td>Alternative to <code>bar</code> - has more padding</td>
        </tr>
    </tbody>
</table>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "alert": {
        "name": "alert",
        "alerts": {
            "error": {
                "color": ["#COLOR", "alert", "error"],
                "icon": "times"
            },
            "success": {
                "color": ["#COLOR", "alert", "success"],
                "icon": "check"
            },
            "info": {
                "color": ["#COLOR", "alert", "info"],
                "icon": "info-circle"
            },
            "help": {
                "color": ["#COLOR", "alert", "help"],
                "icon": "question-circle"
            }
        },
        "text-color": ["#COLOR", "greyscale", "white"],
        "icon": {
            "default-enable": true
        },
        "-bar": {
            "padding": "0.85em"
        },
        "-box": {
            "padding": "1.5em"
        }
    }
}
```

> Certain values from the above configuration are excluded from the below table ([learn more](https://github.com/esr360/One-Nexus/tree/master/src/ui/modules#documenting-configuration-properties))

<table class="table">
    <thead>
        <tr>
            <th>Option</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>alerts[alert].color</code></td>
            <td>The background color for the specified alert</td>
        </tr>
        <tr>
            <td><code>alerts[alert].icon</code></td>
            <td><a href="http://fontawesome.io/icons/">FontAwesome</a> icon name to use as the alert icon</td>
        </tr>
        <tr>
            <td><code>icon['default-enable']</code></td>
            <td>Show an alert's icon by default (without passing a modifier/prop)</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `alert` object in your theme's config file (e.g. [ui/themes/one_nexus.json](../../../themes/one_nexus.json)):

```js
{
    "theme": {
        "alert": {
            "alerts": {
                "error": {
                    "color": "red",
                    "icon": "times"
                },
                "success": {
                    "color": "#39dd65",
                    "icon": "check"
                },
                "info": {
                    "color": "#27a7fa",
                    "icon": "info-circle"
                },
                "help": {
                    "color": "#f4cf2c",
                    "icon": "question-circle"
                },
                "danger": {
                    "color": "darkred",
                    "icon": "exclamation-triangle"
                }
            }
        }
    }
}
```

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Interactions

> Module interactions are applied by default within the module's `.jsx` file ([learn more](https://github.com/esr360/One-Nexus/wiki/Module-interactions))

* [Dismiss](#dismiss)

> Interactions are defined in [ui/modules/elements/alert/alert.js](../../../modules/elements/alert/alert.js)

### Dismiss

> Dismiss an alert

```js
Alert.dismiss(alert);
```

<table>
    <thead>
        <tr>
            <td><b>Parameter</b></td>
            <td><b>Type</b></td>
            <td><b>Description<b/></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alert</td>
            <td><a href="#">Synergy selector</a></td>
            <td>The alert(s) to dismiss</td>
        </tr>
    </tbody>
</table>

#### Examples

```js
// Dismiss alert with ID 'foo'
Alert.dismiss(document.getElementById('foo'));

// Dismiss alert with ID 'foo'
Alert.dismiss('#foo');

// Dismiss all alerts with class 'alert'
Alert.dismiss(document.querySelectorAll('.foo'));

// Dismiss all alerts with class 'alert'
Alert.dismiss('.alert');

// Dismmiss all alerts
Alert.dismiss();
```

## Rendering

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

###### Using `<Alert>` Tag

```jsx
<Alert>This is an alert</Alert>
```

###### Custom Build

```jsx
<Module name='alert'>This is an alert</Module>
```

###### API

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [Props.bar](#propsbar)
* [Props.box](#propsbox)
* [Props.alert](#propsalert)
* [Props.icon](#propsicon)
* [Props.close](#propsicon)
* [Props.dismiss](#propsdismiss)

### Props.bar

> Set to add `bar` modifier

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Bool</code></td>
    </tr>
    <tr>
        <td><b>Default</b></td>
        <td><code>true</code></td>
    </tr>
</table>

```jsx
<Alert bar>This is an alert</Alert>
```

### Props.box

> Set to add `box` modifier

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

> Setting this to `true` will negative the value of `Props.bar`

```jsx
<Alert box>This is an alert</Alert>
```

### Props.alert

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

### Props.icon

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

#### Right-Aligned Icon

```jsx
<Alert icon={['exclamation-triangle', 'right']}>This is an alert</Alert>
```

#### Props.close

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

### Props.dismiss

> Overwrite the default `dismiss` method

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