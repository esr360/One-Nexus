# One-Nexus Table

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Rendering](#rendering)

## Overview

> One-Nexus tables use [`rc-table`](https://github.com/react-component/table)

### Quick Look

```js
const columns = [
    { title: 'Name', dataIndex: 'name', key:'name' }, 
    { title: 'Age', dataIndex: 'age', key:'age' }, 
    { title: 'Address', dataIndex: 'address', key:'address' }, 
    { title: 'Operations', dataIndex: '', key:'operations', render: () => <a href='#'>Delete</a> }
];

const data = [
    { name: 'Jack', age: 28, address: 'some where', key:'1' },
    { name: 'Rose', age: 36, address: 'some where', key:'2' }
];
```

```jsx
<Table columns={columns} data={data} />
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
            <td><code>fixed</code></td>
            <td>Apply a <code>table-layout</code> of <code>fixed</code> to the table</td>
        </tr>
    </tbody>
</table>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "table": {
        "name": "table",
        "target": "table",
        "width": "100%",
        "cell-padding": "0.6em"
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
            <td><code>cell-padding</code></td>
            <td>The padding for table cells</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `table` object in your theme's config file (e.g. [ui/themes/one_nexus.json](../../../themes/one_nexus.json)):

```js
{
    "theme": {
        "table": {
            ...
        }
    }
}
```

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

> Components aren't used for the table; instead the `tbody`, `tr`, `th` and `td` elements are styled directly

## Rendering

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

```jsx
<Table columns={columns} data={data} />
```

###### API

> `columns` and `data` are part of the [rc-table API](https://github.com/react-component/table#api)

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [defaultProps](#defaultprops)
* [rc-table API](https://github.com/react-component/table#api)

> One-Nexus does not load the `rc-table` CSS so some advanced features may not be compatible

### defaultProps

```js
{
    tag: 'div',
    fixed: true
}
```