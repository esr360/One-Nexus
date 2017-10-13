## Lists

##### Components

* _This module has no components_

##### Modifiers

* reset
* clear
* inline
* divider
* arrow(-highlight)
* group

### Quick Look

```html
<ul class="list">
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
</ul>
```

### Options

For default values view the [`lists.json`](lists.json) file. Standard CSS properties for modules, components and modifiers are not documented below - [learn more](https://github.com/esr360/Synergy/wiki/Configuring-a-Module#pass-custom-css-to-modules).

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
            <td><code>inline-spacing</code></td>
            <td>The space between list items contained within a list which has the `inline` modifier</td>
        </tr>
        <tr>
            <td><code>arrow-icon</code></td>
            <td>The <a href="http://astronautweb.co/snippet/font-awesome/" target="blank">content value</a> for a Font Awesome icon</td>
        </tr>
        <tr>
            <td><code>arrow-color</code></td>
            <td>The color for the above Font Awesome icon</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `lists` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "lists": {
            "arrow-icon": "'\\f138'",
            "arrow-color": "#00a9ff",
        }
    }
}
```

### Sass

Load the list styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `lists()` mixin:

```scss
@import '../../app';
@import './config.json';

@include lists();
```

### Examples

```html
<ul class="list-reset">
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
</ul>
```

```html
<ul class="list-inline">
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
</ul>
```

```html
<ul class="list-arrow-highlight">
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
</ul>
```

```html
<ul class="list-group-reset">
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
</ul>
```