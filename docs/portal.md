# wc-portal

The `wc-portal` enables the slot content appended to a container element by setting attribute value, despite where it phisically placed.

Note that the `wc-portal` is different from the [`<portal>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/portal) element.

## Attributes

### `portal`

The container's query selector string.

## Examples

Add a wc-portal element in body; set portal value to '.section-a'. The portal content will display in section A.

```html
<body>
    <section class="section-a">
        <h1>Section A</h1>
    </section>
    <section class="section-b">
        <h1>Section B</h1>
    </section>
    <wc-portal portal=".section-a">Where do I belong to?</wc-portal>
</body>
```

`portal` attribute could be set dynamically.

```javascript
const wcPortalEl = document.querySelector('wc-portal');
wcPortalEl.portal = '.section-b'; // change portal value, it will appear in section B.
```