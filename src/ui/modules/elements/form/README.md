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
    <footer class="form_footer object">
        <input class="form_submit button" type="submit" value="Login">
    </footer>
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
            <td>Array of <a href="#fielddraftvalidate">validators</a> to apply</td>
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
* [Props.fields](#propsfields)
* [Props.submit](#propssubmit)

### Props.fields

> Array of [FieldDraft](#fielddraft)'s to render

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Array</code></td>
    </tr>
</table>

#### Basic Example

```jsx
const fields = [
    {
        type: 'text',
        label: 'Username'
    },
    {
        type: 'password',
        label: 'Password'
    }
];

<Form fields={fields} />
```

##### Output

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
    <footer class="form_footer object">
        <input class="form_submit button" type="submit" value="Submit">
    </footer>
</form>
```


#### With Input Icon

> `icon` value should correspond to a [FontAwesome icon name](http://fontawesome.io/icons/)

```jsx
const fields = [
    {
        type: 'text',
        icon: 'user',
        label: 'Username'
    },
    {
        type: 'password',
        icon: 'key',
        label: 'Password'
    }
];

<Form fields={fields} />
```

##### Output

```html
<form class="form">
    <div class="form_group-validate-has-icon">
        <div class="form_inputWrapper">
            <input class="form_input" type="text" id="username" required>
            <i class="form_icon fa fa-user"></i>
        </div>
        <label for="username" class="form_label">Username</label>
    </div>
    <div class="form_group-validate-has-icon">
        <div class="form_inputWrapper">
            <input class="form_input" type="password" id="userPassword" required>
            <i class="form_icon fa fa-key"></i>
        </div>
        <label for="userPassword" class="form_label">Password</label>
    </div>
    <footer class="form_footer object">
        <input class="form_submit button" type="submit" value="Submit">
    </footer>
</form>
```

#### With Fieldset Type

```jsx
const fields = [
    {
        type: 'fieldset',
        legend: 'Login',
        fields: [
            {
                type: 'text',
                label: 'Username'
            },
            {
                type: 'password',
                label: 'Password'
            }
        ]
    },
    {
        type: 'fieldset',
        ...
    }
];

<Form fields={fields} />
```

##### Output

```html
<form class="form object">
    <fieldset class="form_fieldset">
        <legend class="form_legend">Login</legend>
        <div class="form_group">
            <label class="form_label">Username</label>
            <div class="form_inputWrapper">
                <input class="form_input" type="text">
            </div>
        </div>
        <div class="form_group">
            <label class="form_label">Password</label>
            <div class="form_inputWrapper">
                <input class="form_input" type="password">
            </div>
        </div>
    </fieldset>
    <fieldset class="form_fieldset">
        ...
    </fieldset>
    <footer class="form_footer object">
        <input class="form_submit button" type="submit">
    </footer>
</form>
```

#### With Child Fieldset

```jsx
const fields = [
    {
        type: 'checkbox',
        label: 'Receive post',
        fieldset: {
            legend: 'Address',
            fields: [
                {
                    type: 'text',
                    label: 'Address Line 1'
                },
                {
                    type: 'text',
                    label: 'Address Line 2'
                },
                {
                    type: 'text',
                    label: 'City'
                },
                {
                    type: 'text',
                    label: 'Postcode'
                }
            ]
        }
    }
];

<Form fields={fields} />
```

##### Output

```html
<form class="form object">
    <div class="form_group">
        <div class="row">
            <div class="span va-middle">
                <input class="form_checkbox" type="checkbox">
            </div>
            <div class="span va-middle">
                <label class="form_label">Receive post</label>
            </div>
        </div>
        <fieldset class="form_fieldset">
            <legend class="form_legend">Address</legend>
            <div class="form_group">
                <label class="form_label">Address Line 1</label>
                <div class="form_inputWrapper">
                    <input class="form_input" type="text">
                </div>
            </div>
            <div class="form_group">
                <label class="form_label">Address Line 2</label>
                <div class="form_inputWrapper">
                    <input class="form_input" type="text">
                </div>
            </div>
            <div class="form_group">
                <label class="form_label">City</label>
                <div class="form_inputWrapper">
                    <input class="form_input" type="text">
                </div>
            </div>
            <div class="form_group">
            <label class="form_label">Postcode</label>
                <div class="form_inputWrapper">
                    <input class="form_input" type="text">
                </div>
            </div>
        </fieldset>
    </div>
    <footer class="form_footer object">
        <input class="form_submit button" type="submit">
    </footer>
</form>
```

#### With Validation

> If you are not using Ract, you can handle validation manually using the [`validate` interaction](#validate)

> See the [FieldDraft.validate section](#fielddraftvalidate) for more info

```jsx
const fields = [
    {
        type: 'fieldset',
        id: 'loginDetails',
        legend: 'Login Details',
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

#### With Display Rules

> If you are not using Ract, you can handle display rules manually using the [`setState` interaction](#setstate)

> See the [FieldDraft.rules section](#fielddraftrules) for more info

```jsx
const fields = [
    {
        type: 'checkbox',
        id: 'isHomeless',
        label: 'I\'m homeless',
        fieldset: {
            type: 'fieldset',
            legend: 'Address',
            id: 'address',
            fields: [
                ...
            ],
            // #Address fieldset will only be shown if
            // the #isHomeless checkbox is not checked
            // - i.e it will be hidden if it is checked
            rules: [isHomeless => !isHomeless.checked]
        }
    }
];

<Form fields={fields} />
```

### Props.submit

> To disable the submit button, set the value to `false`

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>String</code> | <code>Object</code></td>
    </tr>
    <tr>
        <td><b>Default</b></td>
        <td><code>Submit</code></td>
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
        <input class="form_submit button" type="submit" value="Sign Up">
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
        <input class="form_submit button-size-4-brand-1" type="submit" value="Sign Up">
    </footer>
</form>
```

## Representations

### FieldDraft

A FieldDraft is a JavaScript Object which represents a Form group.

* [FieldDraft.type](#fielddrafttype)
* [FieldDraft.label](#fielddraftlabel)
* [FieldDraft.legend](#fielddraftlegend)
* [FieldDraft.icon](#fielddrafticon)
* [FieldDraft.rules](#fielddraftrules)
* [FieldDraft.validate](#fielddraftvalidate)
* [FieldDraft.fieldset](#fielddraftfieldset)
* [FieldDraft.groupProps](#fielddraftgroupprops)
* [FieldDraft.before/FieldDraft.after](#fielddraftbeforefielddraftafter)

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
            <td>The <a href="#fielddrafttype">type</a> of Form group</td>
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
            <td><code>icon</code></td>
            <td><code>string</code></td>
            <td><a href="http://fontawesome.io/icons/">FontAwesome</a> icon name</td>
        </tr>
        <tr>
            <td><code>validate</code></td>
            <td><code>array</code></td>
            <td><a href="#fielddraftvalidate">Validator</a> conditions to determine whether the field should validate</td>
        </tr>
        <tr>
            <td><code>rules</code></td>
            <td><code>array</code></td>
            <td><a href="#fielddraftrules">Rules</a> to determine whether the field should be visible</td>
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
            <td><code>groupProps</code></td>
            <td><code>Object</code></td>
            <td>Properties to pass to the Form `group` Component</td>
        </tr>
        <tr>
            <td><code>Compound</code></td>
            <td><code>Bool</code></td>
            <td>If <code>true</code>, form group will has smaller top/bottom margin</td>
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

#### FieldDraft.icon

> Value should correspond to a [FontAwesome icon name](http://fontawesome.io/icons/)

```js
{
    icon: 'user'
}
```

##### Output

```html
<div class="form_group-has-icon">
    <label class="form_label" for="username">Username</label>
    <div class="form_inputWrapper">
        <input class="form_input" type="text" id="username" required>
        <i class="form_icon fa fa-user"></i>
    </div>
</div>
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

> For a field to be valid, all conditions must return `true`

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

#### FieldDraft.groupProps

```js
{
    groupProps: {
        className: 'well-border'
    }
}
```

##### Output

```js
<div class="form_group well-border">
    ...
</div>
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