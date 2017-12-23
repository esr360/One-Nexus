## Print Styles

> This module has no options and is unconfigurable

The print styles are taken from the [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/css.md#print-styles).

### Sass

Load the print styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `print()` mixin:

```scss
@import '../../app';
@import './config.json';

@include print();
```