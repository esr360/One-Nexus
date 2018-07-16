# One-Nexus Accordion

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)

## Overview

### Quick Look

```jsx
<Accordion panels={[
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'}
]} />
```

### Components

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Components) about components

* content
* section
* title
* toggle

### Modifiers

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Modifiers) about modifiers

<table class="table">
    <thead>
        <tr>
            <th>Modifier</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="https://github.com/esr360/One-Nexus/wiki/Global-Modifiers">[...Global modifiers]</a></td>
            <td>Modifiers that can be applied to any module</td>
        </tr>
        <tr>
            <td><code>keepOpen</code></td>
            <td>Allows multiple accordion panels to be open simultaneously</td>
        </tr>
    </tbody>
</table>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "accordion": {
        "name": "accordion",
        "section": {
            "vertical-rhythm": 0,
            "active": {
                "component(title)": {
                    "background": ["#COLOR", "brand", "brand-2"],
                    "color": ["#COLOR", "greyscale", "white"],
                    "border-color": "transparent",
                    "border-radius": 0
                },
                "component(toggle)": {
                    "color": ["#COLOR", "greyscale", "white"]
                }
            }
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
                "component(toggle)": {
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
            "color": ["#COLOR", "opaque", "dark-4"],
            "transition": ["#CORE", "transition"]
        },
        "animationSpeed": 400,
        "keepOpenModifier": "keepOpen"
    }
}
```

> Certain values from the above configuration are excluded from the below table ([learn more](https://github.com/esr360/One-Nexus/tree/master/src/ui/modules#documenting-configuration-properties))

<table class="table">
    <thead>
        <tr>
            <th>Option</th>
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

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Interactions

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-interactions) about module interactions

* [Toggle](#toggle)

> Interactions are defined in [ui/modules/elements/accordion/accordion.js](../../../modules/elements/accordion/accordion.js)

### Toggle

> Toggle one or more sections of an accordion

```js
toggle(target, type, parent);
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
            <td><code>target</code></td>
            <td><code>(String | Number | HTMLElement | NodeList)<code></td>
            <td>The target section(s) to toggle <a href="#target">learn more</a></td>
        </tr>
        <tr>
            <td>[type]</td>
            <td><code>('show'|'hide'|'toggle')</code></td>
            <td>The toggle operator (defaults to 'toggle')</td>
        </tr>
        <tr>
            <td>[parent]</td>
            <td><a href="https://github.com/esr360/Synergy/wiki/JavaScript#parameter---els">Synergy selector</a></td>
            <td>The accordion(s) on which to toggle sections (<a href="#parent">learn more</a>)</td>
        </tr>
    </tbody>
</table>

#### Target

* If `target` is a string, it will be passed to a `querySelectorAll` method of the target accordion(s) to determine which panel(s) to toggle
* If `target` is a number, the nth panel will be toggled on the target accordion(s)
* If `target` is an HTMLElement, that panel will be toggled
* If `target` is a NodeList of panels, each panel in the list will be toggled

#### Parent

* If this value is not passed, the function will attempt to determine the parent accordion from the `target` element(s)

#### Examples

```js
// Toggle section with ID 'bar'
toggle(document.getElementById('bar'));

// Toggle section with ID 'bar'
toggle('#bar');

// Toggle section with ID 'bar' on accordion with ID 'foo'
toggle('#bar', 'toggle', '#foo');

// Close first section of accordion with ID 'foo'
toggle(1, 'close', '#foo');

// Open all sections on all accordions with class 'partyTime'
toggle('*', 'open', '.partyTime');

// Close all sections on all accordions
toggle('*', 'close', '*');
```

## Rendering

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

```jsx
<Accordion panels={[
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'}
]} />
```

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
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

#### Panel.title

<table>
    <tr>
        <td><b>Type</b></td>
        <td><a href="https://reactjs.org/docs/glossary.html#elements"><code>React Element</code></td>
    </tr>
</table>

#### Panel.content

<table>
    <tr>
        <td><b>Type</b></td>
        <td><a href="https://reactjs.org/docs/glossary.html#elements"><code>React Element</code></td>
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