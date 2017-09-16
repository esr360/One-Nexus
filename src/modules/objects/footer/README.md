## Footer

##### Components

* wrapper
* nav

##### Modifiers

* _This module has no modifiers_

### Quick Look

```html
<footer class="footer">
    <div class="footer_wrapper">
        <nav class="footer_nav">
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </nav>
    </div>
</footer>
```

### Options

For default values view the [`footer.json`](footer.json) file. Standard CSS properties for modules, components and modifiers are not documented below - [read more](#TODO).

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
            <td>link.color</td>
            <td>The color for links inside the `nav` component</td>
        </tr>
        <tr>
            <td>link.hover.color</td>
            <td>The color for links inside the `nav` component when hovered</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `footer` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "footer": {
            "link": {
                "color": "color(greyscale, grey-3)"
            },
            "wrapper" {
                "padding": "20px 0"
            }
        }
    }
}
```

### Sass

Load the footer styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `footer()` mixin:

```scss
@import '../../app';
@import './config.json';

@include footer();
```