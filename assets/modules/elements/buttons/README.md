## One-Nexus Buttons

```html
<button class="button">Button</button>
<div class="button-brand-2">Button</div>
<a href="#" class="button-round-brand-3">Button</a>
<span class="button-round-brand-3-border">Button</span>
<input type="submit" class="button-round-success" value="Button" />
<a href="#" class="button-oval-dribbble"><i class="fa fa-dribbble"></i> Button</a>
```

### Sass

Load the button styles by including the `buttons()` mixin:

```scss
@include buttons();
```

The following options can be passed to the mixin to customize the buttons:

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
            <td><code>color</code></td>
            <td>The default text-color for buttons</td>
        </tr>
        <tr>
            <td><code>background</code></td>
            <td>The default background for buttons</td>
        </tr>
        <tr>
            <td><code>transition</code></td>
            <td>The transition speed primarily used for the hover effect</td>
        </tr>
        <tr>
            <td><code>h-padding</code></td>
            <td>Thepadding for the left and right of buttons</td>
        </tr>
        <tr>
            <td><code>v-padding</code></td>
            <td>Thepadding for the tpp and bottom of buttons</td>
        </tr>
        <tr>
            <td><code>line-height</code></td>
            <td>The line height for buttons</td>
        </tr>
        <tr>
            <td><code>font-weight</code></td>
            <td>The default font weight for buttons</td>
        </tr>
        <tr>
            <td><code>font-family</code></td>
            <td>The default font family for buttons</td>
        </tr>
        <tr>
            <td><code>border-width</code></td>
            <td>The border width for buttons with the <code>border</code> modifier</td>
        </tr>
        <tr>
            <td><code>border-style</code></td>
            <td>The border style for buttons with the <code>border</code> modifier</td>
        </tr>
        <tr>
            <td><code>active-background</code></td>
            <td>The background for buttons with the <code>active</code> modifier</td>
        </tr>
        <tr>
            <td><code>active-color</code></td>
            <td>The text color for buttons with the <code>active</code> modifier</td>
        </tr>
        <tr>
            <td><code>disabled-opacity</code></td>
            <td>The opacity for disabled buttons</td>
        </tr>
        <tr>
            <td><code>round-radius</code></td>
            <td>The radius for buttons with the <code>round</code> modifier</td>
        </tr>
        <tr>
            <td><code>group-spacing</code></td>
            <td>The spacing between buttons within a group component</td>
        </tr>
        <tr>
            <td><code>group-stack</code></td>
            <td>The width at which buttons in a group component should stack ontop of one another</td>
        </tr>
        <tr>
            <td><code>sizes</code></td>
            <td>Map containing list of font-sizes to create a modifier for</td>
        </tr>
        <tr>
            <td><code>palettes</code></td>
            <td>A list of color palettes to create modifiers for</td>
        </tr>
        <tr>
            <td><code>sizes</code></td>
            <td>Options to pass to the <a href="../../tools/scss/font-sizes"><code>font-sizes()</code> mixin to determine button font-sizes</a></td>
        </tr>
    </tbody>
</table>

The above options can be passed to the mixin like so:

```scss
@include buttons((
    'background': blue,
    'group-spacing': 10px,
    'sizes':(
        'small': 8px,
        'large': 20px
    )
));
```

#### Color Palettes

This option accepts a list of palettes defined in the <a href="../utilities/color-palette.html">Color Palette</a> module.

```scss
@include buttons((
    'palettes': ('brand', 'greyscale', 'alert', 'social')
));
```

This will create a modifier for each color in each palette, with the color's key as the modifier name.

If you only want to create modifiers for specific colors in a certain palette, you can pass the keys like so:

```scss
@include buttons((
    'palettes': (
        'brand', 
        ('greyscale': ('grey-1', 'grey-3', 'grey-4')), 
        'alert', 
        ('social': ('facebook', 'twitter')
    )
));
```

You can also pass new colors as a regular map:

```scss
@include buttons((
    'palettes': (
        'brand', 'greyscale', 'alert', 'social', 
        ('foo': blue, 'bar': #FF5733)
    )
));
```

Using your new values like so:

```html
<button class="button-foo">Button</button>
<button class="button-foo-round">Button</button>
<button class="button-bar">Button</button>
<button class="button-bar-border">Button</button>
```

### Examples

#### Sizes

* size-1
* size-2
* size-3
* size-4
* size-5
* size-6
* size-7
* size-8
* size-9

```html
<button class="button-size-7">Size 7 Button</button>
```

#### Colors

##### Brand

* brand-1
* brand-2
* brand-3

```html
<button class="button-brand-3">Brand 3 Button</button>
```

##### Greyscale

* white
* grey-1
* grey-2
* grey-3
* grey-4
* grey-5
* grey-6
* black

```html
<button class="button-grey-3">Grey 3 Button</button>
```

##### Alert

* error
* success
* help
* info

```html
<button class="button-success">Success Button</button>
```

##### Social

* facebook
* twitter
* linkedin
* github
* skype
* pinterest
* instagram
* rss
* youtube
* flickr
* vimeo
* dribbble
* behance
* deviantart
* reddit
* google-plus
* email
* stumbleupon

```html
<button class="button-dribbble">Dribbble Button</button>
```

#### Modifiers

* block
* border
* disabled
* round
* circle/oval
* sharp
* icon
* active

```htm
<button class="button-active">Button</button>
```

Modifiers can be combined:

```html
<button class="button-icon-oval-rss-size-6"><i class="fa fa-rss"></i></button>
<button class="button-icon-oval-border-youtube"><i class="fa fa-youtube"></i></button>
<button class="button-border-disabled-active">Button</button>
```

**Tip: Combine commonly reused modifiers**

If you are commonly reusing the same combination of modifiers multiple times, you can combine them into a new modifier:

```scss
@include buttons((
    'combine':(
        'primary' : ('round', 'size-4', 'brand-1'),
        'social'  : ('icon', 'oval', 'size-6')
    )
));
```

```html
<button class="button-primary">Primary Action</button>
<button class="button-social-rss"><i class="fa fa-rss"></i></button>
```

Which is the equivilent of:

```html
<button class="button-round-size-4-brand-1">Primary Action</button>
<button class="button-icon-oval-size-6-rss"><i class="fa fa-rss"></i></button>
```

#### Components

##### Button Group

```html
<div class="button_group">
    <button class="button">Button</button>
    <button class="button">Button</button>
    <button class="button">Button</button>
</div>
```

##### Button Group - Pills

```html
<div class="button_group-pills">
    <button class="button">Button</button>
    <button class="button">Button</button>
    <button class="button">Button</button>
</div>
```

##### Button Group - Round Pills

```html
<div class="button_group-pills-round">
    <button class="button">Button</button>
    <button class="button">Button</button>
    <button class="button">Button</button>
</div>
```