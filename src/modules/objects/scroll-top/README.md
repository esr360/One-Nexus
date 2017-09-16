## Scroll-Top

##### Components

* _This module has no components_

##### Modifiers

* _This module has no modifiers_

### Quick Look

> Tip: Utilise the [Button](#TODO) classes to style the scrollTop element

```html
<a class="scroll-top button-icon-border" href="#site-content">
    <i class="fa fa-angle-up"></i>
</a>
```

### Options

For default values view the [`scroll-top.json`](scroll-top.json) file. Standard CSS properties for modules, components and modifiers are not documented below - [read more](#TODO).

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
            <td>position</td>
            <td>The position on the screen for the scroll-top icon (top, right, bottom, left)</td>
        </tr>
        <tr>
            <td>hide-below</td>
            <td>The width at which the icon should be hidden</td>
        </tr>
        <tr>
            <td>activePosition</td>
            <td>The scrollY position at which the element should appear</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `scroll-top` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "scroll-top": {
            "position": ["auto", "2rem", "2rem", "auto"],
        }
    }
}
```

### Sass

Load the scroll-top styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `scroll-top()` mixin:

```scss
@import '../../app';
@import './config.json';

@include scroll-top();
```

### JavaScript

Call the `scrollTop()` function in your theme's main `js` file (e.g. [themes/One-Nexus/One-Nexus.js](../../../themes/One-Nexus/One-Nexus.js)):

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

app.scrollTop();
```

#### API

##### Show

```js
app.scrollTop().show();
```

##### Hide

```js
app.scrollTop().hide();
```