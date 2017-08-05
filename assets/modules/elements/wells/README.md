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

For default values view the [`wells.json`](wells.json) file.

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
        <tr>
            <td><code>background</code></td>
            <td>The background color for wells</td>
        </tr>
        <tr>
            <td><code>border</code></td>
            <td>The well border</td>
        </tr>
        <tr>
            <td><code>radius</code></td>
            <td>The border radius for wells</td>
        </tr>
        <tr>
            <td><code>padding</code></td>
            <td>The well padding</td>
        </tr>
        <tr>
            <td><code>color</code></td>
            <td>The text color for wells</td>
        </tr>
        <tr>
            <td><code>dark-background</code></td>
            <td>The background for wells when using the `dark` modifier</td>
        </tr>
        <tr>
            <td><code>dark-border</code></td>
            <td>The border for wells when using the `dark` modifier</td>
        </tr>
        <tr>
            <td><code>dark-color</code></td>
            <td>The text color for wells when using the `dark` modifier</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `wells` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "wells": {
            "dark-background": "color('brand', 'brand-2')",
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