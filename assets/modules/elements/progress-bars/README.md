## One-Nexus Progress Bars

##### Components

* group

##### Modifiers

* _This module has no modifiers_

### Quick Look

```html
<progress class="progress-bar" max="100" data-progress="75%"></progress>
```

### Options

For default values view the [`progress-bars.json`](progress-bars.json) file.

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
            <td><code>background</code></td>
            <td>The background color of the un-filled bar</td>
        </tr>
        <tr>
            <td><code>fill-background</code></td>
            <td>The fill color of the progress bar</td>
        </tr>
        <tr>
            <td><code>bar-height</code></td>
            <td>The height of the progress bar</td>
        </tr>
        <tr>
            <td><code>bar-radius</code></td>
            <td>The border-radius of the progress bar</td>
        </tr>
        <tr>
            <td><code>value-color</code></td>
            <td>The color of the progress value text</td>
        </tr>
        <tr>
            <td><code>value-size</code></td>
            <td>The font size of the progress value text</td>
        </tr>
        <tr>
            <td><code>group-spacing</code></td>
            <td>The vertical spacing between each progress bar within a `group` component</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `progress-bars` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "progress-bars": {
            "fill-background": "#27E573",
            "bar-radius": "6px"
        }
    }
}
```

### Sass

Load the progress-bar styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `lists()` mixin:

```scss
@import '../../app';
@import './config.json';

@include progressBars();
```

### JavaScript

Call the `progressBar()` function in your theme's main `js` file (e.g. [themes/One-Nexus/One-Nexus.js](../../../themes/One-Nexus/One-Nexus.js)):

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

app.progressBar();
```

### Examples

#### Progress Bar Group

```html
<div class="progress-bar_group">
    <div class="heading">Foo</div>
    <progress class="progress-bar" max="100" data-progress="50%"></progress>

    <div class="heading">Bar</div>
    <progress class="progress-bar" max="100" data-progress="75%"></progress>

    <div class="heading">Fizz</div>
    <progress class="progress-bar" max="100" data-progress="25%"></progress>
</div>
```