## Typography

### Default Values

```json
{
    "typography": {
        "name": "typography",
        "typefaces": {
            "primary": "('Raleway', '100,300,700,900')",
            "secondary": "('Lato', '300,700')"
        },
        "import-fonts": true,
        "colors": {
            "base": "color('greyscale', 'grey-4')",
            "heading": "color('greyscale', 'grey-5')",
            "heavy": "color('greyscale', 'grey-5')",
            "link": "color('brand', 'brand-1')",
            "link-hover": "color('brand', 'brand-1')"
        },
        "sizes": {
            "size-1": "0.67em",
            "size-2": "0.83em",
            "base": "1em",
            "size-3": "1.17em",
            "size-4": "1.25em",
            "size-5": "1.5em",
            "size-6": "2em",
            "size-7": "2.4em",
            "size-8": "3em",
            "size-9": "3.4em"
        }
    }
}
```

Pass custom options to the `typography` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "typography": {
            "typefaces": {
                "primary": "('Raleway', '100,900')",
            },
            "sizes": {
                "size-4": "1.35em"
            }
        }
    }
}
```

#### Typefaces

The `typefaces` object imports [Google Fonts](https://fonts.google.com) - so the above example would import the following url into your stylesheet:

```
https://fonts.googleapis.com/css?family=Raleway:100,900
```

### Sass

Load the Typography styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `typography()` mixin:

```scss
@import '../../app';
@import './config.json';

@include typography();
```

### Tools & Utilities

#### Function: `typography-config()`

Retrieve an Typography configuration object

```scss
@each $key, $value in typography-config('sizes') {
    ...
}
```

#### Function: `typography()`

Retrevie a value from a Typography options group

```scss
.element {
    font-size: typography('sizes', 'size-4');
    font-family: typography('typefaces', 'primary');
}
```

#### Function: `font-size()`

Set a font-size based on a value from the `sizes` group

```scss
.element {
    font-size: font-size('size-4');
}
```