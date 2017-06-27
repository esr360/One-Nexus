## One-Nexus modals

##### Components

* content
* close

##### Modifiers

* visible
* animate(-top, -bottom, -left, -right, -zoom)

##### Quick Look

```html
<a href="#modal_1">Modal Trigger</a>

<div class="modal" id="modal_1">
    ...
</div>

<!-- Using data-attribute -->

<a href="#modal_2" data-modal-content="...">Modal Trigger</a>
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
            <td>keepOpenModifier</td>
            <td>The name of the modifier for modals which allow multiple open sections</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `modals` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "modals": {
            "default-animation": "zoom",
            "overlay": false
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

You can show or hide specific modals by using either the `.show()` or `.hide()` methods.

```js
app.modal(document.getElementById('foo')).show();
```

### Examples

#### Open by Default
