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
* Built with Sass and ES6
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
* [Tools](#TODO)
* [Themes](#TODO)
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
* [Sass-JSON-Vars Gem](https://github.com/vigetlabs/sass-json-vars) - `gem install sass-json-vars`
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

So `One-Nexus.scss` is sent to the Sass compiler to create `app.css`, and likewise for `One-Nexus.js` and `app.js`. Notice the `config.json` file above - this is where any custom configuration for each UI module will be stored, effectively acting as the source of your project's UI configuration, this will be addressed in more detail later.

One-Nexus is built using the [Synergy](https://github.com/esr360/Synergy) framework, which is what allows it to have configurable modules.

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

```json
{
    "accordions": {
        "name": "accordion",
        "icon": {
            //...
        },
        "section": {
            //...
        },
        "title": {
            //...
        },
        ///...
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

A module is a UI element which can be comprised of a `.scss` file, `.js` file and `.json` file, which can be imported into themes and configured by a theme.json file. They can have modifier variants as well as child components which can also have modifiers.

All available modlues are located within the `assets/modules/` directory. One-Nexus splits the modules up into the following categories:

* Elements
* Objects
* Utilities