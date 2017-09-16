## Logo

##### Components

* _This module has no components_

##### Modifiers

* noIcons

### Quick Look

The Navigation module appears inside the [Header](#TODO) module by default, along with the [Logo](#TODO) module.

```html
<nav class="navigation">
    <ul>
        <li><a>Link 1</a></li>
        <li><a>Link 2</a></li>
        <li><a>Link 3</a></li>
    </ul>
</nav>
```

> For nested/dropdown menus, look to the [Dropdown](#TODO) module

### Options

For default values view the [`navigation.json`](navigation.json) file. Standard CSS properties for modules, components and modifiers are not documented below - [read more](#TODO).

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
            <td>dropdown-icon</td>
            <td>The <a href="http://astronautweb.co/snippet/font-awesome/" target="blank">content value</a> for a Font Awesome icon</td>
        </tr>
        <tr>
            <td>item.gutter</td>
            <td>The spacing between each top level menu item</td>
        </tr>
        <tr>
            <td>no-icons</td>
            <td>Set to hide any navigation icons</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `navigation` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "navigation": {
            "item": {
                "gutter": "8px",
                "border-radius": "6px",
            },
            "no-icons": true
        }
    }
}
```

### Sass

Load the navigation styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `navigation()` mixin:

```scss
@import '../../app';
@import './config.json';

@include navigation();
```

### Examples

#### No Icons Using Modifier

```html
<nav class="navigation-noIcons">
    <ul>
        <li><a>Link 1</a></li>
        <li><a>Link 2</a></li>
        <li><a>Link 3</a></li>
    </ul>
</nav>
```