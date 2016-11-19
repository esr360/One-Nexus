## One-Nexus Blockquotes

```html
<blockquote class="blockquote">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, purus a varius mattis.
</blockquote>
```

### Sass

Load the blockquote styles by including the `blockquotes()` mixin:

```scss
@include blockquotes();
```

The following options can be passed to the mixin to customize the blockquotes:

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
            <td>icon[size]</td>
            <td>The size of the quote icon</td>
        </tr>
        <tr>
            <td>icon[padding]</td>
            <td>The left/right spacing for the quote icon to fit</td>
        </tr>
        <tr>
            <td>icon[font-family]</td>
            <td>The font-family for the quote icon</td>
        </tr>
        <tr>
            <td>icon[left]</td>
            <td>Set the enablement and position (top/bottom) of the left icon</td>
        </tr>
        <tr>
            <td>icon[right]</td>
            <td>Set the enablement and position (top/bottom) of the right icon</td>
        </tr>
        <tr>
            <td>pull[width]</td>
            <td>Default width for pull-quotes</td>
        </tr>
        <tr>
            <td>pull[max-width]</td>
            <td>The max-width for pull-quotes</td>
        </tr>
        <tr>
            <td>pull[margin]</td>
            <td>The margin for pull-quotes</td>
        </tr>
    </tbody>
</table>

The above options can be passed to the mixin like so:

```scss
@include blockquotes((
    'quotes': '\f10d''\f10e''\f053''\f054',
    'icon':(
        'font-family': FontAwesome,
        'size': 2em,
        'height': 1em,
        'left': (true, top),
        'right': (true, bottom)
    )
));
```

> The above example uses FontAwesome icons for the quotes using their <a href="http://astronautweb.co/snippet/font-awesome/" target="blank">content values</a>

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