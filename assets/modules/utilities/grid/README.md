## Grid System

### Quick Look

The One-Nexus Grid System is built using the [Kayzen-GS](https://github.com/esr360/Kayzen-GS) framework.

> View the [Kayzen-GS Demo Page](http://esr360.github.io/Kayzen-GS/) to see more examples

```html
<div class="container">
    <div class="row">
        <div class="span-4">...</div>
        <div class="span-4">...</div>
        <div class="span-4">...</div>
    </div>
</div>
```

### Options

The complete available options and settings to pass to the module can be found on the [Kayzen-GS SassDocs](http://esr360.github.io/Kayzen-GS/docs/#variable-kayzenGS) page.

> For default values view the [`grid.json`](grid.json) file.

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
            <td>options {}</td>
            <td>The [Kayzen-GS](http://esr360.github.io/Kayzen-GS/docs/#variable-kayzenGS) options to be modified</td>
        </tr>
        <tr>
            <td>settings {}</td>
            <td>The [Kayzen-GS](http://esr360.github.io/Kayzen-GS/docs/#variable-kayzenGS) settings to be modified</td>
        </tr>
        <tr>
            <td>breakpoints {}</td>
            <td>The [breakpoints](https://github.com/esr360/Kayzen-GS#breakpoints) to use when generating the Grid System styles</td>
        </tr>
        <tr>
            <td>fractions {}</td>
            <td>The [fractions](https://github.com/esr360/Kayzen-GS#fractions) to use when generating the Grid System styles</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `grid` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "grid": {
            "breakpoints": {
                "break-5": "1400px"
            }
        }
    }
}
```

### Sass

Load the Grid System styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `grid()` mixin:

```scss
@import '../../app';
@import './config.json';

@include grid();
```

### Tools & Utilities

#### Function: `breakpoint()`

Retrieve an existing breakpoint value

```scss
@media (min-width: breakpoint('break-3')) {
    ...
}
```

### Examples

Further to all the default examples provided by [Kayzen-GS](http://esr360.github.io/Kayzen-GS/), One-Nexus also comes with some other useful Grid System helpers.

> For conditional responsive visibility helper classes, see the [`Helpers`](#TODO) module

#### Vertical Rhythm

Add vertical-rhythm between columns in a `flow` row by adding the `row-breathe` class

```html
<div class="row-flow row-breathe">
    <div class="span-4">...</div>
    <div class="span-4">...</div>
    <div class="span-4">...</div>
    <div class="span-4">...</div>
    <div class="span-4">...</div>
    <div class="span-4">...</div>
</div>
```

#### Creating Semantic Grid System Elements

Instead of using the prebuilt Grid System classes, you can create your own semantically named classes and include the appropriate Kayzen-GS mixins to create rows and columns.

Grid System classes:

```html
<div class="row">
    <div class="span-3">Sidebar</div>
    <div class="span-9">Content</div>
</div>
```

Semantic classes:

```html
<div class="main">
    <div class="sidebar">Sidebar</div>
    <div class="content">Content</div>
</div>
```

Sass

```scss
.main {
    @include row();
}
.sidebar {
    @include column((
        'width' : (3, 12)
    ));
}
.content {
    @include column((
        'width' : (9, 12)
    ));
}
```

See more examples, such as how to create alternate row and column types, on the [Kayzen-GS Demo](http://esr360.github.io/Kayzen-GS/#semantic-basic-example) page.