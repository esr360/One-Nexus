# One-Nexus Form

<img width="750px" src="http://www.onenexus.io/github/Form.png" />

<table>
  <thead>
    <th><a href="#overview">Overview</a></th>
    <th><a href="#configuration">Configuration</a></th>
    <th><a href="#API">API</a></th>
  </thead>
  <tr>
    <td><li><a href="#TODO">Live CodeSandbox Demo</a></li></td>
    <td><li><a href="#default-configuration">Default Configuration</a></li></td>
    <td><li><a href="#todo"><code>FieldInterface</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#todo"><code>config.validateFieldsOn</code></a></li></td>
    <td><li><a href="#todo"><code>FieldObject</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#todo"><code>config.validColor</code></a></li></td>
    <td><li><a href="#todo"><code>props.fields</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#todo"><code>config.invalidColor</code></a></li></td>
    <td><li><a href="#todo"><code>props.submit</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td><li><a href="#todo"><code>Form.Field</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td><li><a href="#todo"><code>Form.Fieldset</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td><li><a href="#todo"><code>Form.ControlledElement</code></a></li></td>
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
<Module name='form'>
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

> Set the default user events that should trigger field validation

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>Array</code></td>
  </tr>
</table>

###### Specify For Individual Fields

@TODO

### `config.validColor` / `config.invalidColor`

> Set the field validation colors

<table>
  <tr>
    <td><b>Type</b></td>
    <td><code>String</code> (color)</td>
  </tr>
</table>

## API

* [`FieldInterface`](#todo)
* [`FieldObject`](#fieldobject)
* [`props.fields`](#todo)
* [`props.submit`](#todo)
* [`Form.Field`](#todo)
* [`Form.Fieldset`](#todo)
* [`Form.ControlledElement`](#todo)

### `FieldInterface`

The `FieldInterface` is the internal interace of a One-Nexus Form field/fieldset that is exposed when handling the field's behaviour.

<table>
  <thead>
    <th>Property</th>
    <th>Type</th>
    <th>Description</th>
  </thead>
  <tr>
    <td><code>node</code></td>
    <td><code>HTMLElement</code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>setIsValid</code></td>
    <td><code>Dispatch&lt;SetStateAction&lt;boolean>></code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>setErrorMessage</code></td>
    <td><code>Dispatch&lt;SetStateAction&lt;string>></code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>validators</code></td>
    <td><code><a href="#TODO">ValidatorsType</a></code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>onValidation</code></td>
    <td><code><a href="#TODO">OnValidationType</a></code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>validate</code></td>
    <td><code>(fields?: { [id: string]: FieldObject }) => void</code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>isValid</code></td>
    <td><code>(fields?: { [id: string]: FieldObject }) => boolean</code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>value</code></td>
    <td><code>() => string</code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>checked</code></td>
    <td><code>() => boolean</code></td>
    <td></td>
  </tr>
</table>

### `FieldObject`

The `FieldObject` is a list of properties available when creating One-Nexus Form fields and fieldsets.

###### Example `FieldObject` Representations

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
    <td><code>String</code></td>
    <td>Unique (relative to the form) identifier for the field</td>
  </tr>
  <tr>
    <td><code>type</code></td>
    <td><code>string(<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#%3Cinput%3E_types">HTMLInputElement.Attributes</a>)</code></td>
    <td>The type of HTML input to render</td>
  </tr>
  <tr>
    <td><code>label?</code></td>
    <td><code><a href="https://react-cn.github.io/react/docs/glossary.html#react-nodes">React.ReactNode</a></code></td>
    <td>The label for the field</td>
  </tr>
  <tr>
    <td><code>hidden?</code></td>
    <td><code>Boolean</code></td>
    <td>Hide the field visually so it can later be shown dynamically (not to be confused with the HTML <code>hidden</code> attribute)</td>
  </tr>
  <tr>
    <td><code>icon?</code></td>
    <td><code>String</code></td>
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
    <td><code>String</code></td>
    <td>Unique identifier (relative to the form) for grouping fields with a type of <code>radio</code> and <code>checkbox</code></td>
  </tr>
  <tr>
    <td><code>render?</code></td>
    <td><code><a href="https://react-cn.github.io/react/docs/glossary.html#react-nodes">React.ReactNode</a></code></td>
    <td>Content to render when type is <code>HTML</code></td>
  </tr>
  <tr>
    <td><code>after?</code></td>
    <td><code><a href="https://react-cn.github.io/react/docs/glossary.html#react-nodes">React.ReactNode</a></code></td>
    <td>Content to render after the field</td>
  </tr>
  <tr>
    <td><code>validateOn?</code></td>
    <td><code>Array&lt;'blur' | 'change'></code></td>
    <td>Control the events that should trigger the field's validators (defaults to <code><a href="#configvalidatefieldson">config.validateFieldsOn</a></code>)</td>
  </tr>
  <tr>
    <td><code>validators?</code></td>
    <td><code><a href="#TODO">ValidatorsType</a></code></td>
    <td>List of validators on which to validate the field</td>
  </tr>
  <tr>
    <td><code>onValidation?</code></td>
    <td><code><a href="#TODO">OnValidationType</a></code></td>
    <td>Callback function to execute whenever the field is validated (will be executed regardless of successul validation)</td>
  </tr>
  <tr>
    <td><code>visibility?</code></td>
    <td><code><a href="#TODO">VisibilityType</a></code></td>
    <td>List of rules to control the field's visibility (will be executed whenever <b>any</b> event is triggered on <b>any</b> field)</td>
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
    label: 'Password',
    id: 'userPassword',
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

#### Visibility

###### `VisibilityType`

```js
Array<(fields: { [id: string]: FieldObject }) => boolean>
```

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

You can have more control over the structure of your form by using the [`Form.Field`](#TODO), [`Form.Fieldset`](#TODO) and [`Form.ControlledElement`](#TODO) APIs (combined with JSX) instead of passing `props.fields`.

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
    <td><code>String</code></td>
  </tr>
</table>

```jsx
<Form fields={fields} submit='Login' />
```

> You can [manually construct your form's JSX](#manually-create-fieldsfieldsets) (including the submit button) and omit passing the `fields` and `submit` props

### `Form.Field`

The `<Form.Field>` Component is used as an alternative to passing [`props.fields`](#TODO)`<Form>`, should you need more control over the structure of the Form.

```jsx
<Form>
  <Form.Field type='text' id='username' label='Username' />
  <Form.Field type='password' id='password' label='Password' />

  ...
</Form>
```

#### Props

> `Form.Field` accepts any property from [`FieldObject`](#TODO) as a prop

### `Form.Fieldset`

The `<Form.Fieldset>` Component is used as an alternative to passing [`props.fields`](#TODO) to `<Form>`, should you need more control over the structure of the Form.

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
    <td><code><a href="https://react-cn.github.io/react/docs/glossary.html#react-nodes">React.ReactNode</a></code></td>
    <td>The Fieldset legend</td>
  </tr>
  <tr>
    <td><code>fields?</code></td>
    <td><code>Array&lt;<a href="#FieldObject">FieldObject</a>></code></td>
    <td>A list of fields/sub-fieldsets to use for the Fieldset</td>
  </tr>
  <tr>
    <td><code>id?</code></td>
    <td><code>String</code></td>
    <td>Unique (relative to the form) identifier for the field</td>
  </tr>
  <tr>
    <td><code>after?</code></td>
    <td><code><a href="https://react-cn.github.io/react/docs/glossary.html#react-nodes">React.ReactNode</a></code></td>
    <td>Content to render after the Fieldset</td>
  </tr>
</table>

### `Form.ControlledElement`

TODO
