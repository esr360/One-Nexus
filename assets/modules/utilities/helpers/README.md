## Helper Classes

> This module has no options and is unconfigurable

### Sass

Load the Helper Classes in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `helpers()` mixin:

```scss
@import '../../app';
@import './config.json';

@include helpers();
```

### Helper Classes

* [.hidden](#hidden)
* [.visually-hidden](#visually-hidden)
* [.invisible](#invisible)
* [.visible](#visible)
* [.clearfix/.cf](#clearfix--cf)
* [.greyscale](#greyscale)
* [.disabled](#disabled)
* [.wrapper](#wrapper)
* [.text-center](#text-center)
* [.text-left](#text-left)
* [.text-right](#text-right)
* [.object-center](#object-center)
* [.va-top](#va-top)
* [.va-middle](#va-middle)
* [.va-bottom](#va-bottom)
* [.v-center](#v-center)
* [.min-#{$bp}](#min-bp)
* [.max-#{$bp}](#max-bp)

#### .hidden

Hide visually and from screen readers

```html
<div class="hidden">...</div>
```

```scss
.element {
    @extend %hidden;
}
```

#### .visually-hidden

Hide only visually, but keep for screen readers

```html
<div class="visually-hidden">...</div>
```

```scss
.element {
    @extend %visually-hidden;
}
```

#### .invisible

Hide visually and from screen readers, but maintain layout

```html
<div class="invisible">...</div>
```

```scss
.element {
    @extend %invisible;
}
```

#### .visible

```html
<div class="visible">...</div>
```

```scss
.element {
    @extend %visible;
}
```

#### .clearfix / .cf

Clear floated elements

```html
<div class="clearfix">...</div>

<div class="cf">...</div>
```

```scss
.element {
    @extend %clearfix;
}
```

#### .greyscale

Turn an element greyscale

```html
<div class="greyscale">...</div>
```

```scss
.element {
    @extend %greyscale;
}
```

#### .disabled

```html
<div class="disabled">...</div>
```

```scss
.element {
    @extend %disabled;
}
```

#### .wrapper

```html
<div class="wrapper">...</div>
```

```scss
.element {
    @extend %wrapper;
}
```

#### .text-center

```html
<div class="text-center">...</div>
```

#### .text-left

```html
<div class="text-left">...</div>
```

#### .text-right

```html
<div class="text-right">...</div>
```

#### .object-center

```html
<div class="object-center">...</div>
```

```scss
.element {
    @extend %object-center;
}
```

#### .va-top

```html
<div class="va-top">...</div>
```

#### .va-middle

```html
<div class="va-middle">...</div>
```

#### .va-bottom

```html
<div class="va-bottom">...</div>
```

#### .v-center

```html
<div class="v-center">...</div>
```

#### .min-#{$bp}

Show only when resolution is at least X, where X is a value from the ['breakpoints'](#TODO) Grid System option

```html
<div class="min-break-1">...</div>
<div class="min-break-3">...</div>
```

#### .max-#{$bp}

Show only when resolution is at most X, where X is a value from the ['breakpoints'](#TODO) Grid System option

```html
<div class="max-break-1">...</div>
<div class="max-break-3">...</div>
```