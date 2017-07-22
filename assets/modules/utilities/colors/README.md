## Colors

##### Quick Look

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

### Sass

Load the color palettes in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `colors()` mixin:

```scss
@import '../../app';
@import './config.json';

@include colors();
```

### Examples