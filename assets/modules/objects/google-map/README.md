## Google Maps

##### Components

* _This module has no components_

##### Modifiers

* _This module has no modifiers_

##### Quick Look

```html
<div class="google-map"></div>

<!-- Using data-attribute -->
<div class="google-map" data-google-map='{
    "height": "50vh",
    "longitude": 48.195387, 
    "latitude": -63.171387
}'></div>

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
            <td>height</td>
            <td>The Google Map height (can be any valid CSS measurement)</td>
        </tr>
        <tr>
            <td>longitude</td>
            <td>The longitude for default map location</td>
        </tr>
        <tr>
            <td>latitude</td>
            <td>The latitude for default map location</td>
        </tr>
        <tr>
            <td>zoom</td>
            <td>The defauly zoom for Google maps</td>
        </tr>
        <tr>
            <td>styles</td>
            <td>The styles to use for the map (see [Snazzy Maps](http://snazzymaps.com/) for examples)</td>
        </tr>
        <tr>
            <td>googleApi</td>
            <td>Options to pass to the actual Google Map instance (See the [Google Maps documentation](https://developers.google.com/maps/documentation/javascript/reference#MapOptions))</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `google-map` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

> Checkout [Snazzy Maps](http://snazzymaps.com/) for examples to pass to the `styles` option

```json
{
    "app": {
        "google-map": {
            "longitude": -33.866758, 
            "latitude": 151.208514,
            "zoom": 10,
            "styles": [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                }
                ...
            ],
            "googleApi": {
                "scrollwheel": true,
                "draggable": true
            }
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

View the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/reference) for full documentations

### Examples

#### Passing Options From Data-Attribute

```html
<div class="google-map" data-google-map="{
    longitude: 48.195387, 
    latitude: -63.171387,
    styles: [
        ...
    ],
    googleApi: {
        ...
    }
}"></div>
```