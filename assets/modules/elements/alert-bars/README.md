## One-Nexus Alert Bars/Boxes

```html
<div class="alert-bar-help">A helpful alert bar.</div>
<p class="alert-bar-info">An informative alert bar.</p>
<div class="alert-bar-success"><p>A successful alert bar.</p></div>
<span class="alert-bar-error">An error alert bar.</span>
```

### Sass

Load the alert bar styles by including the `alert-bars()` mixin:

```scss
@include alert-bars();
```

The following options can be passed to the mixin to customize the alert-bars:

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
            <td>colors</td>
            <td>A Sass map where the key will be used as a modifier and the value will be used as the color</td>
        </tr>
        <tr>
            <td>text-color</td>
            <td>Text color for alert bars</td>
        </tr>
        <tr>
            <td>bar-padding</td>
            <td>Padding for alert bars</td>
        </tr>
        <tr>
            <td>box-padding</td>
            <td>Padding for alert boxes</td>
        </tr>
    </tbody>
</table>

The above options can be passed to the mixin like so:

```scss
@include alert-bars((
    'colors':(
        'carrot': #F97E52,
        'error' : #DA4D44,
        'rose'  : #D870AD
    )
));
```

```
html<div class="alert-bar-carrot">A carrot alert bar.</div>
```

### Examples

#### With Icon

```html
<div class="alert-bar-success"><i class="alert-bar_icon fa fa-times"></i> A successful alert bar.</div>
<div class="alert-bar-error"><i class="alert-bar_icon fa fa-times"></i> An error alert bar.</div>
```

#### With Right-Aligned Icon

```html
<div class="alert-bar-success"><i class="alert-bar_icon-right fa fa-times"></i> A successful alert bar.</div>
```

#### Alert Box

```html
<div class="alert-box-info">
    <h3 class="heading-size-4">This is an Alert Box</h3>
    <p>...<p>
</div>
```