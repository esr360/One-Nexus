## One-Nexus Carousels

```html
<div class="carousel">
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
</div>
```

### Sass

Load the carousel styles by including the `carousels()` mixin:

```scss
@include carousels();
```

The following options can be passed to the mixin to customize the carousels:

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
            <td><code>output-json</td>
            <td>Allows the configutation to be accessed in JavaScript</td>
        </tr>
        <tr>
            <td><code>nav-buttons['enabled']</code></td>
            <td>Determine whether to display the next/previous buttons</td>
        </tr>
        <tr>
            <td><code>nav-buttons['size']</code></td>
            <td>The size of the next/previous buttons</td>
        </tr>
        <tr>
            <td><code>nav-buttons['transition']</code></td>
            <td>The transition for the next/previous buttons</td>
        </tr>
        <tr>
            <td><code>nav-buttons['prev']</code></td>
            <td>FontAwesome icon for 'previous' button using <a href="https://css-tricks.com/almanac/properties/q/quotes/" target="blank">content values</a></td>
        </tr>
        <tr>
            <td><code>nav-buttons['next']</code></td>
            <td>FontAwesome icon for 'next' button using <a href="https://css-tricks.com/almanac/properties/q/quotes/" target="blank">content values</a></td>
        </tr>
        <tr>
            <td><code>bullets['enabled']</code></td>
            <td>Determine whether to display pagination bullets</td>
        </tr>
        <tr>
            <td><code>bullets['size']</code></td>
            <td>The size for pagination bullets</td>
        </tr>
        <tr>
            <td><code>bullets['color']</code></td>
            <td>The color for pagination bullets</td>
        </tr>
        <tr>
            <td><code>bullets['transition']</code></td>
            <td>The transition for pagination bullets</td>
        </tr>
        <tr>
            <td><code>bullets['active-color']</code></td>
            <td>The color for the active pagination bullet</td>
        </tr>
    </tbody>
</table>

The above options can be passed to the mixin like so:

```scss
@include carousels((
    'nav-buttons':(
        'enabled': false
    ),
    'bullets':(
        'active-color': #C7254F
    )
));
```

Default carousels will now reflect these options:

```html
<div class="carousel">
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
</div>
```

### JavaScript

Call the `carousel()` function on your accordion selector:

```js
$('.carousel').carousel();
```

The following options can be passed to the function to customize the carousels:

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
            <td><code>nav</code></td>
            <td>Create next/previous buttons</td>
        </tr>
        <tr>
            <td><code>pagination</code></code></td>
            <td>Create pagination bullets</td>
        </tr>
        <tr>
            <td><code>owl</code></td>
            <td>Pass any custom <a href="http://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html" target="blank">OwlCarousel options</a> to the carousel</td>
        </tr>
    </tbody>
</table>

The above options can be passed to the function like so:

```js
$('.carousel').carousel({
    pagination: false,
    owl: {
        items: 6
    }
});
```

Default carousels will now reflect these options:

```html
<div class="carousel">
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
    <img src="http://lorempixel.com/640/480" />
</div>
```