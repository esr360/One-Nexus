## Header

##### Components

* wrapper

##### Modifiers

* bar
* absolute
* dark
* sticky
* fixed

### Quick Look

> The `header` module extends the [`logo`](#TODO), [`navigation`](#TODO) and [`overlay`](#TODO) modules

```html
<header class="header">
    <div class="header_wrapper">
        <div class="logo">
            <a href="#" alt="One-Nexus logo">
                <img src="logo.png" alt="One-Nexus Logo">
            </a>
        </div>
        <nav class="navigation">
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </nav>
    </div>
</header>
```

### Options

> For default values view the [`header.json`](header.json) file

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
            <td>background</td>
            <td>The main background for the header module</td>
        </tr>
        <tr>
            <td>height</td>
            <td>The height for the header module</td>
        </tr>
        <tr>
            <td>font-size</td>
            <td>The font size for the header module</td>
        </tr>
        <tr>
            <td>z-index</td>
            <td>The z-index from the header module</td>
        </tr>
        <tr>
            <td>bar</td>
            <td>Apply the `bar` modifier styles to the header to give alignment to the `logo` and `navigation` modules</td>
        </tr>
        <tr>
            <td>absolute.enabled</td>
            <td>Apply the `absolute` modifier styles to the header</td>
        </tr>
        <tr>
            <td>absolute.top-position</td>
            <td>Apply a `margin-top` to the absolutely positioned header</td>
        </tr>
        <tr>
            <td>dark.enabled</td>
            <td>Apply the `dark` modifier styles to the header</td>
        </tr>
        <tr>
            <td>dark.background</td>
            <td>Set the background for the header when the `dark` modifier is applied</td>
        </tr>
        <tr>
            <td>height</td>
            <td>Set the header height</td>
        </tr>
        <tr>
            <td>fixed</td>
            <td>Set to apply the `fixed` modifier styles to the header, to keep the header in a fixed position</td>
        </tr>
        <tr>
            <td>sticky.enabled</td>
            <td>Dynamically add/remove the `fixed` modifer when the header is scrolled out of viewport</td>
        </tr>
        <tr>
            <td>sticky.offset</td>
            <td>(Optional) Set an offset value for applying the `fixed` modifier - leave blank to use the header's default `offsetTop` value</td>
        </tr>
        <tr>
            <td>sticky.background</td>
            <td>Apply a different background to the header when 'stuck'</td>
        </tr>
        <tr>
            <td>sticky.height</td>
            <td>Apply a different height to the header when 'stuck'</td>
        </tr>
        <tr>
            <td>sticky.logo-height</td>
            <td>Apply a different height to the logo module when the header is 'stuck'</td>
        </tr>
        <tr>
            <td>sticky.font-size</td>
            <td>Apply a different font-size to the header when 'stuck'</td>
        </tr>
        <tr>
            <td>overlay</td>
            <td>[Synergy Selector](#TODO) (ID or module name only) for the [overlay module](#TODO)</td>
        </tr>
        <tr>
            <td>navigation</td>
            <td>Synergy Selector](#TODO) (ID or module name only) for the [navigation module](#TODO)</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `header` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "header": {
            "absolute": {
                "enabled": true,
                "top-position": "50px"
            }, 
            "dark": {
                "enabled": true
            },
            "sticky": {
                "enabled": true
            }
        }
    }
}
```

### Sass

Load the Header styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `header()` mixin:

```scss
@import '../../app';
@import './config.json';

@include header();
```

### JavaScript

Call the `header()` function in your theme's main `js` file (e.g. [themes/One-Nexus/One-Nexus.js](../../../themes/One-Nexus/One-Nexus.js)):

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

app.header();
```

### Examples

#### Absolute Header Using Modifier

```html
<header class="header-absolute">
    ...
</header>
```

#### Dark Header Using Modifier

```html
<header class="header-dark">
    ...
</header>
```

#### Sticky Header Using Modifier

```html
<header class="header-sticky">
    ...
</header>
```

#### Combined Modifiers

```html
<header class="header-dark-sticky">
    ...
</header>
```