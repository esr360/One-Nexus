## One-Nexus Forms

##### Components

* label
* group(-compound, -has-icon, -validate)
* input
* icon
* bullet

##### Modifiers

* _This module has no modifiers_

##### Quick Look

```html
<form class="form">
    <div class="form_group">
        <label class="form_label">Your Name</label>
        <input class="form_input" type="text" placeholder="E.g. John Doe">
    </div>
    <div class="form_group">
        <label class="form_label">Your Message</label>
        <textarea class="form_input" placeholder="Enter your message..."></textarea>
    </div>
    <button class="button" type="submit">Submit</button>
</form>
```

### Options

For default values view the [`forms.json`](forms.json) file.

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

To modify any of the above options, pass them to the `forms` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "forms": {
            "valid-color": "#00cbff",
            "invalid-color": "#8700ff"
        }
    }
}
```

### Sass

Load the carousel styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `forms()` mixin:

```scss
@import '../../app';
@import './config.json';

@include forms();
```

### Examples

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