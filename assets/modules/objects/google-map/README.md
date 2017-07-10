## Google Maps

##### Components

* _This module has no components_

##### Modifiers

* _This module has no modifiers_

##### Quick Look

```html
<div class="google-map"></div>

<!-- Using data-attribute -->
<div class="google-map" data-google-map="{
    longitude: 48.195387, 
    latitude: -63.171387
}"></div>

<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
```

### Options

> For default values view the [`google-map.json`](google-map.json) file

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
            <td>background</td>
            <td>The background of modal boxes</td>
        </tr>
        <tr>
            <td>text-color</td>
            <td>The text color for modal boxes</td>
        </tr>
        <tr>
            <td>radius</td>
            <td>The border radius of modal boxes</td>
        </tr>
        <tr>
            <td>z-index</td>
            <td>The z-index for modal boxes</td>
        </tr>
        <tr>
            <td>content-padding</td>
            <td>The padding for the modal content</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `google-map` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "google-map": {
        }
    }
}
```

### Sass

Load the Google Map styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `google-map()` mixin:

```scss
@import '../../app';
@import './config.json';

@include google-map();
```

### JavaScript

Call the `googleMap()` function in your theme's main `js` file (e.g. [themes/One-Nexus/One-Nexus.js](../../../themes/One-Nexus/One-Nexus.js)):

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

app.googleMap();
```

#### API

TODO view google maps api

### Examples

#### Creating From Data-Attribute

```html
<a href="#" data-modal-content="Lorem ipsum dolor sit amet">Click Me</a>
```