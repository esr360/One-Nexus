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
    <td><li><a href="#propspanels"><code>props.fields</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#configpersist"><code>config.validateFieldsOn</code></a></li></td>
    <td><li><a href="#propspanels"><code>props.submit</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#configpersist"><code>config.validColor</code></a></li></td>
    <td><li><a href="#propspanels"><code>Form.Field</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td><li><a href="#configpersist"><code>config.invalidColor</code></a></li></td>
    <td><li><a href="#propspanels"><code>Form.Fieldset</code></a></li></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td><li><a href="#propspanels"><code>Form.ControlledElement</code></a></li></td>
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

* [`props.fields`](#propspanels)
* [`props.submit`](#propspanels)
* [`Form.Field`](#propspanels)
* [`Form.Fieldset`](#propspanels)
* [`Form.ControlledElement`](#propspanels)

### `props.fields`

* [`FieldObject`](#FieldObject)
* [Manually Create Fields/Fieldsets](#TODO)

> An array of fields/fieldsets to base your Form on

<table>
  <tr>
    <td><b>Type</b></td>
    <td>
      <code>Array&lt;<a href="#FieldObject">FieldObject</a>></code>
    </td>
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

#### `FieldObject`

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
    <td><code>label</code></td>
    <td><code><a href="https://react-cn.github.io/react/docs/glossary.html#react-nodes">React.ReactNode</a></code></td>
    <td>The label for the field</td>
  </tr>
  <tr>
    <td><code>type</code></td>
    <td><code>String</code></td>
    <td>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#%3Cinput%3E_types">type of HTML input</a> to render</td>
  </tr>
  <tr>
    <td><code>hidden</code></td>
    <td><code>Boolean</code></td>
    <td>Hide the field visually so it can later be shown dynamically (not to be confused with the HTML <code>hidden</code> attribute)</td>
  </tr>
  <tr>
    <td><code>icon</code></td>
    <td><code>String</code></td>
    <td>A glyph to pass to the <code>glyph</code> prop of the <code><a href="#TODO">&lt;Icon /></a></code> Module</td>
  </tr>
  <tr>
    <td><code>options</code></td>
    <td><code>Array&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option#Attributes">HTMLOptionElement.Attributes</a>></code></td>
    <td>List of dropdown options to use when type is <code>select</code></td>
  </tr>
  <tr>
    <td><code>group</code></td>
    <td><code>String</code></td>
    <td>Unique identifier (relative to the form) for grouping fields with a type of <code>radio</code> and <code>checkbox</code></td>
  </tr>
  <tr>
    <td><code>render</code></td>
    <td><code><a href="https://react-cn.github.io/react/docs/glossary.html#react-nodes">React.ReactNode</a></code></td>
    <td>Content to render when type is <code>HTML</code></td>
  </tr>
  <tr>
    <td><code>after</code></td>
    <td><code><a href="https://react-cn.github.io/react/docs/glossary.html#react-nodes">React.ReactNode</a></code></td>
    <td>Content to render after the field</td>
  </tr>
  <tr>
    <td><code>validators</code></td>
    <td><code><a href="#TODO">ValidatorsType</a></code></td>
    <td>List of validators on which to validate the field</td>
  </tr>
  <tr>
    <td><code>validateOn</code></td>
    <td><code>Array&lt;'blur' | 'change'></code></td>
    <td>Control the events that should trigger the field's validators</td>
  </tr>
  <tr>
    <td><code>onValidation</code></td>
    <td><code><a href="#TODO">onValidationType</a></code></td>
    <td>Callback function to execute whenever the field is validated (will be executed regardless of successul validation)</td>
  </tr>
  <tr>
    <td><code>visibility</code></td>
    <td><code><a href="#TODO">VisibilityType</a></code></td>
    <td>List of rules to control the field's visibility (will be executed whenever <b>any</b> event is triggered on <b>any</b> field)</td>
  </tr>
</table>

###### `VisibilityType`

```js
Array<formFields => boolean>
```

###### `ValidatorsType`

```js
Array<{ rule: (value: string, formFields: Array<FieldObject>) => boolean, message: string }>
```

###### `onValidationType`

```js
(result: { value: string; isValid: boolean; message: string }, formFields: Array<FieldObject>) => void
```

#### Manually Create Fields/Fieldsets

You can have more control over the structure of your form's fields/fieldsets by using the [`Form.Field`](#TODO), [`Form.Fieldset`](#TODO) and [`Form.ControlledElement`](#TODO) APIs.

###### Basic Example

```jsx
<Form>
  <Form.Field type='text' id='username' label='Username' />
  <Form.Field type='password' id='password' label='Password' />

  <Button type='submit'>Login</Button>
</Form>
```

### `props.submit`

TODO

### `Form.Field`

<table>
  <tr>
    <td><b>Type</b></td>
    <td>
      <code>
        Array&lt;{ 
          <a href="#paneltitle">title</a>, 
          <a href="#panelcontent">content</a>, 
          <a href="#panelid">id</a>, 
          <a href="#panelactive">active</a>, 
          <a href="#panelcallback">callback</a> 
        }>
      </code>
    </td>
  </tr>
</table>

### `Form.Fieldset`

TODO

### `Form.ControlledElement`

TODO
