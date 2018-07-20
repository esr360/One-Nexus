# One-Nexus Accordion

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

###### Internal Interface

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