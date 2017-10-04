## Logo

##### Components

* _This module has no components_

##### Modifiers

* _This module has no modifiers_

### Quick Look

```html
<div class="logo">
    <a href="#">
        <img src="logo.png" alt="logo" />
    </a>
</div>
```

```html
<div class="logo">
    <a href="#">One-Nexus</a>
</div>
```

### Options

For default values view the [`logo.json`](logo.json) file. Standard CSS properties for modules, components and modifiers are not documented below - [learn more](https://github.com/esr360/Synergy/wiki/Configuring-a-Module#pass-custom-css-to-modules).

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
            <td>image-height</td>
            <td>The height of the logo's image element</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `logo` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "logo": {
            "padding": "10px 0",
            "image-height": "38px"
        }
    }
}
```

### Sass

Load the logo styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `logo()` mixin:

```scss
@import '../../app';
@import './config.json';

@include logo();
```