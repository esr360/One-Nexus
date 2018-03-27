### Documenting configuration properties

When documenting the configuration properties for a module, some properties are excluded from the documentation table. If a property is missing from the documentation table, it is for one of the following reasons:

* The property corresponds to a valid CSS property - this is treated as regular CSS. To learn more about the property, look it up on the [Mozilla MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

* The property is a [global property](#TODO) and is documented there.

* The property corresponds to a component, and contains a further object of properties.

* The property has been mistakenly left off the table (please [raise an issue](https://github.com/esr360/One-Nexus/issues) if you believe this to be the case).