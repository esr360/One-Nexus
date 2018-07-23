# One-Nexus Modal

* [Overview](#overview)
* [Configuration](#configuration)
* [Styles](#styles)
* [Interactions](#interactions)
* [Rendering](#rendering)

## Overview

### Quick Look

```jsx
<Modal trigger={ <Button>Modal Trigger</Button> }>
    Modal Content
</Modal>
```

###### Internal Interface [[?]](#TODO)

```jsx
<Module name='modal' { visible, animate { top, bottom, left, right, zoom } }>
    <Component name='close' { icon } />
    <Component name='content' />
</Module>
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
    "theme": {
        "modal": {
            ...
        }
    }
}
```

## Styles

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Styling-a-module) about module styles

## Interactions

> Module interactions are applied by default within the module's `.jsx` file ([learn more](https://github.com/esr360/One-Nexus/wiki/Module-interactions))

* [Toggle](#toggle)

> Interactions are defined in [ui/modules/elements/modal/modal.js](../../../modules/elements/modal/modal.js)

### Toggle

> Toggle a modal

```js
Modal.toggle(target, operator);
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
            <td><code>target</code></td>
            <td><a href="#TODO">Synergy selector</a></td>
            <td>The target modal to toggle</td>
        </tr>
        <tr>
            <td><code>[operator]<code></td>
            <td><code>('show'|'hide'|'toggle')<code></td>
            <td>The toggle operator (defaults to 'toggle')</td>
        </tr>
    </tbody>
</table>

#### Examples

```js
// Toggle modal with ID 'foo'
Modal.toggle(document.getElementById('foo'));

// Toggle modal with ID 'foo'
Modal.toggle('#foo');

// Show modal with ID 'foo'
Modal.toggle('#foo', 'show');

// Hide modal with ID 'foo'
Modal.toggle('#foo', 'hide');

// Reference a React Component
Modal.toggle(ReactDOM.findDOMNode(myModal), 'show');
```

## Rendering

> [Learn more](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module) about rendering modules

* [Examples](#examples)
* [API](#api)

### Examples

* [Using `<Modal>` Tag](#using-modal-tag)
* [Custom Build](#custom-build)

#### Using `<Modal>` Tag

```jsx
<Modal trigger={<Button>Open Modal</Button>}>
    Modal Content
</Modal>
```

#### Custom Build

```jsx
<Module name='modal' before={target => <Button onClick={() => Modal.toggle(target())}>Open Modal</Button>}>
    <Component name='close' modifiers={['icon']}>×</Component>
    <Component name='content'>
        Modal Content
    </Component>
</Module>
```

### API

* [[...Global props]](https://github.com/esr360/One-Nexus/wiki/Rendering-a-module#global-props)
* [defaultProps](#defaultprops)
* [Props.content](#TODO)
* [Props.trigger](#TODO)
* [Props.close](#TODO)
* [Props.animate](#TODO)
* [Props.toggle](#TODO)

#### defaultProps

```js
{
    animate: 'top',
    close: '×',
    toggle: interactions.toggle
}
```

#### Props.content

> Pass content via the `content` prop instead of passing as children

```jsx
<Modal trigger={<Button>Open Modal</Button>} content='Modal Content' />
```

```jsx
<Modal trigger={<Button>Open Modal</Button>} content={<div>Modal Content</div>} />
```

#### Props.trigger

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>(String | <a href="https://reactjs.org/docs/glossary.html#elements">ReactElement</a>)</code></td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>The element(s) to open the modal when clicked (CSS selector or React Element)</td>
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

> Content for the `close` component

```jsx
<Modal trigger={<Button>Modal Trigger</Button>} close='×'>
    Modal Content
</Modal>
```

##### Disable Close Icon

```jsx
<Modal trigger={<Button>Modal Trigger</Button>} close={false}>
    Modal Content
</Modal>
```

#### Props.animate

> Available animations are defined by the [module's modifiers](#modifiers)

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>('top'|'bottom'|'left'|'right'|'zoom')</code></td>
    </tr>
</table>

```jsx
<Modal trigger={<Button>Modal Trigger</Button>} animate='zoom'>
    Modal Content
</Modal>
```

#### Props.toggle

> Overwrite the default `toggle` method

<table>
    <tr>
        <td><b>Type</b></td>
        <td><code>Function</code></td>
    </tr>
    <tr>
        <td><b>Default</b></td>
        <td><a href="#toggle"><code>interactions.toggle</code></a></td>
    </tr>
</table>

```jsx
<Modal trigger={...} toggle={node => {
    // custom toggle event handler logic...
}} />
```

You can import and call the toggle interaction manually:

```jsx
import { toggle } from '../../modal/modal.js';
```

```jsx
<Modal trigger={...} toggle={node => toggle(node)} />
```