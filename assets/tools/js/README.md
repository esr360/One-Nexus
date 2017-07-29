## JavaScript Tools

One-Nexus provides some useful JavaScript tools to facilitate development and ehance your project's UI.

> All tools are imported by default in [`app.js`](../../app.js)

### Tools

* [breakpoint](#breakpoint)
* [clickHelper](#clickHelper)
* [custom](#custom)
* [inViewport](#inViewport)
* [isValidSelector](#isValidSelector)
* [parents](#parents)
* [scrollSpy](#scrollSpy)
* [smoothScroll](#smoothScroll)

#### Breakpoint

> Determine if certain media matches the passed conditions

```js
app.breakpoint(media, value);
```

<table class="table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>media</td>
            <td>The media to test for</td>
        </tr>
        <tr>
            <td>value</td>
            <td>The value to test</td>
        </tr>
    </tbody>
</table>

```js
if (app.breakpoint('min-width', '960px')) {
    ...
}
```

Using keys from the [`Grid`](#TODO) module:

```js
if (app.breakpoint('min-width', 'break-3')) {
    ...
}
```

#### clickHelper

> Add a class to an element when clicked and remove the same class from siblings

```js
app.clickHelper(parents, targetClass);
```

<table class="table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>parent</td>
            <td>The parent element which contains the targets</td>
        </tr>
        <tr>
            <td>targetClass</td>
            <td>The class to add/remove to the targets when clicked</td>
        </tr>
    </tbody>
</table>

```html
<div id="els">
    <div>...</div>
    <div>...</div>
    <div>...</div>
</div<
```

```js
var targets = document.getElementById('els');

app.clickHelper(targets, 'active');
```

#### Custom

> Private function to retrieve custom module configuration

```js
app.custom(module, custom);
```

<table class="table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>module</td>
            <td>Name of the module to retrieve configuration for</td>
        </tr>
        <tr>
            <td>custom</td>
            <td>Configuraton to use instead of the values found in the global [`app.theme` Object](#TODO)</td>
        </tr>
    </tbody>
</table>

```js
// if an entry with the value 'accordions' exists in the `app.theme`
// object, the values will be returned here (i.e. app.theme.accordions)
custom = app.custom('accordions');

// if the `custom` parameter is passed, these values will always be 
// used instead of the valus returned by `app.theme.accordions`
custom = app.custom('accordions', {
    ...
});
```

#### inViewport

> Determine if an element if visible in the viewport

```js
app.inViewport(options);
```

<table class="table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>options.target</td>
            <td>The element to test</td>
        </tr>
        <tr>
            <td>options.coverage</td>
            <td>The point at which the element should be considered to be in the viewport</td>
        </tr>
        <tr>
            <td>options.scope</td>
            <td>How the function should decide whether the element is in the viewport</td>
        </tr>
    </tbody>
</table>

```js
var target = document.getElementById('target');

// determine if the top of the element is currently in view
app.inViewport({
    target: target, 
    coverage: 'top', 
    scope: 'inView'
});

// determine if the middle of the element is currently in view
app.inViewport({
    target: target, 
    coverage: 'middle', 
    scope: 'inView'
});

// determine if the bottom of the element has been reached (so
// the element may have been scrolled passed and not be in view)
app.inViewport({
    target: target, 
    coverage: 'top', 
    scope: 'reached'
});
```

#### IsValidSelector

> Test the validity (not existance) of a CSS selector

```js
app.isValidSelector(selector);
```

<table class="table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>selector</td>
            <td>The selector to test for validity</td>
        </tr>
    </tbody>
</table>

```js
app.isValidSelector('[class*="foo"]'); // returns true
app.isValidSelector('class*="foo"'); // returns false
```

#### Parents

> Vanilla JS jQuery.parents() implementation

```js
app.parents(elem, selector);
```

<table class="table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>elem</td>
            <td>The element to get the parents of</td>
        </tr>
        <tr>
            <td>selector</td>
            <td>Optional selector to get specific parent</td>
        </tr>
    </tbody>
</table>

```html
<html>
    <body>
        <div id="foo">
            <div id="bar">...</div>
        </div>
    </body>
</html>
```

```js
app.parents(document.getElementById('foo')).length; // returns 2
app.parents(document.getElementById('bar'), 'div'); // returns the `#foo` element object
```

#### ScrollSpy

> Lightweightt Scroll-Spy plugin

```js
app.scrollSpy(options);
```

<table class="table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>options.container</td>
            <td>CSS selector for scrollSpy links container</td>
        </tr>
        <tr>
            <td>options.element</td>
            <td>CSS selector for scrollSpy link elements</td>
        </tr>
        <tr>
            <td>options.activeClass</td>
            <td>Class to apply to link element when target is in view</td>
        </tr>
        <tr>
            <td>options.buffer</td>
            <td>Number of pixels to act as a buffer when the element is in view</td>
        </tr>
    </tbody>
</table>

```html
<div class="scrollSpy_links">
    <a href="#scrollSpy_link-1">Link 1</a>
    <a href="#scrollSpy_link-2">Link 1</a>
    <a href="#scrollSpy_link-3">Link 1</a>
</div>

<section id="scrollSpy_link-1">...</section>

<section id="scrollSpy_link-2">...</section>

<section id="scrollSpy_link-3">...</section>
```

```js
app.scrollSpy({
    container: '.scrollSpy_links',
    element: 'a',
    activeClass: 'active',
    buffer: 25
});
```

#### SmoothScroll

> Animate scrolling to anchor links

```js
app.smoothScroll(options);
```

<table class="table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>options.speed</td>
            <td>The animation duration (milliseconds)</td>
        </tr>
        <tr>
            <td>options.increments</td>
            <td>Increments (in pixels) to scroll by during the animation</td>
        </tr>
    </tbody>
</table>

```js
app.smoothScroll({
    speed: 300,
    increments: 16
});
```