# One-Nexus Accordion

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)

## Overview

### Components

> [Learn more](#) about components

* content
* section
* title
* toggle

### Modifiers

> [Learn more](#) about modifiers

* [[...Global modifiers]](#TODO)
* [keepOpen](#keepopen)

#### KeepOpen

> Allows multiple accordion panels to be open simultaneously

### Quick Look

###### React

```jsx
<Accordion panels={[
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'}
]} />
```

###### HTML

```html
<div class="accordion">
    <div class="accordion_section">
        <div class="accordion_title">
            <div class="accordion_toggle fa fa-chevron-circle-down"></div> foo
        </div>
        <div class="accordion_content">bar</div>
    </div>
    <div class="accordion_section">
        <div class="accordion_title">
            <div class="accordion_toggle fa fa-chevron-circle-down"></div> fizz
        </div>
        <div class="accordion_content">buzz</div>
    </div>
</div>
```

## Configuration

> [Learn more]() about module configutation

```json
{
    "accordion": {
        "name": "accordion",
        "section": {
            "vertical-rhythm": 0
        },
        "title": {
            "background": "transparent",
            "color": ["#CORE", "text-color"],
            "border": "1px solid rgba(black, 0.15)",
            "border-radius": 0,
            "padding": "1em",
            "transition": ["#CORE", "transition"],
            "hover": {
                "background": ["#COLOR", "brand", "brand-1"],
                "color": ["#COLOR", "greyscale", "white"],
                "component('toggle')": {
                    "color": ["#COLOR", "greyscale", "white"]
                }
            },
            "active": {
                "background": ["#COLOR", "brand", "brand-1"],
                "color": ["#COLOR", "greyscale", "white"],
                "border-color": "transparent",
                "border-radius": 0,
                "component('toggle')": {
                    "color": ["#COLOR", "greyscale", "white"]
                }
            }
        },
        "content": {
            "background": ["#COLOR", "greyscale", "white"],
            "color": ["#CORE", "text-color"],
            "border": "1px solid rgba(black, 0.15)",
            "border-radius": 0,
            "padding": "1.5em"
        },
        "toggle": {
            "color": ["#COLOR", "opaque", "dark-4"]
        },
        "animationSpeed": 400,
        "keepOpenModifier": "keepOpen"
    }
}
```

> Certain values from the above configuration are excluded from the below table ([learn more](#TODO))

<table class="table">
    <thead>
        <tr>
            <th>Option</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>section['vertical-rhythm']</code></td>
            <td>The vertical specing between each separate accordion</td>
        </tr>
        <tr>
            <td><code>animationSpeed</code></td>
            <td>The duration (in `ms`) for the open/close animation</td>
        </tr>
        <tr>
            <td><code>keepOpenModifier</code></td>
            <td>The modifier to be used for accordions which allow for multiple open panels simultaneously</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `accordion` object in your theme's config file (e.g. [ui/themes/One-Nexus/theme.json](../../../themes/One-Nexus/theme.json)):

```js
{
    "app": {
        "accordion": {
            ...
        }
    }
}
```

## Styles

> [Learn more]() about module styles

## Interactions

> [Learn more]() about module interactions

* [Toggle](#toggle)
* [Open](#open)
* [Close](#close)

> Interactions are defined in [ui/modules/elements/accordion/accordion.js](../../../modules/elements/accordion/accordion.js)

### Toggle

> Toggle one or more sections of an accordion

```js
UI.accordion(parent).toggle(target);
```

<table>
    <thead>
        <tr>
            <td><b>Parameter</b></td>
            <td><b>Type</b></td>
            <td><b>Description<b/></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Parent</td>
            <td><a href="#">Synergy selector</a></td>
            <td>The accordion(s) on which to toggle sections</td>
        </tr>
        <tr>
            <td>Target</td>
            <td>(String | Number | HTMLElement | NodeList)</td>
            <td>The target section(s) to toggle</td>
        </tr>
    </tbody>
</table>

#### Examples

```js
// Toggle first section of accordion with ID 'foo'
UI.accordion(document.getElementById('foo')).toggle(1);

// Toggle section with ID 'bar' on accordion with ID 'foo'
UI.accordion(document.getElementById('foo')).toggle(document.getElementById('bar'));

// Toggle section with ID 'bar' on accordion with ID 'foo'
UI.accordion('#foo').toggle('#bar');

// Toggle sections with class 'foo' on accordion with ID 'foo'
UI.accordion(document.getElementById('foo')).toggle('.foo');

// Toggle second section on all accordions with class 'accordion'
UI.accordion('.accordion').toggle(2);

// Toggle sections with class 'foo' on all accordions with class 'accordion'
UI.accordion('.accordion').toggle('.foo');

// Toggle first section on all accordions
UI.accordion().toggle(1);

// Toggle all sections on all accordions
UI.accordion().toggle();
```

### Open

> Open one or more sections of an accordion

```js
UI.accordion(parent).open(target);
```

<table>
    <thead>
        <tr>
            <td><b>Parameter</b></td>
            <td><b>Type</b></td>
            <td><b>Description<b/></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Parent</td>
            <td><a href="#">Synergy selector</a></td>
            <td>The accordion on which to open sections</td>
        </tr>
        <tr>
            <td>Target</td>
            <td>(String | Number | HTMLElement | NodeList)</td>
            <td>The target section(s) to open</td>
        </tr>
    </tbody>
</table>

#### Examples

```js
// Opens all sections of accordion with ID 'foo'
UI.accordion(document.getElementById('foo')).open();

// Opens first section of accordion with ID 'foo'
UI.accordion(document.getElementById('foo')).open(1);

// Opens first section of all accordions
UI.accordion().open(1);

// Opens all sections with class 'foo' for all accordions
UI.accordion().open(document.querySelectorAll('.foo'));

// Opens all sections with class 'foo' for all accordions
UI.accordion().open('.foo');
```

### Close

> Close one or more sections of an accordion

```js
UI.accordion(parent).close(target);
```

<table>
    <thead>
        <tr>
            <td><b>Parameter</b></td>
            <td><b>Type</b></td>
            <td><b>Description<b/></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Parent</td>
            <td><a href="#">Synergy selector</a></td>
            <td>The accordion on which to close sections</td>
        </tr>
        <tr>
            <td>Target</td>
            <td>(String | Number | HTMLElement | NodeList)</td>
            <td>The target section(s) to close</td>
        </tr>
    </tbody>
</table>

#### Examples

```js
// Closes all sections of accordion with ID 'foo'
UI.accordion(document.getElementById('foo')).close();

// Closes first section of accordion with ID 'foo'
UI.accordion(document.getElementById('foo')).close(1);

// Closes first section of all accordions
UI.accordion().close(1);

// Closes all sections with class 'foo' for all accordions
UI.accordion().close(document.querySelectorAll('.foo'));

// Closes all sections with class 'foo' for all accordions
UI.accordion().close('.foo');
```

## Rendering

> [Learn more]() about rendering modules

```jsx
<Accordion panels={[
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'}
]} />
```

* [[...Global props]]()
* [Props.panels](#propspanels)

### Props.panels

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Array</code></td>
    </tr>
</table>

```jsx
const panels = [
    { title: 'foo', content: 'bar' },
    { title: <div>alpha</div>, content: <div>beta</div> }
];

<Accordion panels={panels} />
```

###### Output:

```html
<div class="accordion">
    <div class="accordion_section">
        <div class="accordion_title">
            <div class="accordion_toggle fa fa-chevron-circle-down"></div> foo
        </div>
        <div class="accordion_content">bar</div>
    </div>
    <div class="accordion_section">
        <div class="accordion_title">
            <div class="accordion_toggle fa fa-chevron-circle-down"></div>
            <div>alpha</div>
        </div>
        <div class="accordion_content"><div>beta</div></div>
    </div>
</div>
```

#### Panel.title

<table>
    <tr>
        <td><b>Type</b></td>
        <td>JSX</td>
    </tr>
</table>

#### Panel.content

<table>
    <tr>
        <td><b>Type</b></td>
        <td>JSX</td>
    </tr>
</table>

Accordions can be nested:

```jsx
<Accordion panels={[
    {title: ..., content: 'alpha'},
    {title: ..., content: (
        <Accordion panels={[
            {title: ..., content: 'beta'},
            {title: ..., content: (
                <Accordion panels={[
                    {title: ..., content: 'gamma'},
                    {title: ..., content: <div>potato</div>}
                ]} />
            )}
        ]} />
    )},
    {title: ..., content: <div>buzz</div>}
]} />
```

#### Panel.active

> Set panel(s) to be active (open) by default

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Bool</code></td>
    </tr>
</table>

```jsx
<Accordion panels={[
    {title: ..., content: ...}
    {title: ..., content: ..., active: true}
]} />
```

###### Output:

```html
<div class="accordion">
    <div class="accordion_section">...</div>
    <div class="accordion_section-active">...</div>
</div>
```