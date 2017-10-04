##### Components

* content

##### Modifiers

* dark

### Quick Look

```html
<div class="well">
    <div class="well_content">...</div>
</div>
```

### Options

For default values view the [`wells.json`](wells.json) file. Standard CSS properties for modules, components and modifiers are not documented below - [learn more](https://github.com/esr360/Synergy/wiki/Configuring-a-Module#pass-custom-css-to-modules).

<table class="table">
    <thead>
        <tr>
            <th>Option</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>name</code></td>
            <td>The name used when generating the CSS selector</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `wells` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "wells": {
            "dark": {
                "background": "color(brand, brand-2)"
            }
        }
    }
}
```

### Sass

Load the table styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `wells()` mixin:

```scss
@import '../../app';
@import './config.json';

@include wells();
```

### Examples

#### Dark Well

```html
<div class="well-dark">
    <div class="well_content">...</div>
</div>
```