## One-Nexus Carousels

##### Components

* slide
* navigation
* navigationItem
* pagination
* bullet

##### Modifiers

* hide-pagination
* hide-navigation

### Quick Look

To create a carousel, add the `carousel` class to a container of elements which will act as the carousel slides:

```html
<div class="carousel">
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
</div>
```

### Options

For default values view the [`carousels.json`](carousels.json) file. Standard CSS properties for modules, components and modifiers are not documented below - [learn more](https://github.com/esr360/Synergy/wiki/Configuring-a-Module#pass-custom-css-to-modules).

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
            <td><code>navigationItem.disable</code></td>
            <td>Hide navigation buttons by default</td>
        </tr>
        <tr>
            <td><code>navigationItem.size</code></td>
            <td>The size of the next/previous buttons</td>
        </tr>
        <tr>
            <td><code>navigationItem.arrow-color</code></td>
            <td>The arrow color of the next/previous buttons</td>
        </tr>
        <tr>
            <td><code>navigationItem.shape</code></td>
            <td>The shape of the next/previous buttons [circle|square]</td>
        </tr>
        <tr>
            <td><code>bullets.disable</code></td>
            <td>Hide the pagination/bullets by default</td>
        </tr>
        <tr>
            <td><code>bullets.size</code></td>
            <td>The size for pagination bullets</td>
        </tr>
        <tr>
            <td><code>bullets.gutter</code></td>
            <td>The space between the carousel viewport and the pagination</td>
        </tr>
        <tr>
            <td><code>bullets.fill</code></td>
            <td>The color for pagination bullets</td>
        </tr>
        <tr>
            <td><code>bullets.active-fill</code></td>
            <td>The color for the active pagination bullet</td>
        </tr>
        <tr>
            <td><code>Flickity</code></td>
            <td>Object of [Flickity options](https://flickity.metafizzy.co/options.html) to pass to carousels</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `carousels` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "carousels": {
            "nav-buttons": {
                "disable": true,
                "shape": "square"
            },
            "bullets" {
                "size": "1em"
            },
            "Flickity": {
                "contain": true,
                "initialIndex": 2
            }
        }
    }
}
```

### Sass

Load the carousel styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `carousels()` mixin:

```scss
@import '../../app';
@import './config.json';

@include carousels();
```

### JavaScript

Call the `carousel()` function in your theme's main `js` file (e.g. [themes/One-Nexus/One-Nexus.js](../../../themes/One-Nexus/One-Nexus.js)):

```js
import * as app from '../../app';
import config from './config.json';
app.theme = config.app;

app.carousel();
```

#### Data-Attribute Options

It is possible to pass custom [Flickity options](https://flickity.metafizzy.co/options.html) to a carousel instance using the `data-carousel` attribute:

> Note that the content of the attribute must be valid JSON and is hence wrapped in 'single' quotes, not "double"

```html
<div class="carousel" data-carousel='{"contain": true, "initialIndex": 1}'>
    ...
</div>
```

#### API

> See the [Flickity API](https://flickity.metafizzy.co/api.html) to learn what's possible

Use the Flickity API on a carousel instance like so:

```js
var carousel = document.getElementById('foo');

// Flickity API
app.carousel(carousel).Flickity.playPlayer();
app.carousel(carousel).Flickity.next();
```

### Examples

#### No Navigation

```html
<div class="carousel-hide-navigation">
    ...
</div>
```

#### No Pagination

```html
<div class="carousel-hide-pagination">
    ...
</div>
```

**Note:** You can of course just call the Flickity plugin directly on your element like the below example, but you will lose out on some benefits that the One-Nexus wrapper provides:

```js
var el = document.getElementById('foo');

var carousel = new Flickity(el, {
    ...
});

carousel.playPlayer();
carousel.next();
```