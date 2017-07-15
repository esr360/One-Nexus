## Logo

##### Components

* _This module has no components_

##### Modifiers

* _This module has no modifiers_

##### Quick Look

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

For default values view the [`logo.json`](logo.json) file.

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
            <td>text-align</td>
            <td>The text-align value for the logo module</td>
        </tr>
        <tr>
            <td>color</td>
            <td>The text color for the logo module</td>
        </tr>
        <tr>
            <td>size</td>
            <td>The module's font size</td>
        </tr>
        <tr>
            <td>padding</td>
            <td>The module's padding</td>
        </tr>
        <tr>
            <td>image-height</td>
            <td>The height of the logo's image element</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `logo` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

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