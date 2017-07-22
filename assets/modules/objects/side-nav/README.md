## Side Nav

##### Components

* toggle
* close
* dropdown_toggle

##### Modifiers

* visible

##### Quick Look

> You can populate the Side-Nav from an existing menu (see the module's [options](#options)) - by default the [Navigation](#TODO) module is used to populate the Side-Nav

```html
<div class="sideNav">
    <nav>
        ...
    </nav>
</div>
```

### Options

> For default values view the [`side-nav.json`](side-nav.json) file

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
            <td>parent.color</td>
            <td>The text color for top level menu items</td>
        </tr>
        <tr>
            <td>parent.background</td>
            <td>The background for top level menu items</td>
        </tr>
        <tr>
            <td>parent.left-border</td>
            <td>The left border for the top level menu items</td>
        </tr>
        <tr>
            <td>parent.hover.background</td>
            <td>The background for hovered top level menu items</td>
        </tr>
        <tr>
            <td>parent.active.background</td>
            <td>The background for active top level menu items</td>
        </tr>
        <tr>
            <td>item.padding</td>
            <td>The padding for menu items</td>
        </tr>
        <tr>
            <td>item.color</td>
            <td>The text color for menu items</td>
        </tr>
        <tr>
            <td>item.background</td>
            <td>The background for menu items</td>
        </tr>
        <tr>
            <td>item.top-border</td>
            <td>The top border for menu items</td>
        </tr>
        <tr>
            <td>item.bottom-border</td>
            <td>The bottom border for menu items</td>
        </tr>
        <tr>
            <td>item.left-border</td>
            <td>The left border for menu items</td>
        </tr>
        <tr>
            <td>item.right-border</td>
            <td>The right border for menu items</td>
        </tr>
        <tr>
            <td>item.hover.color</td>
            <td>The text color for menu items when hovered</td>
        </tr>
        <tr>
            <td>item.hover.background</td>
            <td>The background for menu items when hovered</td>
        </tr>
        <tr>
            <td>item.hover.left-border</td>
            <td>The left border for menu items when hovered</td>
        </tr>
        <tr>
            <td>collapsible.open-by-default</td>
            <td>If enabled collapsible items will be open by default</td>
        </tr>
        <tr>
            <td>collapsible.icon</td>
            <td>The Font Awesome class name for the open/close icon</td>
        </tr>
        <tr>
            <td>navigation</td>
            <td>Synergy selector for existing navigation module to clone into the side-nav</td>
        </tr>
        <tr>
            <td>overlay</td>
            <td>Syergy selector for overlay module</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `side-nav` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "side-nav": {
            "parent": {
                "hover": {
                    "background": "color('brand', 'brand-1')"
                }
            },
            "collapsible": {
                "open-by-default": false
            }
        }
    }
}
```

### Sass

Load the side-nav styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `side-nav()` mixin:

```scss
@import '../../app';
@import './config.json';

@include side-nav();
```

### JavaScript

Call the `sideNav()` function in your theme's main `js` file (e.g. [themes/One-Nexus/One-Nexus.js](../../../themes/One-Nexus/One-Nexus.js)):

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

app.sideNav();
```

#### API

##### Show

```js
app.sideNav().show();
```

##### Hide

```js
app.sideNav().hide();
```

##### Toggle

```js
app.sideNav().toggle();
```

### Examples

#### Custom Trigger Elements

> The `toggle` component is used to toggle the side-nav depending on its current state, whereas the `close` component will only attempt to close the Side-Nav

```html
<div class="sideNav_toggle">☰</div>

<div class="sideNav">
    <div class="sideNav_close"></div>
    <nav>
        ...
    </nav>
</div>
```