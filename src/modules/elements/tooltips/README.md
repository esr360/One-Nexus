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

For default values view the [`tooltips.json`](tooltips.json) file. Standard CSS properties for modules, components and modifiers are not documented below - [learn more](https://github.com/esr360/Synergy/wiki/Configuring-a-Module#pass-custom-css-to-modules).

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
            <td>distance</td>
            <td>The distance the tooltip should be from the parent object</td>
        </tr>
        <tr>
            <td>arrow-size</td>
            <td>The size of the tooltip arrow</td>
        </tr>
        <tr>
            <td>arrow-color</td>
            <td>The tooltip arrow color</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `tooltips` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

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