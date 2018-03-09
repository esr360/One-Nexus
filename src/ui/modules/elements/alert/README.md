# One-Nexus Alert

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)
* [Examples](#examples)

## Overview

### Components

* content
* icon

### Modifiers

* [...Global modifiers]()
* [...alert.alerts](#configuation)

### Quick Look

###### React

```jsx
<Alert>This is an error alert</Alert>
```

###### HTML

```html
<div class="alert-bar">This is an alert</div>
```

## Configuration

> [Learn more]() about module configutation

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
            "enable-by-default": true
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

Pass custom options to the `alert` object in your theme's config file (e.g. [ui/themes/One-Nexus/theme.json](../../../themes/One-Nexus/theme.json)):

```js
{
    "app": {
        "alert": {
            "colors": {
                "carrot": "#F97E52",
                "error" : "#DA4D44",
                "rose"  : "#D870AD"
            }
        }
    }
}
```

## Styles

> [Learn more]() about module styles

## Interactions

> [Learn more]() about module interactions

* [Dismiss](#dismiss)

> Interactions are defined in [ui/modules/elements/alert/alert.js]()

### Dismiss

> Dismiss an accordion

```js
UI.alert(alert).dismiss();
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
UI.alert(document.getElementById('foo')).dismiss();

// Dismiss alert with ID 'foo'
UI.alert('#foo').dismiss();

// Dismiss all alerts with class 'alert'
UI.alert(document.querySelectorAll('.foo')).dismiss();

// Dismiss all alerts with class 'alert'
UI.alert('.alert').dismiss();

// Dismmiss all alerts
UI.alert().dismiss();
```

## Rendering

> [Learn more]() about rendering modules

```jsx
<Alert>This is an error alert</Alert>
```

* [[...Global props]]()
* [Props.bar](#propsbar)
* [Props.box](#propsbox)
* [Props.alert](#propsalert)
* [Props.icon](#propsicon)

### Props.bar

> Set to append `bar` modifier

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

###### Output:

```html
<div class="alert-bar">This is an alert</div>
```

### Props.box

> Set to append `box` modifier

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

```jsx
<Alert box>This is an alert</Alert>
```

###### Output:

```html
<div class="alert-box">This is an alert</div>
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

###### Output:

```html
<div class="alert-bar-success">This is an alert</div>
```

### Props.icon

> Add an icon to the alert

<table>
    <tr>
        <td><b>Default</b></td>
        <td><code>false</code></td>
    </tr>
    <tr>
        <td><b>Type</b></td>
        <td><code>(String|Array)</code></td>
    </tr>
</table>

> Keyword should correspond to a [FontAwesome icon](http://fontawesome.io/icons/) name

```jsx
<Alert icon='exclamation-triangle'>This is an alert</Alert>
```

###### Output:

```html
<div class="alert-bar">
    <div class="alert_icon fa fa-exclamation-triangle"></div> This is an alert
</div>
```

#### Right-Aligned Icon

```jsx
<Alert icon={['exclamation-triangle', 'right']}>This is an alert</Alert>
```

###### Output:

```html
<div class="alert-bar">
    <div class="alert_icon-right fa fa-exclamation-triangle"></div> This is an alert
</div>
```

#### Close Icon

> If your alert has a close icon, you cannot also have another __right-aligned__ icon

```jsx
<Alert close>This is an alert</Alert>
```

###### Output:

```html
<div class="alert-bar">
    <div class="alert_icon-close-right fa fa-times"></div> This is an alert
</div>
```