## One-Nexus modals

##### Components

* content
* close

##### Modifiers

* visible
* animate(-top, -bottom, -left, -right, -zoom)

##### Quick Look

```html
<a href="#modal_1">Modal 1 Trigger</a>
<a href="#foo">Modal 2 Trigger</a>

<div class="modal" id="modal_1">
    <div class="modal_close"><i class="fa fa-times"></i></div>
    <div class="modal_content">Modal 1</div>
</div>

<div class="modal" id="foo">
    <div class="modal_content">Modal 2</div>
    <div class="modal_close">Close Modal</div>
</div>

<!-- Using data-attribute -->

<a href="#" data-modal-content="<p>Modal 3</p>">Modal 3 Trigger</a>
```

### Options

For default values view the [`modals.json`](modals.json) file.

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
            <td>default-animation</td>
            <td>The default animation style modals should use (top, bottom, left, right, zoom)</td>
        </tr>
        <tr>
            <td>background</td>
            <td>The background of modal boxes</td>
        </tr>
        <tr>
            <td>text-color</td>
            <td>The text color for modal boxes</td>
        </tr>
        <tr>
            <td>radius</td>
            <td>The border radius of modal boxes</td>
        </tr>
        <tr>
            <td>z-index</td>
            <td>The z-index for modal boxes</td>
        </tr>
        <tr>
            <td>content-padding</td>
            <td>The padding for the modal content</td>
        </tr>
        <tr>
            <td>close-icon.size</td>
            <td>The font-size for the close icon</td>
        </tr>
        <tr>
            <td>close-icon.color</td>
            <td>The color for the close icon</td>
        </tr>
        <tr>
            <td>close-icon.hover-color</td>
            <td>The hover color for the close icon</td>
        </tr>
        <tr>
            <td>close-icon.position</td>
            <td>The [top, right] position for the close icon</td>
        </tr>
        <tr>
            <td>overlay.module</td>
            <td>The name of the module to act as the overlay</td>
        </tr>
        <tr>
            <td>overlay.enabled</td>
            <td>Display an overlay over the page when a modal is open</td>
        </tr>
        <tr>
            <td>overlay.clickToClose</td>
            <td>Close the modal if the overlay is clicked</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `modals` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "modals": {
            "default-animation": "zoom",
            "close-icon": {
                "position": ["20px", "20px"]
            },
            "overlay": {
                "clickToClose": false
            }
        }
    }
}
```

### Sass

Load the modal styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `modals()` mixin:

```scss
@import '../../app';
@import './config.json';

@include modals();
```

### JavaScript

Call the `modal()` function in your theme's main `js` file (e.g. [themes/One-Nexus/One-Nexus.js](../../../themes/One-Nexus/One-Nexus.js)):

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

app.modal();
```

#### API

##### Show/Hide

You can show or hide specific modals by using either the `.show()`, `.hide()` or `.toggle()` methods.

```js
app.modal(document.getElementById('foo')).show();

app.modal(document.getElementById('foo')).hide();

app.modal(document.getElementById('foo')).toggle();
```

### Examples

#### Custom Animation

To open a modal with a different animation to the default one, pass the `animate` modifier, along with a modifier representing the desired animation style.

The provided animation styles include:

* top
* bottom
* left
* right
* zoom

```html
<a href="#foo">Modal Trigger</a>

<div class="modal-animate-bottom" id="foo">Modal</div>
```

#### Creating From Data-Attribute

```html
<a href="#" data-modal-content="Lorem ipsum dolor sit amet">Click Me</a>
```

> HTML is allowed inside the `data-modal-content` attribute 

```html
<div data-modal-content="<h1 class='heading'>Title</h1><p>Lorem ipsum dolor sit amet</p>">Click Me</div>
```

##### Passing Custom Style

```html
<a href="#" data-modal-content="<p>Lorem ipsum dolor sit amet</p>" data-modal-style="zoom">Click Me</a>
```

#### Targeting and Triggering From Data-Attribute

Trigger an existing modal by passing the modal's id to the `data-modal-target` attribute on the desired modal trigger. The element with this attribute will open the modal when clicked.

```html
<div data-modal-target="modal-demo">Click Me</div>

<div id="modal-demo" class="modal">...</div>
```

#### Custom/Multiple Close Triggers

Any element can become a modal close trigger by adding the `modal_close` class to the desired element.

```html
<div data-modal-target="modal-demo">Open Modal</div>

<div class="modal_close">Close Modal</div>

<div id="modal-demo" class="modal">
    <div class="modal_close">Close Modal</div>
    ...
</div>
```