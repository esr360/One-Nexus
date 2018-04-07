# One-Nexus Form

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)
* [Representations](#representations)

## Overview

### Quick Look

###### React

```jsx
<Form fields={[
    {
        type: 'text',
        label: 'Username'
    },
    {
        type: 'password',
        label: 'Password'
    }
]} submit='Login' />
```

###### HTML

```html
<form class="form">
    <div class="form_group">
        <label class="form_label">Username</label>
        <input class="form_input" type="text" >
    </div>
    <div class="form_group">
        <label class="form_label">Password</label>
        <input class="form_input" type="password">
    </div>
    <input class="form_submit button" type="submit" value="Login">
</form>
```

### Components

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Components) about components

* group
* label
* input
* fieldset
* submit

### Modifiers

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Modifiers) about modifiers

* [[...Global modifiers]](https://github.com/esr360/One-Nexus/wiki/Global-Modifiers)

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "form": {
        "name": "form",
        "methods": ["setState", "validate"],
        "label": {
            "transition": ["#CORE", "transition"],
            "color": ["#CORE", "text-color"]
        },
        "input": {
            "color": ["#CORE", "text-color"],
            "border": "1px solid",
            "border-color": ["#COLOR", "greyscale", "grey-3"],
            "padding": "0.75em",
            "transition": ["#CORE", "transition"],
            "font-family": ["#CORE", "font-family"]
        },
        "legend": {
            "margin-bottom": "1rem",
            "font-size": ["#FONT-SIZE", "size-4"]
        },
        "valid-color": ["#COLOR", "validation", "valid"],
        "invalid-color": ["#COLOR", "validation", "invalid"]
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
            <td><code>valid-color</code></td>
            <td>The color to signal that an input is valid</td>
        </tr>
        <tr>
            <td><code>invalid-color</code></td>
            <td>The color to signal that an input is invalid</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `form` object in your theme's config file (e.g. [ui/themes/One-Nexus/theme.json](../../../themes/One-Nexus/theme.json)):

```js
{
    "app": {
        "form": {
            ...
        }
    }
}
```

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Interactions

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-interactions) about module interactions

* [setState](#setstate)
* [validate](#validate)

> Interactions are defined in [ui/modules/elements/form/form.js](../../../modules/elements/form/form.js)

### setState

> Show/hide form fields based on specified rulesets

```js
UI.form().setState(fields);
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
            <td>Fields</td>
            <td><code>Array</code></td>
            <td>Array of <a href="#fielddraft">FieldDraft</a>'s on which to apply rulesets</td>
        </tr>
    </tbody>
</table>

#### Examples

```js
UI.form().setState([
    {}
]);
```

## Rendering

> If you are *not* using React, simply look to the 'Output' section of any example

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

```jsx
<Carousel slides={[
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />,
    <img src="https://picsum.photos/640/480" />
]} />
```

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [Props.slides](#propsslides)

### Props.slides

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Array</code></td>
    </tr>
</table>

```jsx
const slides = [
    <img src="https://picsum.photos/640/480" />,
    <div>Carousel slide</div>,
    <img src="https://picsum.photos/640/480" />
]

<Carousel slides={slides} />
```

###### Output

```html
<div class="carousel">
    <img src="https://picsum.photos/640/480" />
    <div>Carousel slide</div>
    <img src="https://picsum.photos/640/480" />
</div>
```

## Representations

### FieldDraft

A FieldDraft is a JavaScript Object which represents a Form group.

* [FieldDraft.type](#)
* [FieldDraft.label](#)
* [FieldDraft.rules](#)
* [FieldDraft.validate](#)
* [FieldDraft.fieldset](#)
* [FieldDraft.legend](#)
* [FieldDraft.before/FieldDraft.after](#)

<table class="table">
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>type</code></td>
            <td><code>string</code></td>
            <td>The <a href="#TODO">type</a> of Form group</td>
        </tr>
        <tr>
            <td><code>label</code></td>
            <td><code>string</code></td>
            <td>The text to use for the field's label</td>
        </tr>
        <tr>
            <td><code>legend</code></td>
            <td><code>string | object</code></td>
            <td>The group's <a href="#">legend</a> if <code>type</code> is <code>'fieldset'</code></td>
        </tr>
        <tr>
            <td><code>validate</code></td>
            <td><code>array</code></td>
            <td><a href="#TODO">Validator</a> conditions to determine whether the field should validate</td>
        </tr>
        <tr>
            <td><code>rules</code></td>
            <td><code>array</code></td>
            <td><a href="#TODO">Rules</a> to determine whether the field should be visible</td>
        </tr>
        <tr>
            <td><code>fields</code></td>
            <td><code>array</code></td>
            <td>Array of <a href="#TODO">FieldDraft</a>'s to use when <code>type</code> is <code>'fieldset'</code></td>
        </tr>
        <tr>
            <td><code>fieldset</code></td>
            <td><code>object</code></td>
            <td>Add a child fieldset (see <a href="#">FieldDraft.fieldset</a>)</td>
        </tr>
        <tr>
            <td><code>before</code></td>
            <td>object</td>
            <td>HTML/JSX to insert before the group's field(s) (see <a href="#">FieldDraft.before</a>)</td>
        </tr>
        <tr>
            <td><code>after</code></td>
            <td>object</td>
            <td>HTML/JSX to insert after the group's field(s) (see <a href="#">FieldDraft.after</a>)</td>
        </tr>
        <tr>
            <td><code>render</code></td>
            <td>JSX</td>
            <td>HTML/JSX to render when <code>type</code> is <code>'HTML'</code></td>
        </tr>
        <tr>
            <td><code>{HTML Attributes}</code></td>
            <td><code>*</code></td>
            <td>Any valid <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes">HTML attribute</a></td>
        </tr>
    </tbody>
</table>

##### Example

```js
{
    type: 'text',
    label: 'Username',
    id: 'username',
    required: true,
    validate: [{
        rule: field => field.value.length > 3,
        message: 'Username must be more than 3 characters'
    }]
}
```

#### FieldDraft.type

The `type` parameter for a FieldDraft can be one of the following:

* any valid [HTML input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types), to represent an input HTML element
* `fieldset` | `textarea` - to represent an HTML element of the corresponding tag
* `HTML` - to represent a custom HTML/JSX block

#### FieldDraft.label

##### Basic example

```js
{
    label: 'Field label'
}
```

##### Pass custom attributes

```js
{
    label: {
        title: 'Field label',
        className: 'heading-size-4',
        ...
    }
}
```

#### FieldDraft.rules

> An array of conditions which will determine whether or not the field will be visible

* For a field to be visible, all conditions must return `true`
* To hide a field based on some criteria, create a condition which returns `false`

```js
{
    rules: [
        //field will show when checkbox with id `foo` is checked
        document.getElementById('foo').checked,

        // `foo` will dynamically fetch the checkbox with id `foo`,
        // as such, the below is the same as the above
        foo => foo.checked,

        // `foo` and `bar` will dynamically fetch inputs with the
        // corresponding IDs of `foo` and `bar` - condition will test
        // whether the values for inputs `foo` and `bar` are equal
        (foo, bar) => foo.value === bar.value

        // hide the field if checkbox with id `fizz` is checked
        fizz => !fizz.checked
    ]
}
```

Field will be visible:

```js
{
    rules: [true, true, true]
}
```

Field will be hidden:

```js
{
    rules: [true, false, true]
}
```

#### FieldDraft.validate

#### FieldDraft.fieldset

#### FieldDraft.legend

##### Basic example

```js
{
    legend: 'Legend title'
}
```

##### Pass custom attributes

```js
{
    legend: {
        title: 'Legend title',
        className: 'heading-size-4',
        ...
    }
}
```

#### FieldDraft.before/FieldDraft.after