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
* [UI Modules](#TODO)
* [The App Layer](#TODO)
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

The One-Nexus layers can be visually represented by the following ~~graphic~~ work of art (please direct all graphic complaints to my employer then maybe they will get me a copy of Photoshop):

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
* [Alert-Bars]
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
* [Breadcrumb]
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
* [Container]
* [Core](#TODO)
* [Grid](#TODO)
* [Helpers](#TODO)
* [Print](#TODO)
* [Typoraphy](#TODO)

## Tools

One-Nexus provides some useful tools to facilitate development and ehance your project's UI.

### JavaScript Tools

* [app.breakpoint](#TODO)
* [app.clickHelper](#TODO)
* [app.custom](#TODO)
* [app.inViewport](#TODO)
* [app.isValidSelector](#TODO)
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

The theme's JavaScript file must first import the `app`:

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
```

### One-Nexus.scss

## Grid System

## Templates

## Unit Testing

## Build/Grunt Tools