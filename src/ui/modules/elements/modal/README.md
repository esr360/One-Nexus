# One-Nexus Modal

> [Use outside of One-Nexus](#TODO)

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [React Rendering](#reactrendering)
* [HTML Rendering](#html-rendering)

## Overview

### Quick Look

###### React

```jsx
<Modal trigger={<div>Modal Trigger</div>}>
    Modal Content
</Modal>
```

###### HTML

```html
<div data-modal-target="demo_modal">Modal Trigger</div>

<div id="demo_modal" class="modal-animate-top">
    <div class="modal_close">×</div>
    <div class="modal_content">Modal Content</div>
</div>
```

### Components

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Components) about components

* close
* content

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
            <td><code>animate-{top|bottom|left|right|zoom}</code></td>
            <td>Applies transition animation to the modal</td>
        </tr>
        <tr>
            <td><code>visible</code></td>
            <td>Shows the modal</td>
        </tr>
    </tbody>
</table>

## Configuration

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-Configuration) about module configutation

```json
{
    "modal": {
        "name": "modal",
        "methods": ["show", "hide", "toggle"],
        "dafault-animation": "left",
        "background": ["#COLOR", "greyscale", "grey-1"],
        "color": ["#CORE", "text-color"],
        "width": "650px",
        "border-radius": 0,
        "transition": ["#CORE", "transition"],
        "z-index": 14,
        "top-position": "50%",
        "content": {
            "padding": "2em"
        },
        "close": {
            "-icon": {
                "font-size": ["#FONT-SIZE", "size-6"],
                "top": "1rem",
                "right": "1rem",
                "color": ["#COLOR", "greyscale", "grey-3"],
                "transition": ["#CORE", "transition"],
                "hover": {
                    "color": ["#COLOR", "brand", "brand-1"]
                }
            }
        },
        "overlay": {
            "module": "overlay",
            "enabled": true,
            "clickToClose": true,
            "background": "rgba(black, 0.4)",
            "z-index": 12
        }
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
            <td><code>default-animation</code></td>
            <td>The default animation transition to apply to modals</td>
        </tr>
        <tr>
            <td><code>overlay.module</code></td>
            <td>The name of the module to be used at the page overlay when a modal is visible</td>
        </tr>
        <tr>
            <td><code>overlay.enabled</code></td>
            <td>Enable the page overlay when a modal is shown</td>
        </tr>
        <tr>
            <td><code>overlay.clickToClose</code></td>
            <td>Enable the modal to be closed by clicking the overlay</td>
        </tr>
    </tbody>
</table>

Pass custom options to the `modal` object in your theme's config file (e.g. [ui/themes/One-Nexus/theme.json](../../../themes/One-Nexus/theme.json)):

```js
{
    "app": {
        "modal": {
            ...
        }
    }
}
```

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Interactions

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Module-interactions) about module interactions

* [Toggle](#toggle)
* [Show](#show)
* [Hide](#hide)

> Interactions are defined in [ui/modules/elements/modal/modal.js](../../../modules/elements/modal/modal.js)

### Toggle

> Toggle a modal

```js
UI.modal(target).toggle();
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
            <td>Target</td>
            <td>(querySelector|HTMLElement)</td>
            <td>The target modal to toggle</td>
        </tr>
    </tbody>
</table>

#### Examples

```js
// Toggle modal with ID 'foo'
UI.modal('#foo').toggle();

// Toggle modal with ID 'foo'
UI.modal(document.getElementById('foo')).toggle();
```

### Show

> Show a modal

```js
UI.modal(target).show();
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
            <td>Target</td>
            <td>(querySelector|HTMLElement)</td>
            <td>The target modal to show</td>
        </tr>
    </tbody>
</table>

#### Examples

```js
// Show modal with ID 'foo'
UI.modal('#foo').show();

// Show modal with ID 'foo'
UI.modal(document.getElementById('foo')).show();
```

### Hide

> Hide a modal

```js
UI.modal(target).hide();
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
            <td>Target</td>
            <td>(querySelector|HTMLElement)</td>
            <td>The target modal to hide</td>
        </tr>
    </tbody>
</table>

#### Examples

```js
// Hide modal with ID 'foo'
UI.modal('#foo').hide();

// Hide modal with ID 'foo'
UI.modal(document.getElementById('foo')).hide();
```

## React Rendering

* [Static Methods](#TODO)
* [Raw Module](#TODO)
* [Props](#TODO)

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

```jsx
<Modal trigger={<Button>Open Modal</Button>}>
    Modal Content
</Modal>
```

### Static Medthods

> [Learn More](#TODO) About rendering modules using their static methods

```jsx
<Modal trigger={<Button>Open Modal</Button>}>
    <Modal.close modifiers={['icon']}>×</Modal.close>
    <Modal.content>
        Modal Content
    </Modal.content>
</Modal>
```

### Raw Module (without using `Modal.jsx`)

```jsx
<Module name='modal' before={<Button onClick={() => UI.modal(this.parent).open()}>Open Modal</Button>}>
    <Component name='close' icon onClick={() => UI.modal(this).close()}>×</Component>
    <Component name='content'>
        Modal Content
    </Component>
</Module>
```

### Props

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [Props.content](#TODO)
* [Props.trigger](#TODO)
* [Props.close](#TODO)
* [Props.animate](#TODO)

#### Props.content

> Pass content via the `content` prop instead of passing as children

```jsx
<Modal trigger={<Button>Open Modal</Button>} content='Modal Content' />
```

#### Props.trigger

<table>
    <tr>
        <td><b>Type</b></td>
        <td>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll">
                <code>querySelectorall</code>
            </a> ||
            <a href="https://reactjs.org/docs/glossary.html#elements"><code>React Element</code></a>
        </td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>The element(s) to open the modal when clicked</td>
    </tr>
</table>

```jsx
<Modal trigger={<div>Modal Trigger</div>}>
    Modal Content
</Modal>
```

```jsx
<div id="demoTrigger">Modal Trigger</div>

<Modal trigger='#demoTrigger'>
    Modal Content
</Modal>
```

#### Props.close

```jsx
```

##### Disable Close Icon

```jsx
```

#### Props.animate

```jsx
```

## HTML Rendering