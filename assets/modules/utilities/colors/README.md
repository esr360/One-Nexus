## Colors

### Quick Look

```css
.brand-1 {
    color: color('brand', 'brand-1');
}
```

### Default Colors

```json
{
    "colors": {
        "greyscale": {
            "white": "#ffffff",
            "grey-1": "#f8f8f8",
            "grey-2": "#dee0e2",
            "grey-3": "#bfc1c3",
            "grey-4": "#6f777b",
            "grey-5": "#232627",
            "grey-6": "#161819",
            "black": "#000000"
        },
        "brand": {
            "brand-1": "#2E3882",
            "brand-2": "#06d2ff",
            "brand-3": "#04CEC0"
        },
        "alert":{
            "error": "#D9434E",
            "help": "#F5BA42",
            "info": "#4B8CDC",
            "success": "#3BB85D"
        },
        "validation":{
            "valid": "#00B16A",
            "invalid": "#D91E18"	
        },
        "social":{
            "facebook": "#507CBD",
            "twitter": "#63CEF2",
            "linkedin": "#117BB8",
            "github": "#1C1C1C",
            "skype": "#63CEF2",
            "pinterest": "#C92228",
            "instagram": "#5280A5",
            "rss": "#FBA933",
            "youtube": "#CB312E",
            "flickr": "#ED1384",
            "vimeo": "#1EB8EB",
            "dribbble": "#EB4C89",
            "behance": "#0595FC",
            "deviantart": "#B3C434",
            "reddit": "#0D7CCD",
            "google-plus": "#dd4b39",
            "email": "#6cb42c",
            "stumbleupon": "#47AD20"
        },
        "gradients": {
            "brand": {
                "direction": "135deg",
                "color-stops": [
                    "brand-1 0%", 
                    "brand-2 20%", 
                    "brand-3 100%"
                ]
            }
        }
    }
}
```

To modify any of the above colors, pass them to the `colors` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "colors": {
            "brand": {
                "brand-1": "#3A99D8",
                "brand-4": "#39CB74"
            },
            "new-palette": {
                "new-color-1": "red",
                "new-color-2": "#F0C330"
            }
        }
    }
}
```

### Sass

Load the color palettes in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `colors()` mixin:

```scss
@import '../../app';
@import './config.json';

@include colors();
```

### Tools & Utilities

#### Sass

##### Function: `palette()`

Retrieve an existing color palette

```scss
@each $brand, $color in palette('brand') {
    ...
}
```

##### Function: `color()`

Retrieve a color from an existing palette

```scss
.brand-1 {
    color: color('brand', 'brand-1');
}
```

##### Function: `merge-palettes()`

Create a new palette from existing palettes

```scss
$new-palette: merge-palettes('brand', 'greyscale', 'alert', 'social');

.brand-1 {
    color: map-get($new-palettes, 'brand-1');
}
```

Use only specific colors from certain palettes

```scss
$new-palette: merge-palettes(
    'brand', 
    ('greyscale': ('grey-1', 'grey-3', 'grey-4')), 
    'alert', 
    ('social': ('facebook', 'twitter'))
);

.facebook {
    color: map-get($new-palettes, 'grey-1');
    background-color: map-get($new-palettes, 'facebook');
}
```
##### Function: `gradient()`

Create a linear gradient using `gradients` from the options

```scss
.brand-gradient {
    background: gradient('brand');
}
```

Outputs:

```scss
.brand-gradient {
    background: linear-gradient(135deg, #2E3882 0%, #06D2FF 20%, #04CEC0 100%);
}
```

#### JavaScript

You can retrieve colors and palettes from the `app.config` object:

```js
const brandPalette = app.config.colors.brand
```

```js
const alertSuccessColor = app.config.colors.alert.success
```