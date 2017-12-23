## Headings

##### Components

* group

##### Modifiers

* size-{x}
* heavy
* light
* uppercase
* flush


### Quick Look

```html
<h1 class="heading-size-8">Size 8 Heading</h1>

<h3 class="heading-size-6-heavy">Size 6 Heavy Heading</h3>

<div class="heading-size-4-light-uppercase">Size 4 Light Uppercase Heading</div>

<span class="heading-flush-uppercase-size-2">Flushed Uppercase Size 2 Heading</div>

<h4 class="heading">Default Heading</h4>
```

### Options

For default values view the [`forms.json`](forms.json) file. Standard CSS properties for modules, components and modifiers are not documented below - [learn more](https://github.com/esr360/Synergy/wiki/Configuring-a-Module#pass-custom-css-to-modules).

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
            <td><code>group_heading-lineHeight</code></td>
            <td>The line-height for headings contained within a `heading_group` component</td>
        </tr>
        <tr>
            <td><code>sizes</code></td>
            <td>An object where each key will create a modifier using the value for its font size</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `forms` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "headings": {
            "sizes": {
                "small": "8px",
                "large": "20px"
            }
        }
    }
}
```

#### Sizes

This option accepts an object and will create a modifier for each key using the key's value for the modifier's font-size:

```json
"sizes": {
    "size-1": "0.67em",
    "size-2": "0.83em",
    "size-3": "1.17em",
    "size-4": "1.25em",
    "size-5": "1.5em",
    "size-6": "2em",
    "size-7": "2.4em",
    "size-8": "3em",
    "size-9": "3.4em"
}
```

```html
<h4 class="heading-size-8">Size 8 Heading</h4>
```

By default, a value of <code>typography-config('sizes')</code> is passed to the "sizes" option, which is a funtion to fetch the font sizes from the <a href="https://github.com/esr360/One-Nexus/tree/master/src/modules/utilities/typography#default-values">Typography module</a>.

### Sass

Load the form styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `forms()` mixin:

```scss
@import '../../app';
@import './config.json';

@include forms();
```

### Examples

#### Heading Group

```html
<div class="heading_group">
    <h3 class="heading-size-6">Primary Heading</h3>
    <h4 class="heading-light-size-4">Secondary Heading</h4>
</div>
```