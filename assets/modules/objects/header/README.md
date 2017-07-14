## Header

##### Components

* wrapper

##### Modifiers

* bar
* absolute
* dark
* sticky
* fixed

##### Quick Look

> The `header` module extends the [`logo`](#TODO), [`navigation`](#TODO) and [`overlay`](#TODO) modules

```html
<header class="header">
    <div class="header_wrapper">
        <div class="logo">
            <a href="#" alt="One-Nexus logo">
                <img src="logo.png" alt="One-Nexus Logo">
            </a>
        </div>
        <nav class="navigation">
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </nav>
    </div>
</header>
```

### Options

> For default values view the [`header.json`](header.json) file

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
            "zoom": 10
        }
    }
}
```

### Sass

Load the Header styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `header()` mixin:

```scss
@import '../../app';
@import './config.json';

@include header();
```

### JavaScript

Call the `header()` function in your theme's main `js` file (e.g. [themes/One-Nexus/One-Nexus.js](../../../themes/One-Nexus/One-Nexus.js)):

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

app.header();
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