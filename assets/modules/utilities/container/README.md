## Container

##### Components

* _This module has no components_

##### Modifiers

* large

### Quick Look

```html
<div class="container">
    ...
</div>
```

### Options

> For default values view the [`container.json`](container.json) file.

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
            <td>base-width</td>
            <td>The base width for the container module</td>
        </tr>
        <tr>
            <td>max-width</td>
            <td>The max-width for the container module</td>
        </tr>
        <tr>
            <td>large-width</td>
            <td>The width for the container module with an applied `large` modifier</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `container` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "container": {
            "large-width": "1800px"
        }
    }
}
```

### Sass

Load the container styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `container()` mixin:

```scss
@import '../../app';
@import './config.json';

@include container();
```

### Examples

#### Large Container

```html
<div class="container-large">
    ...
</div>
```

#### Turn Any Element Into a Container

```scss
.element {
    @include _module('container');
}
```

The `element` class now also has access to the `large` modifier:

```html
<div class="element-large">
    ...
</div>
```