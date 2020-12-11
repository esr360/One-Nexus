# One-Nexus Form

<img width="450px" src="https://edmundreed.com/projects/one-nexus/images/Form.png" />

<table>
  <thead>
    <th><a href="#overview">Overview</a></th>
    <th><a href="#configuration">Configuration</a></th>
    <th><a href="#API">API</a></th>
  </thead>
  <tr>
    <td><li><a href="#TODO">Live CodeSandbox Demo</a></li></td>
    <td><li><a href="#default-configuration">Default Configuration</a></li></td>
    <td><li><a href="#fieldinterface"><code>FieldInterface</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#configvalidatefieldson"><code>config.validateFieldsOn</code></a></li></td>
    <td><li><a href="#fieldobject"><code>FieldObject</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#configvalidcolor--configinvalidcolor"><code>config.validColor</code></a></li></td>
    <td><li><a href="#propsfields"><code>props.fields</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#configvalidcolor--configinvalidcolor"><code>config.invalidColor</code></a></li></td>
    <td><li><a href="#propssubmit"><code>props.submit</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td><li><a href="#formfield"><code>Form.Field</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td><li><a href="#formfieldset"><code>Form.Fieldset</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td><li><a href="#formcontrolledelement"><code>Form.ControlledElement</code></a></li></td>
  </tr>
</table>

## Overview

