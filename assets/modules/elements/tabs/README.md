## One-Nexus tabs

##### Components

* nav(-round, -center, -left, -right, -full, -large, _item)
* content(-block)
* item

##### Modifiers

* _This module has no modifiers_

##### Quick Look

```html
<div class="tabs">
    <ul class="tabs_nav">
        <li class="tabs_nav_item active">Tab Title 1</li>
        <li class="tabs_nav_item">Tab Title 2</li>
        <li class="tabs_nav_item">Tab Title 3</li>
    </ul>
    
    <div class="tabs_content-block">
        <section class="tabs_item active">
            ...
        </section>
        
        <section class="tabs_item">
            ...
        </section>

        <section class="tabs_item">
            ...
        </section>
    </div>
</div>
```

### Options

For default values view the [`tabs.json`](tabs.json) file.

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
            <td>navItem-transition</td>
            <td>The transition duration of the tabs navigation items</td>
        </tr>
        <tr>
            <td>navItem-color</td>
            <td>The text color of the tabs navigation items</td>
        </tr>
        <tr>
            <td>navItem-background</td>
            <td>The background of the tabs navigation items</td>
        </tr>
        <tr>
            <td>navItem-radius</td>
            <td>The border radius for tabs navigation items</td>
        </tr>
        <tr>
            <td>navItem-padding</td>
            <td>The padding for tabs navigation items</td>
        </tr>
        <tr>
            <td>navItem-borderColor</td>
            <td>The border color of the tabs navigation items</td>
        </tr>
        <tr>
            <td>navItem-active-color</td>
            <td>The text color of the active tabs navigation item</td>
        </tr>
        <tr>
            <td>navItem-active-background</td>
            <td>The background color of the active tabs navigation item</td>
        </tr>
        <tr>
            <td>navItem-active-borderColor</td>
            <td>The border color of the active tabs navigation item</td>
        </tr>
        <tr>
            <td>contentBlock-background</td>
            <td>The background color of the content block</td>
        </tr>
        <tr>
            <td>contentBlock-borderColor</td>
            <td>The border color of the content block</td>
        </tr>
        <tr>
            <td>contentBlock-padding</td>
            <td>The padding of the content block</td>
        </tr>
        <tr>
            <td>contentBlock-glueHeight</td>
            <td>The height of the content block glue</td>
        </tr>
        <tr>
            <td>contentBlock-glueColor</td>
            <td>The color of the content block glue</td>
        </tr>
        <tr>
            <td>activeClass</td>
            <td>The class used to toggle the active state</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `tabs` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "tabs": {
        }
    }
}
```

### Sass

Load the tabs styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `tabs()` mixin:

```scss
@import '../../app';
@import './config.json';

@include tabs();
```

### JavaScript

Call the `tabs()` function in your theme's main `js` file (e.g. [themes/One-Nexus/One-Nexus.js](../../../themes/One-Nexus/One-Nexus.js)):

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

app.tabs();
```

### Examples

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