## One-Nexus tabs

##### Components

* wrapper
* content

##### Modifiers

* [top, bottom, left, right]

### Quick Look

```html
<a href="#" class="button-icon tooltip" data-tooltip="Facebook">
    <i class="fa fa-facebook"></i>
</a>
```

### Options

For default values view the [`tooltips.json`](tooltips.json) file.

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
            <td>max-width</td>
            <td>The maximum width for tooltips before text starts to wrap</td>
        </tr>
        <tr>
            <td>padding</td>
            <td>The tooltip padding</td>
        </tr>
        <tr>
            <td>distance</td>
            <td>The distance the tooltip should be from the parent object</td>
        </tr>
        <tr>
            <td>background</td>
            <td>The tooltip background</td>
        </tr>
        <tr>
            <td>border-radius</td>
            <td>The radius of the toolitp</td>
        </tr>
        <tr>
            <td>arrow-size</td>
            <td>The size of the tooltip arrow</td>
        </tr>
        <tr>
            <td>arrow-color</td>
            <td>The tooltip arrow color</td>
        </tr>
        <tr>
            <td>font-size</td>
            <td>The tooltip font size</td>
        </tr>
        <tr>
            <td>font-family</td>
            <td>The tooltip font family</td>
        </tr>
        <tr>
            <td>color</td>
            <td>The tooltip text color</td>
        </tr>
        <tr>
            <td>text-transform</td>
            <td>The tooltip text-transform</td>
        </tr>
        <tr>
            <td>font-weight</td>
            <td>The tooltip font weight</td>
        </tr>
        <tr>
            <td>transition</td>
            <td>The tooltip fade-in animation transition duration</td>
        </tr>
        <tr>
            <td>z-index</td>
            <td>The tooltip z-index</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `tooltips` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "tooltips": {
            "max-width": "700px",
            "background": "black"
        }
    }
}
```

### Sass

Load the tabs styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `tabs()` mixin:

```scss
@import '../../app';
@import './config.json';

@include tooltips();
```

### JavaScript

Call the `tooltips()` function in your theme's main `js` file (e.g. [themes/One-Nexus/One-Nexus.js](../../../themes/One-Nexus/One-Nexus.js)):

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

app.tooltips();
```

### Examples

#### Left Tooltip

```html
<div class="tooltip-left" data-tooltip="Tooltip Content">
    ...
</div>
```

#### Right Tooltip

```html
<div class="tooltip-right" data-tooltip="Tooltip Content">
    ...
</div>
```

#### Top Tooltip

```html
<div class="tooltip-top" data-tooltip="Tooltip Content">
    ...
</div>
```

#### Bottom Tooltip

```html
<div class="tooltip-bottom" data-tooltip="Tooltip Content">
    ...
</div>
```