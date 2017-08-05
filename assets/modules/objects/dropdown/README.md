## Dropdown Menu

##### Components

* _This module has no components_

##### Modifiers

* _This module has no modifiers_

### Quick Look

> This module is an extension of the [Navigation](#TODO) module

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

For default values view the [`dropdown.json`](dropdown.json) file.

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
            <td>The text alignment for dropdown menus</td>
        </tr>
        <tr>
            <td>width</td>
            <td>The minimum with which dropdown menus should be</td>
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
        <tr>
            <td>font-size</td>
            <td>The font size for dropdown menus</td>
        </tr>
        <tr>
            <td>link-color</td>
            <td>The color for dropdown menu links</td>
        </tr>
        <tr>
            <td>link-bg-color</td>
            <td>The background color for dropdown links</td>
        </tr>
        <tr>
            <td>link-padding</td>
            <td>The padding for dropdown menu items</td>
        </tr>
        <tr>
            <td>link-hover-color</td>
            <td>The text color for dropdown menu items when hovered</td>
        </tr>
        <tr>
            <td>link-hover-bg-color</td>
            <td>The background color for dropdown menu items when hovered</td>
        </tr>
        <tr>
            <td>link-active-color</td>
            <td>The text color for dropdown menu items when supplied with the `active` class</td>
        </tr>
        <tr>
            <td>link-active-bg-color</td>
            <td>The background color for dropdown menu items when supplied with the `active` class</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `dropdown` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "dropdown": {
            "text-align": "right",
            "font-size": "12px",
            "link-hover-color": "#565656"
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