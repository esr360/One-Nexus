# One-Nexus Accordion

* [About]()
* [Configuration]()
* [Styles]()
* [Interactions]()
* [Rendering]()

## About

### Components

* content
* section
* title
* toggle

### Modifiers

* keepOpen

### Quick Look

```jsx
<app.Accordion panels={[
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'}
]} />
```

```html
<div class="accordion">
    <div class="accordion_section">
        <div class="accordion_title">foo</div>
        <div class="accordion_content">bar</div>
    </div>
    <div class="accordion_section">
        <div class="accordion_title">fizz</div>
        <div class="accordion_content">buzz</div>
    </div>
</div>
```

### Options

<table class="table">
    <thead>
        <tr>
            <th>Option</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>The name used when generating the CSS selector</td>
        </tr>
    </tbody>
</table>


```json
{
    "app": {
        "accordions": {}
    }
}
```

#### API

##### Open/Close

You can open or close specific sections of an accordion by using either the `.open()` or `.close()` methods.

```js
// Opens all sections of accordion with ID 'foo'
app.accordion(document.getElementById('foo')).open();

// Opens first section of accordion with ID 'foo'
app.accordion(document.getElementById('foo')).open(1);

// Opens first section of all accordions
app.accordion().open(1);

// Opens all sections with class 'foo' for all accordions
app.accordion().open(document.querySelectorAll('.foo'));

// Opens all sections with class 'foo' for all accordions
app.accordion().open('.foo');
```

### Examples

#### Open by Default

Add the `active` class to any sections you wish to be open by default.

```html
<div class="accordion">
    <div class="accordion_section active">
        ...
    </div>
    <div class="accordion_section">
        ...
    </div>
</div>
```

#### Multiple Open Sections

To allow accordions to have multiple open sections simultaneously, add the `keepOpen` modifier to the target accordion:

```html
<div class="accordion-keepOpen">
    <div class="accordion_section">
        ...
    </div>
    <div class="accordion_section">
        ...
    </div>
</div>
```