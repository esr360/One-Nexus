# One-Nexus Form

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)
* [Representations](#representations)

## Overview

### Quick Look

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
    </tbody>
</table>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "form": {
        "name": "form",
        "methods": ["setState", "validate"],
        "label": {
            "transition": ["#CORE", "transition"]
        },
        "input": {
            "color": ["#CORE", "text-color"],
            "border": "1px solid",
            "border-color": ["#COLOR", "greyscale", "grey-3"],
            "padding": "0.75em",
            "transition": ["#CORE", "transition"],
            "font-family": ["#CORE", "font-family"]
        },
        "select": {
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

Pass custom options to the `form` object in your theme's config file (e.g. [ui/themes/one_nexus.json](../../../themes/one_nexus.json)):

```js
{
    "theme": {
        "form": {
            ...
        }
    }
}
```

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Interactions

> Module interactions are applied by default within the module's `.jsx` file ([learn more](https://github.com/esr360/One-Nexus/wiki/Module-interactions))

* [setState](#setstate)
* [validate](#validate)

> Interactions are defined in [ui/modules/elements/form/form.js](../../../modules/elements/form/form.js)

### setState

> Show/hide form fields based on specified rulesets

```js
Form.setState(fields);
```

> [Jump to module's application of this interaction](#with-display-rules)

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

> This object would be part of the [`fields` prop](#propsfields)

```js
{
    type: 'checkbox',
    id: 'isHomeless',
    label: 'I`m homeless',
    fieldset: {
        type: 'fieldset',
        legend: 'Address',
        id: 'address',
        fields: [
            ...
        ]
    }
}
```

> Hide the `Address` fieldset if the `isHomeless` checkbox is checked

```js
Form.setState([
    {
        id: 'address',
        rules: [isHomeless => !isHomeless.checked]
    }
]);
```

The above is syntactic sugar for:

```js
Form.setState([
    {
        id: 'address',
        rules: [!document.getElementById('isHomeless').checked]
    }
]);
```

### validate

> Determine if a field is valid

```js
Form.validate(field, validators, callback[isValid, field, message]);
```

> [Jump to module's application of this interaction](#with-validation)

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

> This object would be part of the [`fields` prop](#propsfields)

```js
{
    type: 'password',
    label: 'Password',
    id: 'userPassword',
    required: true
},
{
    type: 'password',
    id: 'passwordReEnter',
    label: 'Re-enter Password',
    required: true
}
```

```js
function callback(isValid, field, errorMessage) {
    if (!isValid) {
        field.classList.add('invalid');

        alert(errorMessage);
    }
}
```

```js
Form.validate('passwordReEnter', [
    {
        rule: (userPassword, passwordReEnter) => passwordReEnter.value === userPassword.value,
        message: 'Passwords do not match'
    }
], callback);
```

The above is syntactic sugar for:

```js
Form.validate(document.getElementById('passwordReEnter'), [
    {
        rule: document.getElementById('passwordReEnter').value === document.getElementById('userPassword').value,
        message: 'Passwords do not match'
    }
], callback);
```

## Rendering

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

###### Using `<Form>` Tag

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

###### Custom Build

```jsx
<Module name='form'>
    <Component name='group' validate>
        <Component name='label'>Username</Component>
        <Component name='field'>
            <Component name='input' required type='text' id='username' />
        </Component>
    </Component>

    <Component name='group' validate>
        <Component name='label'>Password</Component>
        <Component name='field'>
            <Component name='input' required type='password' id='userPassword' />
        </Component>
    </Component>

    <Component name='footer' object>
        <Component name='submit' Button type='submit' value='Login' tag='input' />
    </Component>
</Module>
```

###### API

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [Props.fields](#propsfields)
* [Props.submit](#propssubmit)
* [Props.setState](#propssetState)
* [Props.validate](#propsvalidate)

### Props.fields

> Array of [FieldDraft](#fielddraft)'s to render

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Array</code></td>
    </tr>
</table>

* [Basic Example](#basic-example)
* [With Input Icon](#with-input-icon)
* [With Fieldset Type](#with-fieldset-type)
* [With Child Fieldset](#with-child-fieldset)
* [With Validation](#with-validation)
* [With Display Rules](#with-display-rules)

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

#### With Validation

> See the [FieldDraft.validate section](#fielddraftvalidate) for more info

The validation rules for each field get called whenever there is:

* an `onClick` event triggered by form's submit button
* an `onFocus` event triggered by one of the form's fields
* an `onKeyUp` event triggered by one of the form's fields
* an `onChange` event triggered by one of the form's radio, checkbox or select elements
* the page is loaded/refreshed

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

> See the [FieldDraft.rules section](#fielddraftrules) for more info

The field rules for each field will be called when:

* a `keyUp` event triggered by one of the form's fields
* an `onChange` event triggered by one of the form's radio, checkbox or select elements
* the page is loaded/refreshed

```jsx
const fields = [
    {
        type: 'checkbox',
        id: 'isHomeless',
        label: 'I`m homeless',
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

> To suppress the submit button's render, set the value to `false`

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

#### With Custom Attributes

> Properties will be passed as `props` to the [`<Component>`](#TODO) which renders the submit element

```jsx
<Form fields={...} submit={{ text: 'Sign Up', Button: ['size-4', 'brand-1'] }} />
```

The above is syntactic sugar for the [`<Button>` module](https://github.com/esr360/One-Nexus/tree/refactor/src/ui/modules/elements/button):

```jsx
<Form fields={...} submit={{ text: 'Sign Up', className: 'button-size-4-brand-1' }} />
```

```jsx
<Form fields={...} submit={{ text: 'Sign Up', onClick: e => {
    e.preventDefault();

    // handle form submission...
}}} />
```

### Props.setState

> Overwrite the default `setState` method

This method gets called whenever there is:

* a `keyUp` event triggered by one of the form's fields
* an `onChange` event triggered by one of the form's radio, checkbox or select elements
* the page is loaded/refreshed

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Function</code></td>
    </tr>
    <tr>
        <td><b>Default</b></td>
        <td><a href="#toggle"><code>interactions.setState</code></a></td>
    </tr>
</table>

```jsx
<Form fields={fields} setState={fields => {
    // manually handle state of fields
}} />
```

You can import and call the setState interaction manually:

```jsx
import { setState } from '../../form/form.js';
```

```jsx
<Form fields={fields} setState={fields => setState(fields)} />
```

### Props.validate

> Overwrite the default `validate` method

This method gets called whenever there is:

* an `onClick` event triggered by form's submit button
* an `onFocus` event triggered by one of the form's fields
* an `onKeyUp` event triggered by one of the form's fields
* an `onChange` event triggered by one of the form's radio, checkbox or select elements
* the page is loaded/refreshed

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Function</code></td>
    </tr>
    <tr>
        <td><b>Default</b></td>
        <td><a href="#toggle"><code>interactions.validate</code></a></td>
    </tr>
</table>

> See the [Field-Draft](#fielddraft) section for more information 

```js
const fields = [
    {
        type: 'text',
        label: 'Username',
        id: 'username',
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
        validate: [
            {
                rule: field => field.value.length > 8,
                message: 'Must be more than 8 characters'
            }
        ]
    }
];

const validate = (field, rules) => {
    rules.forEach(rule => {
        if (!rule.rule(document.getElementById(field))) {
            console.log(rule.message);
        }
    });
}
```

```jsx
<Form fields={fields} validate={validate} />
```

You can import and call the validate interaction manually:

```jsx
import { validate } from '../../form/form.js';
```

```jsx
<Form fields={fields} validate={(field, rules) => validate(field, rules)} />
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
* [FieldDraft.compound](#fielddraftcompound)
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
            <td>The group's <a href="#fielddraftlegend">legend</a> if <code>type</code> is <code>'fieldset'</code></td>
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
            <td>Add a child fieldset (see <a href="#fielddraftfieldset">FieldDraft.fieldset</a>)</td>
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
            <td>HTML/JSX to insert before the group's field(s) (see <a href="#fielddraftbeforefielddraftafter">FieldDraft.before</a>)</td>
        </tr>
        <tr>
            <td><code>after</code></td>
            <td>object</td>
            <td>HTML/JSX to insert after the group's field(s) (see <a href="#fielddraftbeforefielddraftafter">FieldDraft.after</a>)</td>
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

> Properties will be passed as `props` to the [`<Component>`](#TODO) which renders the label element

```js
{
    label: {
        title: 'Field label',
        Heading: 'size-4',
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

> Properties will be passed as `props` to the [`<Component>`](#TODO) which renders the legend element

```js
{
    legend: {
        title: 'Legend title',
        Heading: 'size-4',
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

##### Sample Output

```html
<div class="form_group-has-icon">
    <label class="form_label" for="username">Username</label>
    <div class="form_field">
        <input class="form_input" type="text" id="username">
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
        // The field's value must be more than 3 characters
        field => field.value.length > 3,

        // `foo` and `bar` will dynamically fetch inputs with the
        // corresponding IDs of `foo` and `bar` - condition will test
        // whether the values for inputs `foo` and `bar` are equal
        (foo, bar) => foo.value === bar.value,

        // Set a custom error message
        {
            rule: field => field.value.length > 3,
            message: 'Must be more than 3 characters'
        },
        {
            rule: (foo, bar) => foo.value === bar.value,
            message: 'Passwords do not match'
        }
    ]
}
```

#### FieldDraft.fieldset

> Create a child fieldset element

```js
{
    fieldset: {...FieldDraft}
}
```

#### FieldDraft.compound

> Create tighter form groups

```js
{
    compound: true
}
```

##### Sample Output

```html
<div class="form_group-compound">
    <input type="text" class="form_input" placeholder="Username">
</div>
<div class="form_group-compound">
    <input type="password" class="form_input" placeholder="••••••••">
</div>
```

#### FieldDraft.groupProps

> Properties will be passed as `props` to the [`<Component>`](#TODO) which renders the group element

```js
{
    groupProps: {
        Well: 'border'
    }
}
```

The above is syntactic sugar for the [`<Well>` module](https://github.com/esr360/One-Nexus/tree/refactor/src/ui/modules/elements/well):

```js
{
    groupProps: {
        className: 'well-border'
    }
}
```

##### Sample Output

```html
<div class="form_group well-border">
    ...
</div>
```

#### FieldDraft.before/FieldDraft.after

> Insert content before or after the field group's content

```jsx
{
    before: <Alert>Alert Message</Alert>,
    after: <Alert>Alert Message</Alert>
}
```

#####  Conditional visiblity

```jsx
after: {
    id: 'freeSpamAlert',
    render: <Alert info>You will receive free spam</Alert>,
    rules: [someCheckbox => someCheckbox.checked]
}
```

##### Custom attributes

> Properties will be passed as `props` to the [`<Component>`](#TODO) which renders the `before`/`after` content

```jsx
after: {
    render: <Alert>Alert Message</Alert>,
    className: 'object-small',
    ...
}
```