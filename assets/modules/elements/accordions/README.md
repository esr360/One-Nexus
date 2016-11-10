## One-Nexus Accordions

### Sass

Load the accordion styles by including the `accordions()` mixin:

```scss
@include accordions();
```

The following options can be passed to the mixin to customize the accordions:

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
            <td>name</td>
            <td>The name used when generating the CSS selector</td>
            <td><code>'accordion'</code></td>
        </tr>
        <tr>
            <td>icon</td>
            <td>The <a href="http://astronautweb.co/snippet/font-awesome/" target="blank">content value</a> for a Font Awesome icon</td>
            <td><code>'\f138'</code></td>
        </tr>
        <tr>
            <td>icon-color</td>
            <td>The color for the open/close icon</td>
            <td><code>rgba(color('greyscale', 'grey-3'), 0.6)</code></td>
        </tr>
        <tr>
            <td>icon-active-color</td>
            <td>The color for the open/close icon when the corresponding section is open</td>
            <td><code>color('greyscale', 'white')</code></td>
        </tr>
        <tr>
            <td>section-margin</td>
            <td>The vertical spacing between each accordion section</td>
            <td><code>0</code></td>
        </tr>
        <tr>
            <td>title-bg</td>
            <td>The background color for the accordion title (the clickable part)</td>
            <td><code>transparent</code></td>
        </tr>
        <tr>
            <td>title-color</td>
            <td>The text color for the accordion title (the clickable part</td>
            <td><code>core('text-color')</code></td>
        </tr>
        <tr>
            <td>title-border</td>
            <td>The border for the accordion title (the clickable part)</td>
            <td><code>1px solid rgba(black, 0.15)</code></td>
        </tr>
        <tr>
            <td>title-radius</td>
            <td>The border-radius for the accordion title (the clickable part)</td>
            <td><code>0</code></td>
        </tr>
        <tr>
            <td>title-padding</td>
            <td>The padding for the accordion title (the clickable part</td>
            <td><code>1em</code></td>
        </tr>
        <tr>
            <td>title-active-bg</td>
            <td>The background color for the accordion title when the corresponding section is open</td>
            <td><code>color('brand', 'brand-1')</code></td>
        </tr>
        <tr>
            <td>title-active-color</td>
            <td>The text color for the accordion title when the corresponding section is open</td>
            <td><code>color('greyscale', 'white')</code></td>
        </tr>
        <tr>
            <td>title-active-border</td>
            <td>The border for the accordion title when the corresponding section is open</td>
            <td><code>transparent</code></td>
        </tr>
        <tr>
            <td>title-active-radius</td>
            <td>The border-radius for the accordion title when the corresponding section is open</td>
            <td><code>0</code></td>
        </tr>
        <tr>
            <td>content-bg</td>
            <td>The backgound for the accordion content</td>
            <td><code>color('greyscale', 'white')</code></td>
        </tr>
        <tr>
            <td>content-color</td>
            <td>The text color for the accordion content</td>
            <td><code>core('text-color')</code></td>
        </tr>
        <tr>
            <td>content-border</td>
            <td>The border for the accordion content</td>
            <td><code>1px solid rgba(black, 0.15)</code></td>
        </tr>
        <tr>
            <td>content-radius</td>
            <td>The border-radius for the accordion content</td>
            <td><code>0</code></td>
        </tr>
        <tr>
            <td>content-padding</td>
            <td>The padding for the accordion content</td>
            <td><code>1.5em</code></td>
        </tr>
    </tbody>
</table>

The above options can be passed to the mixin like so:

```scss
@include accordions((
    'section-margin': 1.4em,
    'icon': '\f101',
    'title-bg': #23241f,
    'title-color': white,
    'title-radius': 0.4em,
    'title-active-bg': #9B58B5,
    'title-active-radius': 0.4em 0.4em 0 0,
    'content-padding': 1em,
    'content-radius': 0 0 0.4em 0.4em
));
```

### JavaScript

Call the `accordion()` function on your accordion selector:

```js
$('.foo').accordion();
$(_accordion).accordion();
```

> The default One-Nexus theme uses [Synergy's](https://github.com/esr360/Synergy) global module selector: '$(_accordion)'

The following options can be passed to the function to customize the accordions:

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
            <td>activeClass</td>
            <td>The class to use to open an accordion section</td>
            <td><code>'active'</code></td>
        </tr>
        <tr>
            <td>animationSpeed</td>
            <td>The duration of the open/close animation</td>
            <td><code>_baseTransition</code></td>
        </tr>
        <tr>
            <td>keepOpenSelector</td>
            <td>The selector to use on the main module to allow multiple sections to be open simultaneously</td>
            <td><code>_modifier('keep-open')</code></td>
        </tr>
    </tbody>
</table>

The above options can be passed to the mixin like so:

```js
$(_accordion).accordion({
    activeClass: 'toggled',
    animationSpeed: 0.5s
});
```

### Markup

```html
<div class="accordion">
    <div class="accordion_section">
        <div class="accordion_title">Accordion Title</div>
        <div class="accordion_content">
            <p>Lorem ipsum.</p>
        </div>
    </div>
    <div class="accordion_section">
        <div class="accordion_title">Accordion Title</div>
        <div class="accordion_content">
            <p>Lorem ipsum.</p>
        </div>
    </div>
</div>
```