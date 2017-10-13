## Blockquotes

##### Components

* _This module has no components_

##### Modifiers

* icon(-openQuote, -closeQuote)
* pull(-top, -bottom, -left, -right)
* callout

### Quick Look

```html
<blockquote class="blockquote">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, purus a varius mattis.
</blockquote>
```

### Options

For default values view the [`blockquotes.json`](blockquotes.json) file. Standard CSS properties for modules, components and modifiers are not documented below - [learn more](https://github.com/esr360/Synergy/wiki/Configuring-a-Module#pass-custom-css-to-modules).

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
            <td>font-family</td>
            <td>The font-family for blockquotes to use</td>
        </tr>
        <tr>
            <td>quotes</td>
            <td><a href="https://css-tricks.com/almanac/properties/q/quotes/" target="blank">Content values</a> for quotes to act as a decorative icon</td>
        </tr>
        <tr>
            <td>icon.size</td>
            <td>The size of the quote icon</td>
        </tr>
        <tr>
            <td>icon.padding</td>
            <td>The left/right spacing for the quote icon to fit</td>
        </tr>
        <tr>
            <td>icon.font-family</td>
            <td>The font-family for the quote icon</td>
        </tr>
        <tr>
            <td>icon.left</td>
            <td>Set the enablement and position (top/bottom) of the left quote icon</td>
        </tr>
        <tr>
            <td>icon.right</td>
            <td>Set the enablement and position (top/bottom) of the right quote icon</td>
        </tr>
        <tr>
            <td>pull.width</td>
            <td>Default width for pull-quotes</td>
        </tr>
        <tr>
            <td>pull.max-width</td>
            <td>The max-width for pull-quotes</td>
        </tr>
        <tr>
            <td>pull.margin</td>
            <td>The margin for pull-quotes</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `blockquotes` object in your theme's config file (e.g. [themes/One-Nexus/blockquotes.json](../../../themes/One-Nexus/blockquotes.json)):

```json
{
    "app": {
        "blockquotes": {
            "quotes": "'\\f10d''\\f10e''\\f053''\\f054'",
            "icon": {
                "font-family": FontAwesome,
                "size": 2em,
                "height": 1em,
                "left": (true, top),
                "right": (true, bottom)
            }
        }
    }
}
```

> The above example uses FontAwesome icons for the quote icons using their <a href="http://astronautweb.co/snippet/font-awesome/" target="blank">content values</a>

### Sass

Load the blockquote styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `blockquotes()` mixin:

```scss
@import '../../app';
@import './config.json';

@include blockquotes();
```

### Examples

#### Pull-Quote (left)

```html
<p>...<span class="blockquote-pull-left">Nam ligula eros, luctus vitae semper ut, mollis quis nunc.</span>...</p>
```

#### Pull-Quote (right)

```html
<p>...<span class="blockquote-pull-right">Nam ligula eros, luctus vitae semper ut, mollis quis nunc.</span>...</p>
```

#### Callout

```html
<blockquote class="blockquote-callout">...</blockquote>
```