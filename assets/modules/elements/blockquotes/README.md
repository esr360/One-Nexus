## One-Nexus Blockquotes

```html
<blockquote class="blockquote">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, purus a varius mattis, ligula dui imperdiet nisi, quis tincidunt sem tortor nec diam. Suspendisse id nunc pharetra, pulvinar nisl id, maximus nisl.
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
            <td><code>name</code></td>
            <td>The name used when generating the CSS selector</td>
        </tr>
        <tr>
            <td><code>font-family</code></td>
            <td>The font-family for blockquotes to use</td>
        </tr>
        <tr>
            <td><code>quotes</code></td>
            <td><a href="https://css-tricks.com/almanac/properties/q/quotes/" target="blank">Content values</a> for quotes to act as a decorative icon</td>
        </tr>
        <tr>
            <td><code>icon[size]</code></td>
            <td>The size of the quote icon</td>
        </tr>
        <tr>
            <td><code>icon[padding]</code></td>
            <td>The left/right spacing for the quote icon to fit</td>
        </tr>
        <tr>
            <td><code>icon[font-family]</code></td>
            <td>The font-family for the quote icon</td>
        </tr>
        <tr>
            <td><code>icon[left]</code></td>
            <td>Set the enablement and position (top/bottom) of the left icon</td>
        </tr>
        <tr>
            <td><code>icon[right]</code></td>
            <td>Set the enablement and position (top/bottom) of the right icon</td>
        </tr>
        <tr>
            <td><code>pull[width]</code></td>
            <td>Default width for pull-quotes</td>
        </tr>
        <tr>
            <td><code>pull[max-width]</code></td>
            <td>The max-width for pull-quotes</td>
        </tr>
        <tr>
            <td><code>pull[margin]</code></td>
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