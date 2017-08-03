## Core

### Quick Look

```sass
.element {
    font-size: core('font-size');
    transition: core('transition);
    margin-bottom: core('margin);
}
```

### Options

> For default values view the [`core.json`](core.json) file.

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
            <td>background</td>
            <td>The background to be applied to the `body` element</td>
        </tr>
        <tr>
            <td>font-family</td>
            <td>The font family to be applied to the `body` element</td>
        </tr>
        <tr>
            <td>text-color</td>
            <td>The text color to be applied to the `body` element</td>
        </tr>
        <tr>
            <td>font-size</td>
            <td>The font size for the the `body` element</td>
        </tr>
        <tr>
            <td>line-height</td>
            <td>The line-height to be applied to the `body` element</td>
        </tr>
        <tr>
            <td>margin</td>
            <td>The base margin size to create vertical rhythm</td>
        </tr>
        <tr>
            <td>radius</td>
            <td>The base radius size for round elements</td>
        </tr>
        <tr>
            <td>transition</td>
            <td>The base transition duration for animations</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `core` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "core": {
            "margin": "1em",
            "transition": "0.6s"
        }
    }
}
```

### Sass

Load the core styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `core()` mixin:

```scss
@import '../../app';
@import './config.json';

@include core();
```

### Tools & Utilities

#### Sass

##### Function: `core()`

Retrieve a core value

```sass
.element {
    font-size: core('font-size');
}
```

##### Mixin: `object()`

Add vertical-rhythem to an element - uses the value from the `margin` option by default.

```sass
.element {
    @include object();
}
```

Outputs:

```css
.element {
    margin: 2rem 0;
}
.element:first-child {
    margin-top: 0;
}
.element:last-child {
    margin-bottom: 0;
}
```

##### Module: `hrule()`

Add a horizontal rule to separate elements:

```html
<hr class="hrule" />
```

#### JavaScript

##### Function: `app.core()`

Retrieve a core value

```sass
.element {
    font-size: core('font-size');
}
```