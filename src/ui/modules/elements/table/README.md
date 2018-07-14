## Tables

##### Components

* _This module has no components_

##### Modifiers

* fixed

### Quick Look

```html
<table class="table">
    <thead>
        <tr>
            <th>Table Heading</th>
            ...
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Table Data Cell</td>
            ...
        </tr>
        ...
    </tbody>
</table>
```

### Options

For default values view the [`tables.json`](tables.json) file. Standard CSS properties for modules, components and modifiers are not documented below - [learn more](https://github.com/esr360/Synergy/wiki/Configuring-a-Module#pass-custom-css-to-modules).

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
            <td><code>cell-padding</code></td>
            <td>The padding of table cells</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `tables` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "tables": {
            "cell-padding": "6px 10px"
        }
    }
}
```

### Sass

Load the table styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `tables()` mixin:

```scss
@import '../../app';
@import './config.json';

@include tables();
```

### Examples

#### Fixed/Equal Table Column Widths

```html
<table class="table-fixed">
    ...
</table>
```