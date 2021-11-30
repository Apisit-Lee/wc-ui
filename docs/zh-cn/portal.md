# wc-portal

`wc-portal`可以让其插槽内的内容无视其放置的位置，根据属性插入到某一元素内。

注意：`wc-portal`与[`<portal>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/portal)元素是不同的。

## 属性

### `portal`

容器对象的查询字符串（query selector）。

## 示例

在body中添加一个wc-portal元素，设置其portal属性值为'.section-a'。其内容将会展现在section A元素内部。

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

可以动态设置`portal`属性。

```javascript
const wcPortalEl = document.querySelector('wc-portal');
wcPortalEl.portal = '.section-b'; // 改变了portal的值，其内容会在section B内渲染。
```