## To Do

* move 'base' typography size into 'core' module
* move eval-config to Synergy
* move `custom()` to Synergy

## Fridge

* add global modifiers (e.g. small, large)
* make 'glyph' config not be so ugly (e.g. "'\\f138'" => "f138")
* fix dropdown alignment when appears off screen
* search codebase for @TODO's
* fix smoothScroll calculations to be consistent
* test everything e.g keepOpenModifier on accordions
* address typography(typefaces, primary) outputting weights in CSS
* fork https://github.com/franzheidl/spinners to remove CSS comments
* tidy up Gruntfile/build
* add unit-tests

## Freezer

* modal.hide() on specific ID will close even if id is wrong/mispelt
* create something to dynamically create reference links from strings
* create animation library
* consider changing json functions to ["$color", "brand", "brand-2"]
* add 'size' to blacklist for $css-properties
* prevent modal link anchor scroll with rel="modal" attr
* try and get config component and modifier behaviour to be consistent

## Done

* add js equivalent of global Sass functions using in config.json files
* add data-attribute optons to google-maps
* re-name site-overlay to overlay
* consider renaming appHeader to header
* change default position in vertical-center to absolute
* break-5 appears to be broken (try using in scroll-top module)
* choose consistent sass/scss syntax highlight for README's
* add searchbox and side-nav html to handlebars partials
* add light overlay modifier and integrate into preloader module
* add option to disable close overlay on click
* update Quick Look heading size to ###
* rename app.breakpoint to app.media
* add placeholder alias for each helper class
* add sass error/warn when this('option') doesn't exist
* add control for min/max vw in font-sizes() mixin
* Synergy strips hyphens from module name when using component mixin
* move internal module js functions into the exports object
* sticky header padding-top scroll jump
* add css property list for config
* make modal width configurable
* fix dropdown nav width
* remove social colors from border buttons
* add 'font-size()' to evalConfig
* change all sass module extends to _module alias
* get rid of clickHelper?
* remove @author