## Alert Bars/Boxes

##### Components

* icon

##### Modifiers

* bar
* box
* {color}

### Quick Look

```html
<div class="alert-bar-help">A helpful alert bar.</div>

<p class="alert-bar-info">An informative alert bar.</p>

<div class="alert-bar-success"><p>A successful alert bar.</p></div>

<span class="alert-bar-error">An error alert bar.</span>
```

### Options

For default values view the [`alert-bar.json`](alert-bar.json) file. Standard CSS properties for modules, components and modifiers are not documented below - [learn more](https://github.com/esr360/Synergy/wiki/Configuring-a-Module#pass-custom-css-to-modules).

<table class="table">
    <thead>
        <tr>
            <th>Option</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>The name used when generating the CSS selector</td>
        </tr>
        <tr>
            <td>colors</td>
            <td>A Sass map where the key will be used as a modifier and the value will be used as the color</td>
        </tr>
        <tr>
            <td>text-color</td>
            <td>Text color for alert bars</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `alert-bar` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "alert-bar": {
            "colors": {
                "carrot": "#F97E52",
                "error" : "#DA4D44",
                "rose"  : "#D870AD"
            }
        }
    }
}
```

### Sass

Load the accordion styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `alert-bar()` mixin:

```scss
@import '../../app';
@import './config.json';

@include alert-bar();
```

### Examples

#### With Icon

```html
<div class="alert-bar-success"><i class="alert-bar_icon fa fa-times"></i> A successful alert bar.</div>
<div class="alert-bar-error"><i class="alert-bar_icon fa fa-times"></i> An error alert bar.</div>
```

#### With Right-Aligned Icon

```html
<div class="alert-bar-success"><i class="alert-bar_icon-right fa fa-times"></i> A successful alert bar.</div>
```

#### Alert Box

```html
<div class="alert-box-info">
    <h3 class="heading-size-4">This is an Alert Box</h3>
    <p>...<p>
</div>
```