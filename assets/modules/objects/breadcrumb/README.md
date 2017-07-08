## Breadcrumbs

##### Components

* _This module has no components_

##### Modifiers

* _This module has no modifiers_

##### Quick Look

```html
<nav class="breadcrumb">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="further-page.html">Further Page</a></li>
    </ul>
</nav>
```

### Options

For default values view the [`breadcrumb.json`](breadcrumb.json) file.

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
            <td>font-size</td>
            <td>The breadcrumb font size</td>
        </tr>
        <tr>
            <td>divider-icon</td>
            <td>The code for any FontAwesome icon to act as the crumb separator</td>
        </tr>
        <tr>
            <td>icon-color</td>
            <td>The color of the divider icon</td>
        </tr>
        <tr>
            <td>link {}</td>
            <td>CSS `property`:`value` entries for breadcrumb links</td>
        </tr>
        <tr>
            <td>link-hover {}</td>
            <td>CSS `property`:`value` entries for breadcrumb links</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `breadcrumb` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "breadcrumb": {
            "divider-icon": "'\\f105'",
            "link": {
                "border-bottom": "1px dotted transparent",
                "transition": "core('transition')"
            },
            "link-hover": {
                "border-bottom-color": "currentColor"
            }
        }
    }
}
```

### Sass

Load the accordion styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `breadcrumb()` mixin:

```scss
@import '../../app';
@import './config.json';

@include breadcrumb();
```