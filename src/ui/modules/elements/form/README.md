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
* legend
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

#### Example

> Hide the `Address` fieldset if the `isHomeless` checkbox is checked

```html
<div class="form_group">
    <input type="checkbox" id="isHomeless" class="form_checkbox">
    <label for="isHomeless" class="form_label">I'm homeless</label>

    <fieldset id="address" class="form_fieldset">
        ...
    </fieldset>
</div>
```

```js
UI.form().setState([
    {
        id: 'address',
        rules: [document.getElementById('isHomeless').checked]
    }
]);

// For a more readable result you can do the following to achieve the same thing:
UI.form().setState([
    {
        id: 'address',
        rules: [isHomeless => isHomeless.checked]
    }
]);
```

### validate

> Determine if a field is valid

```js
UI.form().validate(field, validators, callback[isValid, field, message]);
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
            <td>Field</td>
            <td><code>HTMLELment</code> | <code>String</code></td>
            <td>HTMLElement or ID of HTMLElement to validate</td>
        </tr>
        <tr>
            <td>Validators</td>
            <td><code>Array</code></td>
            <td>Array of <a href="#TODO">validators</a> to apply</td>
        </tr>
        <tr>
            <td>Callback</td>
            <td><code>Function</code></td>
            <td>Callback function to run after validation has taken place</td>
        </tr>
        <tr>
            <td>Callback.isValid</td>
            <td><code>Bool</code></td>
            <td>Boolean value stating whether or not the field is valid</td>
        </tr>
        <tr>
            <td>Callback.field</td>
            <td><code>HTMLElement</code></td>
            <td>The HTMLElement of the field</td>
        </tr>
        <tr>
            <td>Callback.message</td>
            <td><code>String</code></td>
            <td>The error message for the validator</td>
        </tr>
    </tbody>
</table>

#### Example

```html
<div class="form_group-validate">
    <input class="form_input" type="password" id="userPassword" required>
    <label class="form_label" for="userPassword">Password</label>
</div>
<div class="form_group-validate">
    <input class="form_input" type="password" id="passwordReEnter" required>
    <label class="form_label" for="passwordReEnter">Re-enter Password</label>
</div>
```

```js
function callback(isValid, field, errorMessage) {
    if (!isValid) {
        field.classList.add('invalid');

        alert(errorMessage);
    }
}

UI.form().validate(document.getElementById('passwordReEnter'), [
    {
        rule: document.getElementById('passwordReEnter').value === document.getElementById('userPassword').value,
        message: 'Passwords do not match'
    }
], callback);

// For a more readable result you can do the following to achieve the same thing:
UI.form().validate('passwordReEnter', [
    {
        rule: (userPassword, passwordReEnter) => passwordReEnter.value === userPassword.value,
        message: 'Passwords do not match'
    }
], callback);
```

## Rendering

> If you are *not* using React, simply look to the 'Output' section of any example

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

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

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [Props.fields](#TODO)
* [Props.submit](#TODO)

### Props.fields

> Array of [FieldDraft](#fielddraft)'s to render

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Array</code></td>
    </tr>
</table>

```jsx
const fields = [
    {
        type: 'fieldset',
        id: 'loginDetails',
        legend: {
            title: 'Login Details'
        },
        fields: [
            {
                type: 'text',
                label: 'Username',
                id: 'username',
                required: true,
                validate: [
                    {
                        rule: field => field.value.length > 3,
                        message: 'Must be more than 3 characters'
                    }
                ]
            },
            {
                type: 'password',
                label: 'Password',
                id: 'userPassword',
                required: true,
                validate: [
                    {
                        rule: field => field.value.length > 8,
                        message: 'Must be more than 8 characters'
                    }
                ]
            },
            {
                type: 'password',
                id: 'passwordReEnter',
                label: 'Re-enter Password',
                required: true,
                validate: [
                    {
                        rule: (userPassword, passwordReEnter) => {
                            return passwordReEnter.value === userPassword.value;
                        },
                        message: 'Passwords do not match'
                    }
                ]
            }
        ]
    }
]

<Form fields={fields} />
```

###### Output

```html
<form class="form">
    <fieldset id="loginDetails" class="form_fieldset">
        <legend class="form_legend">Login Details</legend>
        <div class="form_group-validate">
            <input class="form_input" type="text" id="username" required>
            <label class="form_label" for="username">Username</label>
        </div>
        <div class="form_group-validate">
            <input class="form_input" type="password" id="userPassword" required>
            <label class="form_label" for="userPassword">Password</label>
        </div>
        <div class="form_group-validate">
            <input class="form_input" type="password" id="passwordReEnter" required>
            <label class="form_label" for="passwordReEnter">Re-enter Password</label>
        </div>
    </fieldset>
    <footer class="form_footer object">
        <input type="submit" class="form_submit button" value="Submit">
    </footer>
</form>
```

### Props.submit

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>String</code> | <code>Object</code></td>
    </tr>
</table>

```jsx
<Form fields={...} submit='Sign Up' />
```

###### Output

```html
<form class="form">
    ...
    <footer class="form_footer object">
        <input type="submit" class="form_submit button" value="Sign Up">
    </footer>
</form>
```

#### With Custom Attributes

```jsx
<Form fields={...} submit={{ text: 'Sign Up', className: 'button-size-4-brand-1' }} />
```

###### Output

```html
<form class="form">
    ...
    <footer class="form_footer object">
        <input type="submit" class="form_submit button-size-4-brand-1" value="Sign Up">
    </footer>
</form>
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
            <td><code>string</code> | <code>object</code></td>
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
            <td>Array of <a href="#fielddraft">FieldDraft</a>'s to use when <code>type</code> is <code>fieldset</code>, or to pass to the <code>fieldset</code> parameter</td>
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

> An array of conditions which will determine whether or not the field is valid

* For a field to be valid, all conditions must return `true`

```js
{
    validate: [
        // The current field's value must be more than 3 characters
        field => field.value.length > 3,

        // `foo` and `bar` will dynamically fetch inputs with the
        // corresponding IDs of `foo` and `bar` - condition will test
        // whether the values for inputs `foo` and `bar` are equal
        (foo, bar) => foo.value === bar.value,

        // Set a custom error message
        {
            rule: field => field.value.length > 3,
            message: 'Must be more than 3 characters'
        }
    ]
}
```

#### FieldDraft.fieldset

> Create a child fieldset element

```js
{
    fieldset: {[...FieldDraft]}
}
```

#### FieldDraft.legend

> For use when `type` is `fieldset` or when using the `fieldset` parameter

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

> Insert content before or after the field group's content

```jsx
{
    before: <div class="alert">Alert Message</div>,
    after: <div class="alert">Alert Message</div>
}
```

#####  Conditional visiblity

```jsx
after: {
    id: 'freeSpamAlert',
    render: <div class="alert">You will receive free spam</div>,
    rules: [someCheckbox => someCheckbox.checked]
}
```

##### Custom attributes


```jsx
after: {
    render: <div class="alert">Alert Message</div>,
    className: 'object-small',
    ...
}
```