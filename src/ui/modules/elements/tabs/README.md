# One-Nexus Tabs

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)

## Overview

### Quick Look

```jsx
<Tabs data={[
    { title: 'foo', content: 'bar', active: true },
    { title: 'fizz', content: 'buzz' }
]} />
```

###### Internal Interface [[?]](#TODO)

```jsx
<Module name='tabs'>
    <Component name='nav' { round, full, (center | left | right) }>
        <SubComponent name='item' { active, round } />
        ...
    </Component>

    <Component name='content' { glue }>
        <Component name='item' { active } />
        ...
    </Component>
</Module>
```

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "tabs": {
        "name": "tabs",
        "nav": {
            "sub-component(item)": {
                "transition": ["#CORE", "transition"],
                "color": ["#CORE", "text-color"],
                "background": "transparent",
                "round-radius": "0.6em",
                "padding": "0.75em 1.25em",
                "border": "1px solid",
                "border-color": ["#COLOR", "greyscale", "grey-3"],
                "hover": {
                    "color": ["#COLOR", "greyscale", "white"],
                    "background": ["#COLOR", "brand", "brand-3"],
                    "border-color": ["#COLOR", "brand", "brand-3"]
                },
                "active": {
                    "color": ["#COLOR", "greyscale", "white"],
                    "background": ["#COLOR", "brand", "brand-1"]
                }
            }
        },
        "content": {
            "color": ["#CORE", "text-color"],
            "background": ["#COLOR", "greyscale", "white"],
            "border": "1px solid",
            "border-color": ["#COLOR", "greyscale", "grey-2"],
            "padding": "1.5em",
            "glueHeight": "6px",
            "glueColor": ["#COLOR", "brand", "brand-1"]
        }
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
            <td><code>content.glueHeight</code></td>
            <td>Height of the glue connecting the nav to the content when content component has <code>glue</code> modifier</td>
        </tr>
        <tr>
            <td><code>content.glueColor</code></td>
            <td>Color of the glue connecting the nav to the content when content component has <code>glue</code> modifier</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `tabs` object in your theme's config file (e.g. [ui/themes/one_nexus.json](../../../themes/one_nexus.json)):

```js
{
    "theme": {
        "tabs": {
            ...
        }
    }
}
```

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Interactions

> Module interactions are applied by default within the module's `.jsx` file ([learn more](https://github.com/esr360/One-Nexus/wiki/Module-interactions))

* [Activate](#activate)

> Interactions are defined in [ui/modules/elements/tabs/tabs.js](../../../modules/elements/tabs/tabs.js)

### Activate

> Activate (show) a tab

```js
Tabs.activate(event);
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
            <td><code>event</code></td>
            <td><code>Object</code></td>
            <td>The click event of the tab navigation item</td>
        </tr>
    </tbody>
</table>

## Rendering

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

* [Examples](#examples)
* [API](#api)

### Examples

* [Basic Example](#basic-example)
* [Custom Build](#custom-build)
* [Tabs With Glued Content](#tabs-with-glued-content)
* [Tabs With Center Aligned Navigation](#tabs-with-center-aligned-navigation)
* [Tabs With Full-Width Navigation](#tabs-with-full-width-navigation)

#### Basic Example

```jsx
<Tabs data={[
    { title: 'foo', content: 'bar', active: true },
    { title: 'fizz', content: 'buzz' }
]} />
```

#### Custom Build

```jsx
<Module name='tabs'>
    <Component name='nav'>
        <SubComponent name='item' onClick={Tabs.activate} active>foo</SubComponent>
        <SubComponent name='item' onClick={Tabs.activate}>fizz</SubComponent>
    </Component>

    <Component name='content'>
        <Component name='item' active>bar</Component>
        <Component name='item'>buzz</Component>
    </Component>
</Module>
```

#### Tabs With Glued Content

```jsx
<Tabs content={{ glue: true }} data={[
    { title: 'foo', content: 'bar', active: true },
    { title: 'fizz', content: 'buzz' }
]} />
```

#### Tabs With Center Aligned Navigation

```jsx
<Tabs nav={{ center: true }} data={[
    { title: 'foo', content: 'bar', active: true },
    { title: 'fizz', content: 'buzz' }
]} />
```

#### Tabs With Full-Width Navigation

```jsx
<Tabs nav={{ full: true }} data={[
    { title: 'foo', content: 'bar', active: true },
    { title: 'fizz', content: 'buzz' }
]} />
```

### API

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [DefaultProps](#defaultprops)
* [Props.data](#propspanels)
* [Props.activate](#propstoggle)

#### DefaultProps

```js
{
        object: true,
        activate: interactions.activate
}
```

#### Props.data

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Array</code></td>
    </tr>
</table>

```jsx
const data = [
    { title: 'foo', content: 'bar', active: true },
    { title: 'fizz', content: 'buzz' }
];

<Tabs data={panels} />
```

#### Props.activate

> Overwrite the default `activate` method

* This method gets called on click of each `item` SubComponent of the `nav` Component

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Function</code></td>
    </tr>
    <tr>
        <td><b>Default</b></td>
        <td><a href="#toggle"><code>interactions.activate</code></a></td>
    </tr>
</table>

```jsx
<Tabs data={data} activate={event => {
    // custom event handler logic...
}} />
```

You can import and call the activate interaction manually:

```jsx
import { activate } from '../../tabs/tabs.js';
```

```jsx
<Tabs data={data} activte={event => activte(event.target)} />
```