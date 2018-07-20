## Tabs

##### Components

* nav(-round, -center, -left, -right, -full)
* content(-block)
* item

##### Modifiers

* _This module has no modifiers_

### Quick Look

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

For default values view the [`tabs.json`](tabs.json) file. Standard CSS properties for modules, components and modifiers are not documented below - [learn more](https://github.com/esr360/Synergy/wiki/Configuring-a-Module#pass-custom-css-to-modules).

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

Pass custom options to the `tabs` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "tabs": {
            "nav": {
                "item": {
                    "border-radius": "12px",
                    "background": "#f21313",
                    "padding": "8px 12px"
                }
            },
            "content": {
                "glueHeight": "6px",
                "glueColor": "color(brand, brand-1)"
            }
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

#### Tabs With Glued Content

```html
<div class="tabs">
    <ul class="tabs_nav">
        ...
    </ul>
    
    <div class="tabs_content-block-glue">
        ...
    </div>
</div>
```

#### Tabs With Aligned Navigation

##### Left (default)

```html
<ul class="tabs_nav-left">
    ...
</ul>
```

##### Right

```html
<ul class="tabs_nav-right">
    ...
</ul>
```

##### Center

```html
<ul class="tabs_nav-center">
    ...
</ul>
```

#### Tabs With Full-Width Navigation

```html
<ul class="tabs_nav-full">
    ...
</ul>
```

#### Tabs With Pill Navigation

```html
<div class="tabs">
    <ul class="tabs_nav-center">
        <li class="tabs_nav_item active">New Arrivals</li>
        <li class="tabs_nav_item">Best Sellers</li>
        <li class="tabs_nav_item">On Offer</li>
    </ul>
    
    <div class="tabs_content object">
        ...  
    </div>  
</div>
```