> [Learn more about One-Nexus Modules](https://github.com/esr360/One-Nexus/wiki/Modules)

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

###### Structural Interface [[?]](#TODO)

```jsx
<Module name='Form'>
  <Component name='group'>
    <Component name='label' />

    <Component name='field'>
      <Component name='input' />
    </Component>
  </Component>

  ...

  <Component name='footer'>
    <Component name='submit' />
  </Component>
</Module>
```

### [Live CodeSandbox Demo](#TODO)

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about Module configutation

### Default Configuration

> [`modules/elements/Form/assets/config.js`](assets/config.js)

<pre>
{
  name: 'Form',
  validateFieldsOn: ['blur', 'change'],
  validColor': colors.validation.valid,
  invalidColor': colors.validation.invalid,
  gutter: tokens.margin,

  label: {
    'color': typography.colors.base,
    'transition': tokens.transition
  },

  input: {
    'color': typography.colors.base,
    'border': '1px solid',
    'border-color': colors.greyscale['grey-3'],
    'padding': '0.75em',
    'transition': tokens.transition,
    'font-family': typography.typefaces.primary
  },

  select: {
    'color': typography.colors.base,
    'border': '1px solid',
    'border-color': colors.greyscale['grey-3'],
    'padding': '0.75em',
    'transition': tokens.transition,
    'font-family': typography.typefaces.primary
  },

  legend: {
    'margin-bottom': '1rem',
    'font-size': typography.sizes['size-4']
  },

  fieldset: {
    gutter: tokens.margin
  }
}
</pre>

### `config.validateFieldsOn`

> Set the default user events that should trigger inline field validation

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Array<'blur' | 'change'></code></td>
  </tr>
</table>

###### Override via Props

```jsx
<Form validateFieldsOn={['blur']}>
  ...
</Form>
```

###### Specify For Individual Fields

The behaviour can be controlled on a per-field basis by passing the [`validateOn`](#specify-for-individual-fields) property to the field:

```jsx
<Form>
  <Form.Field id='username' label='Username' validateOn={['blur']} validators={...} />

  ...
</Form>
```

```jsx
<Form fields={[
  {
    id: 'username',
    label: 'Username',
    validateOn: ['blur'],
    validators: ...
  },

  ...
]} />
```

###### Disable Inline Validation

To disable inline validation, pass an empty array as the value for `validateFieldsOn`:

```jsx
<Form validateFieldsOn={[]}>
  ...
</Form>
```

Or on a per-field basis:

```jsx
<Form>
  <Form.Field id='username' label='Username' validators={...} validateOn={[]}  />

  ...
</Form>
```

### `config.validColor` / `config.invalidColor`

> Set the field validation colors

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>string(color)</code></td>
  </tr>
</table>

## API

* [`FieldInterface`](#fieldinterface)
* [`FieldObject`](#fieldobject)
* [`props.fields`](#propsfields)
* [`props.submit`](#propssubmit)
* [`Form.Field`](#formfield)
* [`Form.Fieldset`](#formfieldset)
* [`Form.ControlledElement`](#formcontrolledelement)

### `FieldInterface`

The `FieldInterface` is the internal interace of a One-Nexus Form field that is exposed when handling the field's behaviour.

<table>
  <thead>
    <th>Property</th>
    <th>Type</th>
    <th>Description</th>
  </thead>
  <tr>
    <td><code>node</code></td>
    <td><code>HTMLElement</code></td>
    <td>The underlying HTML element/node of the field</td>
  </tr>
  <tr>
    <td><code>setIsValid</code></td>
    <td><code>Dispatch&lt;SetStateAction&lt;boolean>></code></td>
    <td>The internal <code>setIsValid</code> method to determine which modifer (<code>valid</code> or <code>invalid</code>) to apply to the field Component</td>
  </tr>
  <tr>
    <td><code>setErrorMessage</code></td>
    <td><code>Dispatch&lt;SetStateAction&lt;string>></code></td>
    <td>The internal <code>setErrorMessage</code> method to update the field's error message</td>
  </tr>
  <tr>
    <td><code>validators</code></td>
    <td><code><a href="#validatorstype">ValidatorsType</a></code></td>
    <td>The list of <a href="#validators">validators</a> passed when creating the field</td>
  </tr>
  <tr>
    <td><code>onValidation</code></td>
    <td><code><a href="#onvalidationtype">OnValidationType</a></code></td>
    <td>The <a href="#onvalidation"><code>onValidation</code></a> callback passed when creating the field</td>
  </tr>
  <tr>
    <td><code>isValid</code></td>
    <td><code>(fields:&nbsp;{&nbsp;[id:&nbsp;string]:&nbsp;<a href="#fieldobject">FieldObject</a>&nbsp;})&nbsp;=>&nbsp;boolean</code></td>
    <td>Determine if the field is valid (<code>fields</code> is only required if the field's validators depend on other fields, in which case only those fields need to be specified (via Object destruction))</td>
  </tr>
  <tr>
    <td><code>validate</code></td>
    <td><code>(fields:&nbsp;{&nbsp;[id:&nbsp;string]:&nbsp;<a href="#fieldobject">FieldObject</a>&nbsp;})&nbsp;=>&nbsp;void</code></td>
    <td>Calls <code>setIsValid</code> (based on the result of the validators), <code>setErrorMessage</code> (based on the first failing validator) and <code>onValidation</code></td>
  </tr>
  <tr>
    <td><code>value</code></td>
    <td><code>() => string</code></td>
    <td>Get the value of the input field</td>
  </tr>
  <tr>
    <td><code>checked</code></td>
    <td><code>() => boolean</code></td>
    <td>Determine whether a field with a type of <code>radio</code> or <code>checkbox</code> is checked</td>
  </tr>
</table>

### `FieldObject`

The `FieldObject` is a list of properties available when creating One-Nexus Form fields and fieldsets.

```jsx
<Form>
  <Form.Field property={value} />
  <Form.Field property={value} />
</Form>
```

```jsx
<Form fields={[
  {
    property: value
  },
  {
    property: value
  }
]} />
```

<table>
  <thead>
    <th>Property</th>
    <th>Type</th>
    <th>Description</th>
  </thead>
  <tr>
    <td><code>id</code></td>
    <td><code>string</code></td>
    <td>Unique (relative to the form) identifier for the field</td>
  </tr>
  <tr>
    <td><code>type</code></td>
    <td>
      <code>string(<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#%3Cinput%3E_types">HTMLInputElement.Types</a>) | 'fieldset'</code>
    </td>
    <td>The type of HTML input to render (or for specifying that the current collection defines a new fielset)</td>
  </tr>
  <tr>
    <td><code><a href="#fieldobjectlabel">label?</a></code></td>
    <td><code><a href="https://react-cn.github.io/react/docs/glossary.html#react-nodes">ReactNode</a></code></td>
    <td>The label for the field</td>
  </tr>
  <tr>
    <td><code><a href="#fieldobjectlegend">legend?</a></code></td>
    <td><code><a href="https://react-cn.github.io/react/docs/glossary.html#react-nodes">ReactNode</a></code></td>
    <td>When type is `fieldset`, this property allows you to specify a legend for the fieldset</td>
  </tr>
  <tr>
    <td><code>icon?</code></td>
    <td><code>string</code></td>
    <td>A glyph to pass to the <code>glyph</code> prop of the <code><a href="#TODO">&lt;Icon /></a></code> Module</td>
  </tr>
  <tr>
    <td><code>options?</code></td>
    <td><code>Array&lt;string(<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option#Attributes">HTMLOptionElement.Attributes</a>)></code></td>
    <td>List of dropdown options to use when type is <code>select</code></td>
  </tr>
  <tr>
    <td><code>fields?</code></td>
    <td><code>Array&lt;<a href="#FieldObject">FieldObject</a>></code></td>
    <td>A list of fields/sub-fieldsets to render when type is <code>fieldset</code></td>
  </tr>
  <tr>
    <td><code>group?</code></td>
    <td><code>string</code></td>
    <td>Unique identifier (relative to the form) for grouping fields with a type of <code>radio</code> and <code>checkbox</code></td>
  </tr>
  <tr>
    <td><code>render?</code></td>
    <td><code><a href="https://react-cn.github.io/react/docs/glossary.html#react-nodes">ReactNode</a></code></td>
    <td>Content to render when type is <code>HTML</code></td>
  </tr>
  <tr>
    <td><code>after?</code></td>
    <td><code>Object</code></td>
    <td>Content to render after the field (see <a href="#formcontrolledelement"><code>Form.ControlledElement</code> Props for available properties)</td>
  </tr>
  <tr>
    <td><code>validateOn?</code></td>
    <td><code>Array&lt;'blur' | 'change'></code></td>
    <td>Control the events that should trigger the field's validators (defaults to <code><a href="#configvalidatefieldson">config.validateFieldsOn</a></code>)</td>
  </tr>
  <tr>
    <td><code>validators?</code></td>
    <td><code><a href="#validatorstype">ValidatorsType</a></code></td>
    <td>List of validators on which to validate the field</td>
  </tr>
  <tr>
    <td><code>onValidation?</code></td>
    <td><code><a href="#onvalidationtype">OnValidationType</a></code></td>
    <td>Callback function to execute whenever the field is validated (will be executed regardless of successul validation)</td>
  </tr>
  <tr>
    <td><code>visible?</code></td>
    <td><code><a href="#visibletype">VisibleType</a></code></td>
    <td>List of rules to control the field's visibility (will be executed on load, and whenever <b>any</b> event is triggered on <b>any</b> field)</td>
  </tr>
</table>

#### Validators

###### `ValidatorsType`

```js
Array<{ rule: (value: string, fields: { [id: string]: FieldObject }) => boolean; message?: string }>
```

```js
Array<(value: string, fields: { [id: string]: FieldObject }) => boolean>
```

###### Example

```jsx
<Form fields={[
  {
    type: 'password',
    id: 'userPassword',
    label: 'Password',
    required: true,
    validators: [
      {
        rule: value => value.length > 8,
        message: 'Must be more than 8 characters'
      }
    ],
  },
  {
    type: 'password',
    id: 'passwordReEnter',
    label: 'Re-enter Password',
    required: true,
    validators: [
      {
        rule: (value, { userPassword }) => value === userPassword.value(),
        message: 'Passwords do not match'
      }
    ]
  }
]} />
```

#### OnValidation

###### `OnValidationType`

```js
(result: { value: string; isValid: boolean; message: string }, fields: { [id: string]: FieldObject }) => void
```

###### Example

```jsx
<Form fields={[
  {
    type: 'password',
    id: 'userPassword',
    label: 'Password',
    required: true,
    validators: [
      {
        rule: value => value.length > 8,
        message: 'Must be more than 8 characters'
      }
    ],
    onValidation: ({}, { passwordReEnter, userPassword }) => {
      // As passwordReEnter's validity depends on the value of userPassword,
      // we must re-validate passwordReEnter if it has previously been validated
      if (passwordReEnter.value().length) {
        passwordReEnter.validate({ userPassword });
      }
    },
  },
  {
    type: 'password',
    id: 'passwordReEnter',
    label: 'Re-enter Password',
    required: true,
    validators: [
      {
        rule: (value, { userPassword }) => value === userPassword.value(),
        message: 'Passwords do not match'
      }
    ]
  }
]} />
```

#### Visible

###### `VisibleType`

```js
Array<(fields: { [id: string]: FieldObject }) => boolean>
```

###### Example

```jsx
<Form fields={[
  {
    type: 'checkbox',
    id: 'freeSpam',
    label: 'I would like to receive free spam',
    after: {
      id: 'freeSpamAlert',
      render: <Alert>You will receive free spam</Alert>,
      visible: [({ freeSpam }) => freeSpam.checked()]
    }
  }
]} />
```

In order for a field to be `visible`, every function within the array must return `true`, otherwise the field will remain/become hidden. Fields with a `visible` property will be hidden by default unless all conditions within the `visible` array are `true` when the form loads.

#### `FieldObject.label`

This property will behave differently depending on whether you pass a String, or a [ReactElement](https://reactjs.org/docs/glossary.html#elements). To learn more, read the [Controlling HTML Output](#TODO) section of One-Nexus Modules page.

#### `FieldObject.legend`

This property will behave differently depending on whether you pass a String, or a [ReactElement](https://reactjs.org/docs/glossary.html#elements). To learn more, read the [Controlling HTML Output](#TODO) section of One-Nexus Modules page.

### `props.fields`

> A list of fields/fieldsets to use for the Form

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Array&lt;<a href="#FieldObject">FieldObject</a>></code></td>
  </tr>
</table>

```jsx
<Form fields={[
  {
    type: 'text',
    id: 'username',
    label: 'Username'
  },
  {
    type: 'password',
    id: 'password',
    label: 'Password'
  }
]} submit='Login' />
```

#### Manually Create Fields/Fieldsets

You can have more control over the structure of your form by using the [`Form.Field`](#formfield), [`Form.Fieldset`](#formfieldset) and [`Form.ControlledElement`](#formcontrolledelement) APIs (combined with JSX) instead of passing `props.fields`.

###### Basic Example

```jsx
<Form>
  <div>
    <Form.Field type='text' id='username' label='Username' />
  </div>

  <div>
    <Form.Field type='password' id='password' label='Password' />
  </div>

  <div>
    <Button type='submit'>Login</Button>
  </div>
</Form>
```

### `props.submit`

> The value to use for the Form's `submit` button

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>string</code></td>
  </tr>
</table>

```jsx
<Form fields={fields} submit='Login' />
```

> You can [manually construct your form's JSX](#manually-create-fieldsfieldsets) (including the submit button) and omit passing the `fields` and `submit` props

### `Form.Field`

The `<Form.Field>` Component is used as an alternative to passing [`props.fields`](#propsfields) to `<Form>`, should you need more control over the structure of the Form.

```jsx
<Form>
  <div>
    <Form.Field type='text' id='username' label='Username' />
  </div>

  <div>
    <Form.Field type='password' id='password' label='Password' />
  </div>

  ...
</Form>
```

#### Props

> `Form.Field` accepts any property from [`FieldObject`](#fieldobject) as a prop

### `Form.Fieldset`

The `<Form.Fieldset>` Component is used as an alternative to passing [`props.fields`](#propsfields) to `<Form>`, should you need more control over the structure of the Form.

```jsx
<Form>
  <Form.Fieldset legend='Your Details'>
    <Form.Field type='text' id='firstName' label='First Name' />
    <Form.Field type='text' id='lastName' label='Last Name' />
    <Form.Field type='email' id='email' label='Email Address' />
  </Form.Fieldset>

  ...
</Form>
```

#### Props

<table>
  <thead>
    <th>Property</th>
    <th>Type</th>
    <th>Description</th>
  </thead>
  <tr>
    <td><code>legend?</code></td>
    <td><code><a href="https://react-cn.github.io/react/docs/glossary.html#react-nodes">ReactNode</a></code></td>
    <td>The Fieldset legend</td>
  </tr>
  <tr>
    <td><code>fields?</code></td>
    <td><code>Array&lt;<a href="#FieldObject">FieldObject</a>></code></td>
    <td>A list of fields/sub-fieldsets to use for the Fieldset</td>
  </tr>
  <tr>
    <td><code>id?</code></td>
    <td><code>string</code></td>
    <td>Unique (relative to the form) identifier for the field</td>
  </tr>
  <tr>
    <td><code>after?</code></td>
    <td><code>Object</code></td>
    <td>Content to render after the Fieldset (see <a href="#formcontrolledelement"><code>Form.ControlledElement</code> Props for available properties)</td>
  </tr>
  <tr>
    <td><code>...</code></td>
    <td></td>
    <td><a href="#formcontrolledelement">Any <code>Form.ControlledElement</code> Prop</a></td>
  </tr>
</table>

### `Form.ControlledElement`

A "controlled element" in this context means an element whose visibility is (typically) dynamically determined/controlled by one or more fields within the Form (but not always). All fields within a Form are controlled elements, as are all fieldsets and elements created by the `after` `FieldObject` property (you may notice that any element/object that accepts an `id` prop corresponds to a controlled element). This allows you to easily hide and show fields and other content within the Form.

If you are [manually constructing the Form's JSX](#manually-create-fieldsfieldsets) you can use `Form.ControlledElement` to create dynamically visible content.

```jsx
const showSomeWarning = ({ somethingDangerous }) => somethingDangerous.checked();

const Form = (
  <Form>
      <Form.Field type='checkbox' id='somethingDangerous' label='I too like to live dangerously' />

      <Form.ControlledElement id='someWarning' visible={[showSomeWarning]}>
        This is some custom content that is hidden by default; it will become visible 
        when the `somethingDangerous` checkbox is checked
      </Form.ControlledElement>

      <Button type='submit'>Submit</Button>
  </Form>
);
```

#### Props

<table>
  <thead>
    <th>Property</th>
    <th>Type</th>
    <th>Description</th>
  </thead>
  <tr>
    <td><code>id</code></td>
    <td><code>string</code></td>
    <td>Unique (relative to the form) identifier for the element</td>
  </tr>
  <tr>
    <td><code>visible?</code></td>
    <td><code><a href="#visibletype">VisibleType</a></code></td>
    <td>List of rules to control the element's visibility (will be executed on load, and whenever <b>any</b> event is triggered on <b>any</b> field)</td>
  </tr>
  <tr>
    <td><code>render?</code></td>
    <td><code><a href="https://react-cn.github.io/react/docs/glossary.html#react-nodes">ReactNode</a></code></td>
    <td>Content to render instead of <code>props.children</code></td>
  </tr>
  <tr>
    <td><code>tag</code></td>
    <td>
      <code>string(<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">HTMLElement</a>)</code>&nbsp;|&nbsp;<code><a href="https://react-cn.github.io/react/docs/glossary.html#react-components">ReactComponent</a></code>
    </td>
    <td>The underlying HTML Element or React Component to render (defaults to <code>div</code>)</td>
  </tr>
</table>
