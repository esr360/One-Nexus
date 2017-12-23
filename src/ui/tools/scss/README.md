# Sass Tools

One-Nexus provides some useful Sass tools to facilitate development and ehance your project's UI.

> All tools are imported by default in [`_app.scss`](../../_app.scss)

## Tools

* [background](#mixin-background)
* [fill-parent](#mixin-fill-parent)
* [font-sizes](#mixin-font-sizes)
* [horizontal-center](#mixin-horizontal-center)
* [overlay](#mixin-overlay)
* [retrieve-value](#function-retrieve-value)
* [triangle](#mixin-triangle)
* [vertical-center](#mixin-vertical-center)
* [vertical-rhythm](#mixin-vertical-rhythm)

### Mixin: `background()`

> Used to create background styles from module configuration

```scss
@include background($custom);
```

#### Example 1

Sample config [[source]](https://github.com/esr360/One-Nexus/tree/master/src/modules/objects/billboard#options):

```json
{
    "billboard": {
        "background": {
            "color": "#00A9FF",
            "image": "url('bg.png')"
        }
    }
}
```

Inside the Billboard module [[source]](https://github.com/esr360/One-Nexus/blob/master/src/modules/objects/billboard/_billboard.scss#L23):

```scss
@include module('billboard') {
    @include background();
}
```

CSS output:

```css
{
    background-color: #00A9FF;
    background-image: url('bg.png');
    background-size: cover;
}
```

#### Example 2

If the value for `background` is not a map, it will be treated as a normal value to be used as the background property.

Sample config:

```json
{
    "billboard": {
        "background": "no-repeat center url('bg.png')",
    }
}
```

CSS output:

```css
{
    background: no-repeat center url('bg.png');
}
```

### Mixin: `fill-parent()`

> Cause an element to fill its parent

```scss
@include fill-parent($position);
```

#### Example

```scss
.fillparent {
    @include fill-parent(absolute);
}
```
CSS output:

```css
.fillparent {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}
```

### Mixin: `font-sizes()`

> Create font-size modifiers for a module from a set of specified named sizes

```scss
@include font-sizes($custom);
```

<table class="table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>custom.fluid-scaling</td>
            <td>Enable <a href="https://www.smashingmagazine.com/2016/05/fluid-typography/">responsive scaling</a></td>
        </tr>
        <tr>
            <td>custom.sizes</td>
            <td>Map containing the named sizes to create modifiers from</td>
        </tr>
    </tbody>
</table>

#### Example

```scss
@include module('foo') {
    @include font-sizes((
        'fluid-scaling': true,
        'sizes': (
            'size-1': 0.67em,
            'size-2': 0.83em,
            'size-3': 1.17em,
            'size-4': 1.25em
        )
    ));
}
```

```html
<div class="foo-size-3">...</div>
```

CSS output:

```css
[class*='foo-'][class*='-size-1'] {
    font-size: 0.67em;
}
@media screen and (min-width: 460px) {
    [class*='foo-'][class*='-size-1'] {
        font-size: calc(0.67em + 0 * ((100vw - 460px) / (480 / 10)));
    }
}
@media screen and (min-width: 940px) {
    [class*='foo-'][class*='-size-1'] {
        font-size: 0.67em;
    }
}
[class*='foo-'][class*='-size-2'] {
    font-size: 0.83em;
}
@media screen and (min-width: 460px) {
    [class*='foo-'][class*='-size-2'] {
        font-size: calc(0.83em + 0 * ((100vw - 460px) / (480 / 10)));
    }
}
@media screen and (min-width: 940px) {
    [class*='foo-'][class*='-size-2'] {
        font-size: 0.83em;
    }
}
[class*='foo-'][class*='-size-3'] {
    font-size: 1.067em;
}
@media screen and (min-width: 460px) {
    [class*='foo-'][class*='-size-3'] {
        font-size: calc(1.067em + 0.103 * ((100vw - 460px) / (480 / 10)));
    }
}
@media screen and (min-width: 940px) {
    [class*='foo-'][class*='-size-3'] {
        font-size: 1.17em;
    }
}
[class*='foo-'][class*='-size-4'] {
    font-size: 1.13849em;
}
@media screen and (min-width: 460px) {
    [class*='foo-'][class*='-size-4'] {
        font-size: calc(1.13849em + 0.11151 * ((100vw - 460px) / (480 / 10)));
    }
}
@media screen and (min-width: 940px) {
    [class*='foo-'][class*='-size-4'] {
        font-size: 1.25em;
    }
}
```

### Mixin: `horizontal-center()`

> Center an element horizontally

```scss
@include horizontal-center();
```

#### Example

.element {
    @include horizontal-center();
}

CSS output:

```css
.element {
    left: 0;
    right: 0;
    margin: auto;
}
```

### Mixin: `bg-overlay()`

> Center a background overlay for an element

```scss
@include bg-overlay($background);
```

#### Example

```scss
.billboard {
    @include bg-overlay('bg.png');
}
```

CSS output:

```css
.billboard {
    position: relative;
}
.billboard:before {
    content: '';
    z-index: 0;
    background: 'bg.png';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}
```

### Function: `retrieve-value()`

> Retrieve a value from another module's configuration

```scss
retrieve-value($module, $args);
```

<table class="table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>module.namespace</td>
            <td>The private name of the module</td>
        </tr>
        <tr>
            <td>module.defaults</td>
            <td>Default config for the module</td>
        </tr>
        <tr>
            <td>args</td>
            <td>The option to fetch (can be nested)</td>
        </tr>
    </tbody>
</table>

#### Example

Calling a module with the name of another module [[source]](https://github.com/esr360/One-Nexus/blob/master/src/modules/objects/dropdown/_dropdown.scss#L17):

```scss
// retrieve the 'name' value from the 'navigation' module
@include module('#{retrieve-value(('navigation', $navigation), 'name')}') {
    ...
}
```

### Mixin: `triangle()`

> Add a triangle point to an element's side

```scss
@include triangle($custom);
```

<table class="table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>custom.position</td>
            <td>The position of the triangle on the element [top|bottom|left|right]</td>
        </tr>
        <tr>
            <td>custom.color</td>
            <td>The color of the triangle</td>
        </tr>
        <tr>
            <td>custom.size</td>
            <td>The size of the triangle</td>
        </tr>
    </tbody>
</table>

#### Example

```scss
.element {
    @include triangle((
        'position': top, 
        'color': rgba(black, 0.8),
        'size': 0.5em
    ));
}
```

CSS output:

```css
.element:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
}
.element:after {
    margin-left: -0.5em;
    top: 100%;
    left: 50%;
    border-left: solid 0.5em transparent;
    border-right: solid 0.5em transparent;
    border-top: solid 0.5em rgba(0, 0, 0, 0.8);
}
```

### Mixin: `vertical-center()`

> Vertically center an element

```scss
@include vertical-center($position);
```

#### Example

```scss
.vertical-center {
    @include vertical-center(absolute);
}
```

CSS output:

```css
.vertical-center {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```

### Mixin: `vertical-rhythm()`

> Add vertical rhythm to an element

```scss
@include vertical-rhythm($position);
```

#### Example

```scss
.foo {
    @include vertical-rhythm();
}

.bar {
    @include vertical-rhythm('top');
}

.fizz {
    @include vertical-rhythm('bottom');
}
```

CSS output:

```css
.foo:first-child {
    margin-top: 0;
}
.foo:last-child {
    margin-bottom: 0;
}

.bar:first-child {
    margin-top: 0;
}

.fizz:last-child {
    margin-bottom: 0;
}
```