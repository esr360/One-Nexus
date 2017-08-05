##### Components

* figure

##### Modifiers

* center-xy

### Quick Look

```html
<img class="image_figure" src="#" alt="" />

<div class="image-center-xy">   
    <img class="image_figure" src="#" alt="" />
</div>
```

### Options

For default values view the [`images.json`](images.json) file.

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
    </tbody>
</table>

To modify any of the above options, pass them to the `images` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "images": {
            "name": "picture"
        }
    }
}
```

### Sass

Load the image styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `images()` mixin:

```scss
@import '../../app';
@import './config.json';

@include images();
```