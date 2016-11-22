## One-Nexus Forms

#### Default

```html
<form class="form">
    <div class="form_group">
        <label class="form_label">Your Name</label>
        <input type="text" class="form_input" placeholder="E.g. John Doe">
    </div>
    <div class="form_group">
        <label class="form_label">Your Message</label>
        <textarea class="form_input" placeholder="Enter your message..."></textarea>
    </div>
    <button type="submit" class="button">Submit</button>
</form>
```

#### With HTML5 Validation

```html
<form class="form">
    <div class="form_group-validate">
        <input required type="text" class="form_input" placeholder="E.g. John Doe">
        <label class="form_label">Your Name</label>
    </div>
    <div class="form_group-validate">
        <textarea required class="form_input" placeholder="Enter your message..."></textarea>
        <label class="form_label">Your Message</label>
    </div>
    <button type="submit" class="button">Submit</button>
</form>
```

### Sass

Load the form styles by including the `forms()` mixin:

```scss
@include accordions();
```

The following options can be passed to the mixin to customize the forms:

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
            <td><code>'form'</code></td>
        </tr>
        <tr>
            <td><code>input-color</code></td>
            <td>The text color for input elements</td>
            <td><code>core('text-color')</code></td>
        </tr>
        <tr>
            <td><code>input-border</code></td>
            <td>The border for input elements</td>
            <td><code>1px solid color('greyscale', 'grey-3')</code></td>
        </tr>
        <tr>
            <td><code>input-padding</code></td>
            <td>The padding for input elements</td>
            <td><code>0.75em</code></td>
        </tr>
        <tr>
            <td><code>valid-color</code></td>
            <td>The color for valid HTML5 inputs</td>
            <td><code>color('validation', 'valid')</code></td>
        </tr>
        <tr>
            <td><code>invalid-color</code></td>
            <td>The color for invalid HTML5 inputs</td>
            <td><code>color('validation', 'valid')</code></td>
        </tr>
    </tbody>
</table>

The above options can be passed to the mixin like so:

```scss
@include forms((
    'input-color': color('brand', 'brand-3'),
    'input-border': 1px solid color('brand', 'brand-3')
));
```

### Examples

#### Form Group With Icon

```html
<form class="form">
    <label class="form_label">Username</label>
    <div class="form_group-has-icon">
        <input type="text" class="form_input" placeholder="Ex: SkyUX">
        <i class="form_icon fa fa-user"></i>
    </div>
</form>
```

#### Tighter Form Groups (with icons)

```html
<form class="form">
    <div class="form_group-compound-has-icon">
        <input type="text" class="form_input" placeholder="Username">
        <i class="form_icon fa fa-user"></i>
    </div>
    <div class="form_group-compound-has-icon">
        <input type="password" class="form_input" placeholder="••••••••">
        <i class="form_icon fa fa-key"></i>
    </div>
</form>
```