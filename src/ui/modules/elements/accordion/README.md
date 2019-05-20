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
<Module name='accordion' { keepOpen }>
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

```js
{
    'name': 'accordion',

    title: {
        'background': 'transparent',
        'color': 'grey',
        'border': `1px solid ${theme.colors.opaque['dark-2']}`,
        'border-radius': 0,
        'padding': '1em',
        'transition': '0.4s',

        ':hover': {
            'background': theme.colors.brand['brand-1'],
            'color': theme.colors.greyscale.white,

            toggle: {
                'color': theme.colors.greyscale.white
            }
        }
    },

    toggle: {
        'color': theme.colors.opaque['dark-4'],
        'transition': theme.core.transition
    },

    content: {
        'background': 'white',
        'color': 'grey',
        'border': '1px solid rgba(0,0,0, 0.15)',
        'border-radius': 0,
        'padding': '1.5em'
    },

    panel: {
        'modifier(active)': {
            title: {
                'background': theme.colors.brand['brand-2'],
                'color': theme.colors.greyscale.white,
                'border-color': 'transparent',
                'border-radius': 0
            },

            toggle: {
                'color': theme.colors.greyscale.white
            }
        }
    }
}
```

Pass custom options to the `Accordion` object in your theme's config file underneath the `modules` entry (e.g. [ui/themes/one_nexus.json](../../../themes/one_nexus.json)):

```js
{
    "theme": {
        "modules": {
            "Accordion": {
                ...
            }
        }
    }
}
```

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Interactions

> [learn more about module interactions](https://github.com/esr360/One-Nexus/wiki/Module-interactions)

* [Toggle](#toggle)

> Interactions are defined in [ui/modules/elements/accordion/accordion.js](../../../modules/elements/accordion/accordion.js)

### Toggle

> Toggle one or more panels of an accordion

```js
Accordion.toggle(target, type, parent);
```

> This interaction is called automatically when an accordion title component is clicked

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
            <td>The target panel(s) to toggle (<a href="#target">learn more</a>)</td>
        </tr>
        <tr>
            <td><code>[type]</code></td>
            <td><code>('show'|'hide'|'toggle')</code></td>
            <td>The action type (defaults to 'toggle')</td>
        </tr>
        <tr>
            <td><code>[parent]</code></td>
            <td><a href="https://github.com/esr360/Synergy/wiki/JavaScript#parameter---els">Synergy selector</a></td>
            <td>The accordion(s) on which to toggle panels (<a href="#parent">learn more</a>)</td>
        </tr>
    </tbody>
</table>

#### Target

* If `target` is a string, it will be passed to a `querySelectorAll` method of the target accordion(s) to determine which panel(s) to toggle
* If `target` is a number, the nth panel will be toggled on the target accordion(s)
* If `target` is an HTMLElement, that panel will be toggled
* If `target` is a NodeList of panels, each panel in the list will be toggled

#### Parent

* This parameter is not necessary but is useful if you want to, for example, toggle the 2nd panel in a NodeList of accordions

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

// Close all panels on all accordions
Accordion.toggle('*', 'close', '*');

// Toggle panel from React Component reference (assumed to be `this.ref`)
Accordion.toggle(this.ref.current);
```

## Rendering

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

* [Examples](#examples)
* [API](#api)

### Examples

* [Basic Example](#basic-example)
* [Custom Build](#custom-build)

#### Basic Example

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
* [DefaultProps](#defaultprops)
* [Props.panels](#propspanels)
* [Props.toggle](#propstoggle)

#### DefaultProps

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

* This method gets called on click of each `title` component

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