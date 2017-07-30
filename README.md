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