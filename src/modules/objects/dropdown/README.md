## Dropdown Menu

##### Components

* _This module has no components_

##### Modifiers

* _This module has no modifiers_

### Quick Look

> This module is an extension of the [Navigation](https://github.com/esr360/One-Nexus/tree/master/src/modules/objects/navigation) module

```html
<nav class="navigation">
    <ul>
        <li>
            <a>First Level Item</a>
            <!-- This is where the dropdown menu begins -->
            <ul>
                <li>
                    <a>2nd Level Item</a>
                    <ul>
                        <li><a>3rd Level Item</a></li>
                        ...
                    </ul>
                </li>
                ...
            </ul>
        </li>
        ...
    </ul>
</nav>
```

### Options

For default values view the [`dropdown.json`](dropdown.json) file. Standard CSS properties for modules, components and modifiers are not documented below - [learn more](https://github.com/esr360/Synergy/wiki/Configuring-a-Module#pass-custom-css-to-modules).

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
            <td>top-position</td>
            <td>The top distance dropdown menus should be from their parent</td>
        </tr>
        <tr>
            <td>dropdown-icon</td>
            <td>The Font Awesome icon which shows if a menu item has a child menu</td>
        </tr>
        <tr>
            <td>low-level-icon</td>
            <td>The Font Awesome icon for dropdown menu items which have a child menu</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `dropdown` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "dropdown": {
            "text-align": "right",
            "font-size": "12px",
            "link": {
                "hover-color": "#565656"
            }
        }
    }
}
```

### Sass

Load the dropdown styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `dropdown()` mixin:

```scss
@import '../../app';
@import './config.json';

@include dropdown();
```