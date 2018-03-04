# One-Nexus Accordion

* [About]()
* [Configuration]()
* [Styles]()
* [Interactions]()
* [Rendering]()
* [Examples]()

## About

### Components

* content
* section
* title
* toggle

### Modifiers

* keepOpen

### Quick Look

###### React

```jsx
<Accordion panels={[
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'}
]} />
```

###### HTML

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

## Configuration

> [Learn more]() about module configutation

```json
{
    "accordion": {
        "name": "accordion",
        "section": {
            "vertical-rhythm": 0
        },
        "title": {
            "background": "transparent",
            "color": ["#CORE", "text-color"],
            "border": "1px solid rgba(black, 0.15)",
            "border-radius": 0,
            "padding": "1em",
            "transition": ["#CORE", "transition"],
            "hover": {
                "background": ["#COLOR", "brand", "brand-1"],
                "color": ["#COLOR", "greyscale", "white"],
                "component('toggle')": {
                    "color": ["#COLOR", "greyscale", "white"]
                }
            },
            "active": {
                "background": ["#COLOR", "brand", "brand-1"],
                "color": ["#COLOR", "greyscale", "white"],
                "border-color": "transparent",
                "border-radius": 0,
                "component('toggle')": {
                    "color": ["#COLOR", "greyscale", "white"]
                }
            }
        },
        "content": {
            "background": ["#COLOR", "greyscale", "white"],
            "color": ["#CORE", "text-color"],
            "border": "1px solid rgba(black, 0.15)",
            "border-radius": 0,
            "padding": "1.5em"
        },
        "toggle": {
            "color": ["#COLOR", "opaque", "dark-4"]
        },
        "animationSpeed": 400,
        "keepOpenModifier": "keepOpen"
    }
}
```

## Styles

## Interactions

> [Learn more]() about module interactions

* [Toggle]()
* [Open]()
* [Close]()

### Toggle

> Toggle one or more sections of an accordion

```js
UI.accordion(parent).toggle(target, type);
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
            <td>Parent</td>
            <td><a href="#">Synergy selector</a></td>
            <td>The accordion on which to toggle sections</td>
        </tr>
        <tr>
            <td>Target</td>
            <td>(String | Number | HTMLElement | NodeList)</td>
            <td>The target section(s) to toggle</td>
        </tr>
        <tr>
            <td>Type (optional)</td>
            <td>('open' | 'close')</td>
            <td>The type of toggle to perform</td>
        </tr>
    </tbody>
</table>

> `type` will dynamically be determined if not passed

#### Examples

```js
// Toggle first section of accordion with ID 'foo'
UI.accordion(document.getElementById('foo')).toggle(1);

// Toggle section with ID 'bar' on accordion with ID 'foo'
UI.accordion(document.getElementById('foo')).toggle(document.getElementById('bar'));

// Toggle sections with class 'foo' on accordion with ID 'foo'
UI.accordion(document.getElementById('foo')).toggle('.foo');

// Toggle first section of all accordions
UI.accordion().toggle(1);

// Open first section of all accordions
UI.accordion().toggle(1, 'open');

// Close second section of accordion with ID 'foo'
UI.accordion('#foo').toggle(2, 'close');
```

### Open

> Open one or more sections of an accordion

```js
// Opens all sections of accordion with ID 'foo'
UI.accordion(document.getElementById('foo')).open();

// Opens first section of accordion with ID 'foo'
UI.accordion(document.getElementById('foo')).open(1);

// Opens first section of all accordions
UI.accordion().open(1);

// Opens all sections with class 'foo' for all accordions
UI.accordion().open(document.querySelectorAll('.foo'));

// Opens all sections with class 'foo' for all accordions
UI.accordion().open('.foo');
```

### Close

> Close one or more sections of an accordion

```js
// Closes all sections of accordion with ID 'foo'
UI.accordion(document.getElementById('foo')).close();

// Closes first section of accordion with ID 'foo'
UI.accordion(document.getElementById('foo')).close(1);
```

## Rendering

## Examples

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