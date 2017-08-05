[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/esr360/One-Nexus/blob/master/LICENSE)
[![GitHub license](https://api.travis-ci.org/esr360/One-Nexus.svg)](https://travis-ci.org/esr360/One-Nexus)

<img src="https://raw.githubusercontent.com/esr360/One-Nexus/master/assets/images/logo.png" width="270">

> One-Nexus is a toolkit for architecting and constructing front-end user-interfaces

[Visit Website](http://esr360.github.io/One-Nexus/) | 
[View SassDoc Documentation](http://esr360.github.io/One-Nexus/docs/sass) |
[View JSDoc Documentation](http://esr360.github.io/One-Nexus/docs/sass)

### Features

* Configure your entire project's UI from a single JSON file
* Modular and configurable UI components
* [Bespoke responsive grid system](https://github.com/esr360/One-Nexus#responsive-grid-system)
* Built with Sass and ES6 (no jQuery!)
* Handlebars templates
* Sass and JS unit testing
* Over 30 prebuilt configurable UI components included
* Create multiple themes using your components
* Includes everything needed to develop your project's independent front-end

# One-Nexus Documentation

> For interactive demos, visit the [One-Nexus Website](#TODO)

## Table of Contents

* [Getting Started](https://github.com/esr360/One-Nexus#getting-started)
* [Introduction](#TODO)
* [The App Layer](#TODO)
* [UI Modules](#TODO)
* [Themes](#TODO)
* [Tools](#TODO)
* [Grid System](#TODO)
* [Templates](#TODO)
* [Unit Testing](#TODO)
* [Build/Grunt Tools](#TODO)

## Getting Started

To develop using One-Nexus, the machine being used to develop must have the following tools installed:

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
* [Node.js](https://nodejs.org/en/download/)
* [Ruby Sass](http://sass-lang.com/install) - `gem install sass`
* [Sass-JSON-Vars](https://github.com/vigetlabs/sass-json-vars) - `gem install sass-json-vars`
* [Grunt-Cli](https://github.com/gruntjs/grunt-cli) - `npm install -g grunt-cli`

To get started, obtain a fresh copy of One-Nexus:

```bash
git clone https://github.com/esr360/One-Nexus.git
```

Next, install the required dependencies:

```bash
npm install
```

Finally, build all assets and deploy to a localserver:

```bash
grunt
```

You can now access the deployed app in your browser by visiting http://localhost:3000/ - any changes to the source code will automatically be picked up, re-compiled and re-deployed to the local server on the fly.

## Introduction

This section will introduce One-Nexus and explain how it is architectured and structured, walking through each of the significant files and directories which come included as part of One-Nexus.

### Architecture Overview

There are three distinct layers to the One-Nexus architecture: the `app` layer, the `theme` layer and the `module` layer. 

The `app` layer is the _nexus_ of the project; all modules, tools and utilities are imported and all global functions are called. Anything at this level will be exposed to all themes and modules.

The second layer is the `theme` layer; a theme will import the `app` layer and then include whatever modules and utilities are required by the theme, passing any custom theme configuration as required.

The final layer is the `module` layer. Modules are configurable components - they are imported in the `app` layer and included in the `theme` layer as required.

The One-Nexus layers can be visually represented by the following ~~graphic~~ work of art (_please direct all graphic complaints to my employer then maybe they will get me a copy of Photoshop_):

<img src="https://raw.githubusercontent.com/esr360/One-Nexus/master/assets/images/one-nexus-infograph.jpg" width="600">

Once the One-Nexus app is compiled, the end result will be an amalgamation of modules in the form of a single `js` and `css` file.

To take a bottom-up approach to introducing One-Nexus, let's start with the end result; an `app.js` file and an `app.css` file. Together, these assets form a _theme_. Let's call our theme 'One-Nexus'. So the file structure of the end result would look someting like:

```
|-- dist
|   |-- assets
|   |   |-- themes
|   |   |   |-- One-Nexus
|   |   |   |   |-- app.css
|   |   |   |   |-- app.js
```

Each respective asset is generated from a single source file. In the above example, these files would be located in the `src/assets/themes/One-Nexus/` directory:

```
|-- src
|   |-- assets
|   |   |-- themes
|   |   |   |-- One-Nexus
|   |   |   |   |-- config.json
|   |   |   |   |-- One-Nexus.js
|   |   |   |   |-- One-Nexus.scss
```

So `One-Nexus.scss` is sent to the Sass compiler to create `app.css`, and likewise for `One-Nexus.js` and `app.js`. Notice the `config.json` file above - this is where any custom configuration for the UI modules will be stored, effectively acting as the source of your project's UI configuration - this will be addressed in more detail later.

One-Nexus is built using the [Synergy](https://github.com/esr360/Synergy) framework, which provides the functionality for configurable modules.

> Read the [Synergy Documentation](https://github.com/esr360/Synergy) to learn more about modules and how to configure them

`One-Nexus.js` and `One-Nexus.scss` are where modules are included. This makes it easy to only include the modules you need in your theme, as well as allowing you to create different themes with different modules. See below how modules are included:

#### Inside One-Nexus.js

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

app.accordion();
app.carousel();
...
```

#### Inside One-Nexus.scss

```scss
@import '../../app';
@import './config.json';

@include accordion();
@include carousel();
...
```

The list of modules available to include is determine by `_app.scss` and `app.js`, located in the `src/assets` directory:

```
|-- src
|   |-- assets
|   |   |-- themes
|   |   |-- _app.scss
|   |   |-- app.js
```

Looking inside `_app.scss` and `app.js`, we can see how the available modules to include are imported:

#### Inside _app.scss

```scss
@import 'modules/elements/accordions/accordions';
@import 'modules/elements/carousels/carousels';
...
```

#### Inside app.js

```js
import { accordion } from './modules/elements/accordions/accordions';
import { carousel  } from './modules/elements/carousels/carousels';
...

export { accordion, carousel, ... }
```

Taking into account the above `accordions` and `carousels` modules, the project structure now looks like this:

```
|-- src
|   |-- assets
|   |   |-- modules
|   |   |   |-- elements
|   |   |   |   |-- accordions
|   |   |   |   |-- carousels
|   |   |-- themes
|   |   |   |-- One-Nexus
|   |   |   |   |-- config.json
|   |   |   |   |-- One-Nexus.js
|   |   |   |   |-- One-Nexus.scss
```

Looking inside the `accordions` directory, we can see all the files which comprise a module:

```
|-- src
|   |-- assets
|   |   |-- modules
|   |   |   |-- elements
|   |   |   |   |-- accordions
|   |   |   |   |   |-- _accordions.scss
|   |   |   |   |   |-- accordions.js
|   |   |   |   |   |-- accordions.json
|   |   |   |   |   |-- README.md
|   |   |-- themes
```

Default configuration for the module is stored within `accordions.json`:

```js
{
    "accordions": {
        "name": "accordion",
        "icon": {
            ...
        },
        "section": {
            ...
        },
        "title": {
            ...
        },
        ...
    }
}
```

A module's default configuration value can be overwritten on the _theme_ level by passing the value to `src/assets/themes/One-Nexus/config.json`:

```json
{
    "app": {
        "accordions": {
            "title": {
                "color": "red",
                "active": {
                    "color": "pink"
                }
            },
            "activeClass": "isActive",
        },
    }
}
```

When your app re-compiles, the above values will be used instead of the default ones. This allows you to leave all source code untouched whilst providing the ability to generate completely different production code.

## UI Modules

A module is a UI element which can be comprised of a `.scss` file, `.js` file and `.json` file, which can be imported into themes and configured by a theme.json file. Modules can have modifier variants as well as child components which can also have modifiers.

Each module has a _private_ and _public_ name. The _private_ name is unconfigurable and used internally to access the module and its configuration, and to call the module itself. The _public_ name is used in the HTML (and hence CSS), and is configurable.

All available modlues are located within the `assets/modules/` directory. One-Nexus splits the modules up into the following categories:

* Elements
* Objects
* Utilities

### Elements

_Elements_ are the more abstract UI modules which serve no set purpose or function.

* [Accordions](#TODO)
* [Alert-Bars](#TODO)
* [Blockquotes](#TODO)
* [Buttons](#TODO)
* [Carousels](#TODO)
* [Forms](#TODO)
* [Headings](#TODO)
* [Images](#TODO)
* [Lists](#TODO)
* [Modals](#TODO)
* [Progress-Bars](#TODO)
* [Tables](#TODO)
* [Tabs](#TODO)
* [Tooltips](#TODO)
* [Wells](#TODO)

### Objects

_Objects_ are the larger and more specific modules which generally serve a set function.

* [Billboard](#TODO)
* [Breadcrumb](#TODO)
* [Dropdown](#TODO)
* [Footer](#TODO)
* [Google-Map](#TODO)
* [Header](#TODO)
* [Logo](#TODO)
* [Navigation](#TODO)
* [Preloader](#TODO)
* [Scroll-Top](#TODO)
* [Search](#TODO)
* [Side-Nav](#TODO)
* [Overlay](#TODO)

### Utilities

_Utilities_ are everything else; modules which serve to ehance and compliment the other modules.

* [Colors](#TODO)
* [Container](#TODO)
* [Core](#TODO)
* [Grid](#TODO)
* [Helpers](#TODO)
* [Print](#TODO)
* [Typoraphy](#TODO)

## Themes

Themes are used to create distinctly separate UI's using a combination of modules and custom configuration.

By default themes exist in the `assets/themes` directory. As each theme can be comprised of multiple files, it is neccessery to create a separate directory for each theme.

```
|-- src
|   |-- assets
|   |   |-- themes
|   |   |   |-- One-Nexus
|   |   |   |   |-- config.json
|   |   |   |   |-- One-Nexus.js
|   |   |   |   |-- One-Nexus.scss
```

Pass the `js` and `scss` files to their respective compilers and they will generate your project's UI using the configuration from the `json` file. If using the provided `Grunt` tasks, you can run `grunt theme` to do this.

### One-Nexus.js

The theme's JavaScript file must first import the `app` (['assets/app.js'](#TODO)):

```js
import * as app from '../../app';
```

Next, the theme's configuration is imported:

```js
import * as app from '../../app';
import config from './config.json';
```

Finally, the configuration is exposed to the entire app:

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app;
```

Modules from the `app` can now be included:

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

app.accordion();
app.carousel();
app.modal();
...
```

### One-Nexus.scss

Like with the corresponding JavaScript file, the theme's Sass file must first import the `app` (['assets/_app.scss'](#TODO)):

```scss
@import '../../app';
```

And again, the theme's configuration is imported:

```scss
@import '../../app';
@import './config.json';
```

Modules from the `app` can now be included:

```scss
@import '../../app';
@import './config.json';

@include accordions;
@include carousels;
@include modals;
```

### config.json

This file is used to store custom configuration for any modules that are included, overwriting the default value. To use a module's default configuration entirely, you do not need to add it to this object.

> The below values should be considered _pseudo values_ and may not reflect real module options

```json
{
    "app": {
        "accordions": {
            "title": {
                "color": "red",
                "active": {
                    "color": "#454545"
                }
            },
            "keepOpenModifier": "keepOpen"
        },
        "carousels": {
            "nav-buttons": {
                "enabled": "true"
            }
        },
        "billboard": {
            "fullscreen": {
                "enabled": true,
                "min-height": "500px"
            },
            "overlay": {
                "enabled": false
            }
        }
    }
}
```

#### How Configuration Works

Each module can have any number of configuration options. All values for a module are accessible in the module's corresponding `scss` and `js` files, even options which may seemingly only suit one of these technologies. It makes things eaiser keeping all of the module's configuration in one place, and it helps with keeping things modular. 

However, it is entirely possible to use modules in a way which don't have shared configuration in the form of JSON, where the corresponding `scss` and `js` files have their own config options. Rather than having a common app JSON file (and separate JSON files for each module), config would be passed to modules when including them, like so:

##### One-Nexus.js

```js
import * as app from '../../app';

app.accordion({
    keepOpenModifier: 'keepOpen'
});
app.carousel();
...
```

##### One-Nexus.scss

```scss
@import '../../app';

@include accordions((
    'title': (
        'color': red,
        'active': (
            'color': #454545
        )
    )
));
@include carousels;
...
```

Understanding that configuration can be passed to modules in this way opens up the explanation as to how modules will use any custom configuration that exists in `config.json`.

When a module is called without any options passed to it, it will search for the global `app` object. In Sass, this object is created by [Sass-JSON-Vars](#TODO) when `config.json` is imported (`@import './config.json'`), and accessible by the `$app` variable (the variable name is determined by the first key in the JSON object, which in the case for One-Nexus is `app`). Having access to this variable allows it to be searched for configuration. Specifically, this is handled by [Synergy's `custom` function](#TODO):

```scss
@function custom($module) {
    @return if(variable-exists('app') and map-get($app, $module), map-get($app, $module), ())
}
```

So this means when calling a module, custom configuration (if it exists in `config.json`) can be passed to it like so:

```scss
@import '../../app';
@import './config.json'; // config now accessible globally by `$app` variable

@include accordions(custom('accordions'));
```

And to avoid the need for doing this with every module, `custom(MODULE_NAME)` is passed as a default parameter when defining modules, as seen in the Accordions example:

```scss
@mixin accordions($custom: custom('accordions')) {
    ...
}
```

And it works exactly the same way for the corresponding JavaScript. The configuration object is created after importing `config.json`:

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app; // `app.theme` now exposes the same information as `$app` in the Sass
```

Again, One-Nexus provides a `custom` JS function (accessed by `app.custom`) which can be used to search `app.theme` for any existing custom configuration. This means when calling a module, custom configuration (if it exists in `config.json`) can be passed to it like so:

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

app.accordion(app.custom('accordions'));
```

And again just like with the corresponding Sass, to avoid the need for doing this with every module, `app.custom(MODULE_NAME)` is built into the module definition.

## Tools

One-Nexus provides some useful tools to facilitate development and ehance your project's UI.

### JavaScript Tools

* [app.clickHelper](#TODO)
* [app.custom](#TODO)
* [app.inViewport](#TODO)
* [app.isValidSelector](#TODO)
* [app.media](#TODO)
* [app.parents](#TODO)
* [app.scrollSpy](#TODO)
* [app.smoothScroll](#TODO)

### Sass Tools

* [background](#TODO)
* [fill-parent](#TODO)
* [font-sizes](#TODO)
* [horizontal-center](#TODO)
* [overlay](#TODO)
* [retrieve-value](#TODO)
* [triangle](#TODO)
* [vertical-center](#TODO)
* [vertical-rhythm](#TODO)

## Grid System

One-Nexus comes with a custom grid system: [Kayzen-GS](https://github.com/esr360/Kayzen-GS). Kayzen-GS is built with Sass and is fully responsive, dynamic and customizable.

Some of the core features of Kayzen-GS include:

* Specify any number of columns
* Infinitely nestable rows
* Easily set vertical/horizontal align
* Create semantic rows and columns
* Uses inline-block columns
* Specify global column/row selector names
* Specify gutter width
* Multiple column types
* Reverse column order
* Collapse columns at different breakpoints
* Adaptive column widths
* Push/pull columns
* Works in all browsers

All examples from the [Kayzen-GS Examples](http://kayzen.gs/) page come included with One-Nexus.

The grid system exists in One-Nexus as a [Utility Module](#TODO). This module is essentially a wrapper around Kayzen-GS, so accepts the same options as [Kayzen-GS](https://github.com/esr360/Kayzen-GS/blob/master/README.md#custom-configuration).

The following options can be passed to the Grid module:

> For default values, see the [Kayzen-GS configuration section](https://github.com/esr360/Kayzen-GS/blob/master/README.md#custom-configuration)

<table class="table">
    <thead>
        <tr>
            <th>Option</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>options.columns</td>
            <td>The number of columns to use when generating the grid system classes</td>
        </tr>
        <tr>
            <td>options.gutter</td>
            <td>The width of the gutter between each column</td>
        </tr>
        <tr>
            <td>options.col-break</td>
            <td>The default width at which columns should collapse and stack ontop of each other</td>
        </tr>
        <tr>
            <td>options.row-namespace</td>
            <td>The namespace for rows; used when generating the CSS classes</td>
        </tr>
        <tr>
            <td>options.col-namespace</td>
            <td>The namespace for columns; used when generating the CSS classes</td>
        </tr>
        <tr>
            <td>settings.old-ie</td>
            <td>Enabling this setting will allow default columns to work on Internet Explorer 6 & 7</td>
        </tr>
        <tr>
            <td>settings.responsive</td>
            <td>If disabled, columns will not stack vertically</td>
        </tr>
        <tr>
            <td>settings.mobile-first</td>
            <td>Column stacking will work from a mobile-first perspective</td>
        </tr>
        <tr>
            <td>settings.custom-stacking</td>
            <td>This option generates the code required for the <a href="https://github.com/esr360/Kayzen-GS/blob/master/README.md#responsiveness">custom breakpoint stacking</a> feature</td>
        </tr>
        <tr>
            <td>settings.adaptive-columns</td>
            <td>This option generates the code required for <a href="https://github.com/esr360/Kayzen-GS/blob/master/README.md#adaptive-columns">adaptive columns</a></td>
        </tr>
        <tr>
            <td>settings.flow-columns</td>
            <td>This option generates the code required for <a href="https://github.com/esr360/Kayzen-GS/blob/master/README.md#flow-columns">flow columns</a></td>
        </tr>
        <tr>
            <td>settings.magic-columns</td>
            <td>This option generates the code required for <a href="https://github.com/esr360/Kayzen-GS/blob/master/README.md#magic-columns">magic columns</a></td>
        </tr>
        <tr>
            <td>settings.block-columns</td>
            <td>This option generates the code required for <a href="https://github.com/esr360/Kayzen-GS/blob/master/README.md#block-columns">block columns</a></td>
        </tr>
        <tr>
            <td>settings.no-gutter-columns</td>
            <td>This option generates the code required for <a href="https://github.com/esr360/Kayzen-GS/blob/master/README.md#no-gutter-columns">no-gutter columns</a></td>
        </tr>
        <tr>
            <td>settings.reverse</td>
            <td>This option generates the code required to <a href="https://github.com/esr360/Kayzen-GS/blob/master/README.md#reverse-column-order">reverse columns</a></td>
        </tr>
        <tr>
            <td>settings.pull</td>
            <td>This option generates the code required to <a href="https://github.com/esr360/Kayzen-GS/blob/master/README.md#pushpull-columns">pull columns</a></td>
        </tr>
        <tr>
            <td>settings.push</td>
            <td>This option generates the code required to <a href="https://github.com/esr360/Kayzen-GS/blob/master/README.md#pushpull-columns">push columns</a></td>
        </tr>
        <tr>
            <td>breakpoints {}</td>
            <td>Keys and values to use for each breakpoint you desire (format: "break-1":"460px")</td>
        </tr>
        <tr>
            <td>fractions {}</td>
            <td>Keys and values any fractions to use in the grid system (format: "half":[1,2])</td>
        </tr>
    </tbody>
</table>

Options can be passed to `config.json` like so:

```json
{
    "app": {
        "grid": {
            "breakpoints": {
                "break-5": "1400px"
            }
        }
    }
}
```

> Read the [Grid module documention](https://github.com/esr360/One-Nexus/blob/master/assets/modules/utilities/grid/README.md) for more information

### Semantic Grid System

You can use Kayzen-GS to build your own grid system using semantic class names whilst retaining complete control over the flexibility of your columns.

[View Examples](http://esr360.github.io/Kayzen-GS/#semantic-examples)

#### Creating a Semantic Row

```scss
.main {
    @include row;
}
```

In the above example, **main** is used as the semantic class name.

**Creating a semantic row for Flow Columns:**


```scss
.portfolio-items {
    @include row('flow');
}
```

In the above example, the semantic class name for the row of Flow Columns is **portfolio-items**.

#### Creating a Semantic Column

##### Basic Example

```scss
.sidebar {
    @include column((
        'width' : (3, 12)
    ));
}
```

This will create a column that spans 3 out of 12 columns in width, so **1/4** or **25%**. Alternatively, you can achieve the same thing with this:

```scss
.sidebar {
    @include column((
        'width' : 'quarter'
    ));
}
```

> You can use any fractions defined in the [Configuration](#fractions).

Or even this:

```scss
.sidebar {
    @include column((
        'width' : 25%
    ));
}
```

Note that perhaps surprisingly the above examples do **not** produce a `width` value of **25%**, but rather a calculated value based off the value of the `gutter` value. This is so you can easily create columns without having to think about the effect of gutters like so:

```scss
.sidebar {
    @include column((
        'width' : 20%
    ));
}

.content {
    @include column(
        'width' : 70%
    ));
}

.promo {
    @include column(
        'width' : 10%
    ));
}
```

Which will produce the following CSS, assuming the default value of **2.5%** for your `gutter`:

```css
.sidebar {
    width: 18%;
    margin-left: 2.5%;
}

.content {
    width: 69.25%;
    margin-left: 2.5%;
}

.promo {
    width: 7.75%;
    margin-left: 2.5%;
}
```

Note that the **first-child** in a row of normal columns has its `margin-left` removed (this is *not* the case for [Flow Columns](#flow-columns-2)).

##### Column Types

All the column types from the default grid system are also available to use in your semantic grid system.

###### Flow Columns

> Ensure that your semantic row container is also set to `flow`.

```scss
.portfolio-item {
    @include column((
        'type'  : 'flow',
        'width' : (3, 12)
    ));
}
```

[View Demo](http://esr360.github.io/Kayzen-GS/#flow-columns-semantic)

###### Magic Columns

```scss
.portfolio-item {
    @include column(
        'type' : 'magic'
    );
} 
```

[View Demo](http://esr360.github.io/Kayzen-GS/#magic-columns-semantic)

###### Block Columns

```scss
.portfolio-item {
    @include column((
        'type'  : 'block',
        'width' : (3, 12)
    ));
}
```

[View Demo](http://esr360.github.io/Kayzen-GS/#block-columns-semantic)

###### No-Gutter Columns

```scss
.portfolio-item {
    @include column((
        'type'  : 'no-gutter',
        'width' : (3, 12)
    ));
}
```

[View Demo](http://esr360.github.io/Kayzen-GS/#no-gutter-columns-semantic)

##### Responsiveness

The default width for the stacking of semantic columns is set in the [Configuration](#options). You can override the default value like so:

```scss
.sidebar {
    @include column((
        'width' : 'quarter',
        'stack' : breakpoint('break-2')
    ));
}
```

This will cause the columns to stack when the screen size is less than **break-2** as opposed to the default value of **break-3**.

###### Adaptive Columns

When inside a Flow Columns container and with its `type` set to **flow**, you can set the width of your column at specific breakpoints using the **respond-to** option:

```scss
.portfolio-item {
    @include column((
        'type' : 'flow',
        'width': (3, 12),
        'respond-to' : (
            'break-3': (4, 12),
            'break-2': (6, 12),
            'break-1': (12, 12)
        )
    ));
}
```

[View Demo](http://esr360.github.io/Kayzen-GS/#semantic-adaptive)

With `mobile-first` enabled, a width is not required by default if you are using adaptive responsiveness - the column is 100% width up until **break-1** where it becomes 6/12's, then 4/12's at **break-2** and 3/12's at **break-3**.

```scss
.portfolio-item {
    @include column((
        'mobile-first': true: 
        'type': 'flow',
        'respond-to' : (
            'break-1': (6, 12),
            'break-2': (4, 12),
            'break-3': (3, 12)
        )
    ));
}
```

> You can set any fraction you want, for example you can write *(1, 2)* instead of *(6, 12)*.

You can also use numeric values for the width:

```scss
.portfolio-item {
    @include column((
        'type' : 'flow',
        'width': 25%,
        'respond-to' : (
            'break-3': 100/3,
            'break-2': 50%,
            'break-1': 100%
        )
    ));
}
```

Using the fractions from the [Configuration](#TODO) you can substitue writing the fraction numbers for the fraction name like so:

```scss
.portfolio-item {
    @include column((
        'type' : 'flow',
        'width': 'quarter',
        'respond-to' : (
            'break-3': 'third',
            'break-2': 'half',
            'break-1': 'full'
        )
    ));
}
```

> Read the [Kayzen-GS documentation](https://github.com/esr360/Kayzen-GS/blob/master/README.md) for more information

## Templates

One-Nexus comes with some sample Handlebars templates to get started (located in the `templates` directory), using [Assemble](https://assemble.io/docs/Home.html) to compile them (incorporated by the [Grunt build tasks](#TODO)).

### Helpers

One-Nexus provides some custom [Handlebars Helpers](http://handlebarsjs.com/block_helpers.html) to ehance your templating experience.

#### Breadcrumb

The `breadcrumb` helper can be used to populate a breadcrumb list from its current URL structure.

```html
<nav class="breadcrumb">
    <ul> 
        {{#breadcrumb page.dirname}}{{/breadcrumb}}
        <li class="current">{{page.basename}}</li>
    </ul>
</nav>
```

#### InArray

This helper is used to determine if an array contains a certain value.

```html
{{#inArray array 'value }}...{{/inArray}}
```

### Layouts

Layouts are used by pages to determine the layout and structure of the page. One-Nexus comes with two base layouts.

#### Core Layout

This layout provides the core HTML for a page. Other than that, all content is passed to the `body` element, making this the ideal starting layout for any further layouts.

##### Page Options

Page options are passed as [YAML Front Matter](http://assemble.io/docs/YAML-front-matter.html). Any subsequent layout or page which uses this layout will have access to these options.

<table class="table">
    <thead>
        <tr>
            <th>Option</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>bodyClass</td>
            <td>Class to apply to the `body` element</td>
        </tr>
        <tr>
            <td>styles</td>
            <td>List of styles to load</td>
        </tr>
        <tr>
            <td>scripts</td>
            <td>List of script files to load</td>
        </tr>
        <tr>
            <td>jQuery</td>
            <td>The version of jQuery to use. Set to `false` to not load jQuery</td>
        </tr>
        <tr>
            <td>FontAwesome</td>
            <td>The version of FontAwesome to use. Set to `false` to not load FontAwesome</td>
        </tr>
    </tbody>
</table>

```yaml
title: One-Nexus
bodyClass: ''
styles:
    - <%=assets%>assets/themes/<%=theme%>/app
scripts:
    - <%=assets%>assets/themes/<%=theme%>/app
jQuery: 2.2.4
FontAwesome: 4.7.0
```

The above options work in the templates like so:

```html
{{#if jQuery}}
    <script src="http://code.jquery.com/jquery-{{jQuery}}.min.js" crossorigin="anonymous"></script>
{{/if}}

{{#each scripts}}
    <script src="{{.}}.js"></script>
{{/each}}
```

#### Base Layout

The Base layout extends the above `core` layout, and includes all global modules and elements. All content is passed to a `main` element, and then an optional `container` element, making this the ideal layout for general pages or more complex layouts.

##### Page Options

<table class="table">
    <thead>
        <tr>
            <th>Option</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>layout</td>
            <td>The layout to use - by default this is set to `core.hbs`</td>
        </tr>
        <tr>
            <td>header</td>
            <td>Options to pass to the [Header partial](#TODO)</td>
        </tr>
        <tr>
            <td>billboard</td>
            <td>Options to pass to the [Billboard partial](#TODO) - set to `false` to disable</td>
        </tr>
        <tr>
            <td>container</td>
            <td>Options to pass to the [Container partial](#TODO) - set to `false` to not wrap content in a `container`</td>
        </tr>
        <tr>
            <td>breadcrumb</td>
            <td>Set to display the breadcrumb</td>
        </tr>
    </tbody>
</table>

```yaml
layout: core.hbs
header:
    modifiers:
    - dark
billboard:
    heading: <%title%>
container:
    modifiers:
    - section
breadcrumb: true
```

### Pages

One-Nexus provides just a single starting page: `index.hbs`. It is a basic page which uses the `base` layout, as serves to act as a guide for create further pages.

### Partials/Modules

To pass custom YAML to a partial/module on a per-page basis, add the values to the page's YAML Front Matter (YFM).

> Add [Modifiers](#TODO) to a module by passing them to the `modifiers` option in the YFM

#### Header

> For available modifiers, see the [Header Module documentation](#TODO)

```yaml
header:
    modifiers:
    - dark
```

Include in Handlebars template:

```html
{{> header}}
```

#### Billboard

> For available modifiers, see the [Billboard Module documentation](#TODO)

```yaml
billboard:
    modifiers:
    - fullscreen
    heading: <%title%>
    subHeading: 'Sub Heading'
```

Include in Handlebars template:

```html
{{> billboard}}
```

#### Breadcrumb

Include in Handlebars template:

```html
{{> breadcrumb}}
```

#### Footer

> For available modifiers, see the [Footer Module documentation](#TODO)

```yaml
header:
    modifiers:
    - dark
```

Include in Handlebars template:

```html
{{> footer}}
```

## Unit Testing

One-Nexus offers out-the-box unit testing for Sass and JavaScript. Currently, One-Nexus provides very little coverage for all the default modules (but coverage will keep improving until 100% is reached!) - but the setup make it easy to start writing unit tests for your own modules.

### Sass Unit Testing

The test framework of choice for Sass unit tests is [True](https://github.com/oddbird/true), and uses Mocha as the test runner. Sass unit tests are found within the `unit-testing/scss` directory.

#### Running Sass Unit Tests

To run Sass unit tests with Grunt, run the `mochaTest:scss` command:

```bash
grunt mochaTest:scss
```

#### Writing Sass Unit Tests

Create a new file in the `unit-testing/scss`. For this example, we will be testing [Sass-Boost](https://github.com/esr360/Sass-Boost)'s [`_list-reverse.scss` function](https://github.com/esr360/Sass-Boost/blob/master/src/functions/_list-reverse.scss). So we will call our test file `_list-reverse.scss` as well, living at `unit-testing/scss/_list-reverse.scss`.

Import the newly created file into `unit-testing/scss/tests.scss` (which already exists):

```scss
@import 'list-reverse';
```

Inside `_list-reverse.scss`:

```scss
@include test-module('list-reverse') {
    @include test('Reverse a list') {

        $list: (1, 2, 3, 4);

        $actual: list-reverse($list);
        $expected: (4 3 2 1);

        @include assert-equal(
            $actual, $expected, 'should return the list in reverse'
        );
    }
}
```

For more information read the [Sass True Documentation](https://github.com/oddbird/true).

### JavaScript Unit Testing

JavaScript unit tests again use Mocha, and are found within the `unit-testing/js` directory.

#### Running JavaScript Unit Tests

To run JavaScript unit tests with Grunt, run the `mochaTest:js` command:

```bash
grunt mochaTest:js
```

#### Writing JavaScript Unit Tests

Create a new file in the `unit-testing/js`. For this example, we will be testing the One-nexus [`app.isValidSelector.js` function](https://github.com/esr360/One-Nexus/blob/master/assets/tools/js/app.isValidSelector.js). In this example the file will be called `isValidSelector.js`, living at `unit-testing/js/isValidSelector.js`.

Require the newly created file into `unit-testing/js/tests.js` (which already exists):

```js
require('./isValidSelector.js');
```

Inside `isValidSelector.js`:

```js
import * as app from '#TODO/app.js';

describe('Test if a CSS selector is a valid selector', function() {
    it('should validate a valid selector', function() {
        assert.equal(app.isValidSelector('[class*="foo"]'), true);
    });
    it('should invalidate an ivalid selector', function() {
        assert.equal(app.isValidSelector('class*="foo"'), false);
    });
});
```

For more information read the [MochaJS Documentation](https://mochajs.org/).

## Build/Grunt Tools

One-Nexus currently uses Grunt for all build tools, but in the future will be moving to [NPM Scripts](https://medium.com/valtech-design/using-npm-scripts-to-run-node-sass-443b031b02a).

All of the build commands work out-the-box (after running `npm install` and assuming you have `grunt-cli` installed) without any other configuration - though many aspects of the build tools are configurable.

> Remember you need to have `grunt-cli` installed globally (`npm i -g grunt-cli`)

Generate distribution assets and setup a local server which watches for live changes by running the default `grunt` task. Your built UI will be available at `http://localhost:3000/`.

### Available Grunt Tasks

<table class="table">
    <thead>
        <tr>
            <th>Task</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>grunt</td>
            <td>Default grunt tasks; runs the <code>theme</code>, <code>browserSync</code> and <code>watch</code> tasks</td>
        </tr>
        <tr>
            <td>grunt theme</td>
            <td>Generate distribution assets for the default theme</td>
        </tr>
        <tr>
            <td>grunt theme:THEME</td>
            <td>Generate distribution assets for a specified theme</td>
        </tr>
        <tr>
            <td>grunt themes</td>
            <td>Generate distribution assets for all themes</td>
        </tr>
        <tr>
            <td>grunt lint</td>
            <td>Run JavaScript and Sass code linting</td>
        </tr>
        <tr>
            <td>grunt test</td>
            <td>Run JavaScript and Sass unit tests</td>
        </tr>
        <tr>
            <td>grunt docs</td>
            <td>Generate SassDoc and JSDoc from source files</td>
        </tr>
    </tbody>
</table>

### Available Grunt Options

Using the [grunt.option](http://gruntjs.com/api/grunt.option) API, you can pass several parameters on the command line when running the above tasks:

#### Theme

```bash
grunt --theme=AnotherTheme
```

#### Env

Set your development environment; either `dev` or `prod`. This determines whether generated assets should be minified or not, as well as whether or not source maps should be generated.

```bash
grunt --env=prod
```

You can combine options (this is thanks to [nopt-grunt-fix](https://www.npmjs.com/package/nopt-grunt-fix), and is not a standard feature of Grunt):

```bash
grunt --theme=AnotherTheme --env=prod
```