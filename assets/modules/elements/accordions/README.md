## One-Nexus Accordions

##### Components

* section
* title
* content

##### Modifiers

* keepOpen

### Quick Look

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

### Options

For default values view the [`accordions.json`](accordions.json) file.

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
            <td>icon.glyph</td>
            <td>The <a href="http://astronautweb.co/snippet/font-awesome/" target="blank">content value</a> for a Font Awesome icon</td>
        </tr>
        <tr>
            <td>icon.color</td>
            <td>The color for the open/close icon</td>
        </tr>
        <tr>
            <td>icon.active-color</td>
            <td>The color for the open/close icon when the corresponding section is open</td>
        </tr>
        <tr>
            <td>section.margin</td>
            <td>The vertical spacing between each accordion section</td>
        </tr>
        <tr>
            <td>title.background</td>
            <td>The background color for the accordion title (the clickable part)</td>
        </tr>
        <tr>
            <td>title.color</td>
            <td>The text color for the accordion title (the clickable part</td>
        </tr>
        <tr>
            <td>title.border</td>
            <td>The border for the accordion title (the clickable part)</td>
        </tr>
        <tr>
            <td>title.radius</td>
            <td>The border-radius for the accordion title (the clickable part)</td>
        </tr>
        <tr>
            <td>title.padding</td>
            <td>The padding for the accordion title (the clickable part</td>
        </tr>
        <tr>
            <td>title.active.background</td>
            <td>The background color for the accordion title when the corresponding section is open</td>
        </tr>
        <tr>
            <td>title.active.color</td>
            <td>The text color for the accordion title when the corresponding section is open</td>
        </tr>
        <tr>
            <td>title.active.border</td>
            <td>The border for the accordion title when the corresponding section is open</td>
        </tr>
        <tr>
            <td>title.active.radius</td>
            <td>The border-radius for the accordion title when the corresponding section is open</td>
        </tr>
        <tr>
            <td>content.background</td>
            <td>The backgound for the accordion content</td>
        </tr>
        <tr>
            <td>content.color</td>
            <td>The text color for the accordion content</td>
        </tr>
        <tr>
            <td>content.border</td>
            <td>The border for the accordion content</td>
        </tr>
        <tr>
            <td>content.radius</td>
            <td>The border-radius for the accordion content</td>
        </tr>
        <tr>
            <td>content.padding</td>
            <td>The padding for the accordion content</td>
        </tr>
        <tr>
            <td>activeClass</td>
            <td>The class to be applied when a section is open (active)</td>
        </tr>
        <tr>
            <td>animationSpeed</td>
            <td>The duration of the open/close animation in milliseconds</td>
        </tr>
        <tr>
            <td>keepOpenModifier</td>
            <td>The name of the modifier for accordions which allow multiple open sections</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `accordions` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "accordions": {
            "title": {
                "color": "#0066ff"
            },
            "content": {
                "background": "#0000cc"
            },
            "animationSpeed": 800
        }
    }
}
```

### Sass

Load the accordion styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `accordions()` mixin:

```scss
@import '../../app';
@import './config.json';

@include accordions();
```

### JavaScript

Call the `accordion()` function in your theme's main `js` file (e.g. [themes/One-Nexus/One-Nexus.js](../../../themes/One-Nexus/One-Nexus.js)):

```js
import * as app from '../../app';
import config from './config.json';
app.theme = config.app;

app.accordion();
```

#### API

##### Open/Close

You can open or close specific sections of an accordion by using either the `.open()` or `.close()` methods.

```js
// Opens all sections of accordion with ID 'foo'
app.accordion(document.getElementById('foo')).open();

// Opens first section of accordion with ID 'foo'
app.accordion(document.getElementById('foo')).open(1);

// Opens first section of all accordions
app.accordion().open(1);

// Opens all sections with class 'foo' for all accordions
app.accordion().open(document.querySelectorAll('.foo'));

// Opens all sections with class 'foo' for all accordions
app.accordion().open('.foo');
```

### Examples

#### Open by Default

Add the `active` class to any sections you wish to be open by default.

```html
<div class="accordion">
    <div class="accordion_section active">
        ...
    </div>
    <div class="accordion_section">
        ...
    </div>
</div>
```

#### Multiple Open Sections

To allow accordions to have multiple open sections simultaneously, add the `keepOpen` modifier to the target accordion:

```html
<div class="accordion-keepOpen">
    <div class="accordion_section">
        ...
    </div>
    <div class="accordion_section">
        ...
    </div>
</div>
```