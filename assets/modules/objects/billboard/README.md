## Billboard

##### Components

* wrapper(-wide)

##### Modifiers

* overlay
* fullscreen

### Quick Look

```html
<div class="billboard">
    <div class="billboard_wrapper">
        ...
    </div>
</div>
```

### Options

For default values view the [`billboard.json`](billboard.json) file.

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
            <td>min-height</td>
            <td>The minimum height the billboard should occupy</td>
        </tr>
        <tr>
            <td>padding</td>
            <td>The padding for the billboard element</td>
        </tr>
        <tr>
            <td>color</td>
            <td>The billboard text color</td>
        </tr>
        <tr>
            <td>active-color</td>
            <td>The color for 'active' text, such as hovered links</td>
        </tr>
        <tr>
            <td>background.color</td>
            <td>The background color for the billboard</td>
        </tr>
        <tr>
            <td>background.image</td>
            <td>The billboard background image</td>
        </tr>
        <tr>
            <td>fullscreen.enabled</td>
            <td>Set to enable fullscreen for all billboards</td>
        </tr>
        <tr>
            <td>fullscreen.min-height</td>
            <td>The min-height for full-screen billboards</td>
        </tr>
        <tr>
            <td>overlay.enabled</td>
            <td>Set whether the billboard should have an overlay without any modifiers</td>
        </tr>
        <tr>
            <td>overlay.color</td>
            <td>Set the overlay color (if applicable)</td>
        </tr>
        <tr>
            <td>overlay.opacity</td>
            <td>The the overlay opacity (if applicable)</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `billboard` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "billboard": {
            "min-height": "500px",
            "background": {
                "image": "url('../path/to/image.png')"
            },
            "overlay": {
                "enabled": true,
                "color": "#5C1160"
            }
        }
    }
}
```

### Sass

Load the billboard styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `billboard()` mixin:

```scss
@import '../../app';
@import './config.json';

@include billboard();
```

### Examples

#### Overlay Using Modifier

```html
<div class="billboard-overlay">
    <div class="billboard_wrapper">
        ...
    </div>
</div>
```

#### Fullscreen Using Modifier

```html
<div class="billboard-fullscreen">
    <div class="billboard_wrapper">
        ...
    </div>
</div>
```

#### Wide Wrapper

```html
<div class="billboard">
    <div class="billboard_wrapper-wide">
        ...
    </div>
</div>
```