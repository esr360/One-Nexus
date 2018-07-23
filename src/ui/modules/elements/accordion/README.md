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
    { title: 'foo', content: 'bar' },
    { title: 'fizz', content: 'buzz' }
]} />
```

###### Internal Interface [[?]](#TODO)

```jsx
<Module name='accordion'>
    <Component name='panel' { active }>
        <Component name='title' />
        <Component name='content' />
    </Component>
    ...
</Module>
```

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
            <td><code>animationSpeed</code></td>
            <td>The duration (in <code>ms</code>) for the open/close animation</td>
        </tr>
        <tr>
            <td><code>keepOpenModifier</code></td>
            <td>The modifier to be used for accordions which allow for multiple open panels simultaneously</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `accordion` object in your theme's config file (e.g. [ui/themes/one_nexus.json](../../../themes/one_nexus.json)):

```js
{
    "theme": {
        "accordion": {
            ...
        }
    }
}
```

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Interactions

> Module interactions are applied by default within the module's `.jsx` file ([learn more](https://github.com/esr360/One-Nexus/wiki/Module-interactions))

* [Toggle](#toggle)

> Interactions are defined in [ui/modules/elements/accordion/accordion.js](../../../modules/elements/accordion/accordion.js)

### Toggle

> Toggle one or more sections of an accordion

```js
Accordion.toggle(target, type, parent);
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
            <td><code>(String|Number|HTMLElement|NodeList)</code></td>
            <td>The target section(s) to toggle (<a href="#target">learn more</a>)</td>
        </tr>
        <tr>
            <td><code>[type]</code></td>
            <td><code>('show'|'hide'|'toggle')</code></td>
            <td>The toggle operator (defaults to 'toggle')</td>
        </tr>
        <tr>
            <td><code>[parent]</code></td>
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
// Toggle panel with ID 'bar'
Accordion.toggle(document.getElementById('bar'));

// Toggle panel with ID 'bar'
Accordion.toggle('#bar');

// Toggle panel with ID 'bar' on accordion with ID 'foo'
Accordion.toggle('#bar', 'toggle', '#foo');

// Close first panel of accordion with ID 'foo'
Accordion.toggle(1, 'close', '#foo');

// Open all panels on all accordions with class 'partyTime'
Accordion.toggle('*', 'open', '.partyTime');

// Close all sections on all accordions
Accordion.toggle('*', 'close', '*');

// Toggle panel from React Component reference
Accordion.toggle(ReactDOM.findDOMNode(myPanel));
```

## Rendering

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

* [Examples](#examples)
* [API](#api)

### Examples

* [Using `<Accordion>` Tag](#using-accordion-tag)
* [Custom Build](#custom-build)

#### Using `<Accordion>` Tag

```jsx
<Accordion panels={[
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'}
]} />
```

#### Custom Build

```jsx
<Module name='accordion'>
    <Component name='panel'>
        <Component name='title' onClick={Accordion.toggle}>foo</Component>
        <Component name='content'>bar</Component>
    </Component>
    <Component name='panel'>
        <Component name='title' onClick={Accordion.toggle}>fizz</Component>
        <Component name='content'>buzz</Component>
    </Component>
</Module>
```

### API

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [defaultProps](#defaultprops)
* [Props.panels](#propspanels)
* [Props.toggle](#propstoggle)

#### defaultProps

```js
{
    object: true,
    toggle: interactions.toggle
}
```

#### Props.panels

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

##### Panel.title

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>(String | <a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a>)</code></td>
    </tr>
</table>

##### Panel.content

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>(String | <a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a>)</code></td>
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

##### Panel.active

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

#### Props.toggle

> Overwrite the default `toggle` method

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Function</code></td>
    </tr>
    <tr>
        <td><b>Default</b></td>
        <td><a href="#toggle"><code>interactions.toggle</code></a></td>
    </tr>
</table>

```jsx
<Accordion panels={panels} toggle={event => {
    // custom toggle event handler logic...
}} />
```

You can import and call the toggle interaction manually:

```jsx
import { toggle } from '../../accordion/accordion.js';
```

```jsx
<Accordion panels={panels} toggle={event => toggle(event.target)} />
```