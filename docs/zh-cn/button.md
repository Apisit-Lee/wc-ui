# wc-button

可以替代原生的`<button>`元素。

## 属性

### type

有5种类型可供选择：default, filled, tonal, outlined 和 text。

### icon

当设置了 `icon` 时, 会通过**默认**命名空间渲染图标。


### theme

提供了4种主题：default, success, warn, error。你可以覆盖各个主题的颜色参数，或者定义其他任意名字的主题样式。

### size

有5种尺寸选择：x-small, small, normal (which is default), large, x-large。

### block

默认情况下，按钮是_内联_元素，你可以通过设置block属性将其转成块状元素。

### round

当这设置了`round`属性时，按钮会固定宽高，并且变成圆形。

### disabled

当设置了`disabled`属性时，按钮变灰，而且会禁止所有的鼠标事件。


## 示例

<section>
    <h3>1. 类型（Different types）: </h3>
    <wc-button icon="all" tabindex="0" onclick="changeTheme(this)">default button</wc-button>
    <wc-button type="filled" icon="explore" tabindex="0">filled button</wc-button>
    <wc-button type="tonal" tabindex="0">tonal button</wc-button>
    <wc-button type="outlined" tabindex="0">outlined button</wc-button>
    <wc-button type="text" tabindex="0" onclick="test(this)">text button</wc-button>
  </section>

  <section>
    <h3>2. 内联元素与块状元素（Block & inline）: </h3>
    <wc-button tabindex="0">inline</wc-button>
    <wc-button icon="discover" tabindex="0" block>block</wc-button>
  </section>

  <section>
    <h3>3. 禁用（Disabled）: </h3>
    <wc-button icon="all" disabled>default button</wc-button>
    <wc-button type="filled" icon="explore" disabled>filled button</wc-button>
    <wc-button type="tonal" disabled>tonal button</wc-button>
    <wc-button type="outlined" disabled>outlined button</wc-button>
    <wc-button type="text" disabled onclick="test(this)">text button</wc-button>
  </section>

  <section>
    <h3>4. 尺寸（Different sizes）: </h3>
    <p><b>x-small</b></p>
    <wc-button icon="all" size="x-small" tabindex="0">default button</wc-button>
    <wc-button type="filled" size="x-small" icon="explore" tabindex="0">filled button</wc-button>
    <wc-button type="tonal" size="x-small" tabindex="0">tonal button</wc-button>
    <wc-button type="outlined" size="x-small" tabindex="0">outlined button</wc-button>
    <wc-button type="text" size="x-small" tabindex="0" onclick="test(this)">text button</wc-button>
    <p><b>small</b></p>
    <wc-button type="filled" size="small" icon="explore" tabindex="0">filled button</wc-button>
    <wc-button type="tonal" size="small" tabindex="0">tonal button</wc-button>
    <wc-button type="outlined" size="small" tabindex="0">outlined button</wc-button>
    <wc-button type="text" size="small" tabindex="0" onclick="test(this)">text button</wc-button>
    <p><b>normal (default)</b></p>
    <wc-button icon="all" tabindex="0">default button</wc-button>
    <wc-button type="filled" icon="explore" tabindex="0">filled button</wc-button>
    <wc-button type="tonal" tabindex="0">tonal button</wc-button>
    <wc-button type="outlined" tabindex="0">outlined button</wc-button>
    <wc-button type="text" tabindex="0" onclick="test(this)">text button</wc-button>
    <p><b>large</b></p>
    <wc-button icon="all" size="large" tabindex="0">default button</wc-button>
    <wc-button type="filled" size="large" icon="explore" tabindex="0">filled button</wc-button>
    <wc-button type="tonal" size="large" tabindex="0">tonal button</wc-button>
    <wc-button type="outlined" size="large" tabindex="0">outlined button</wc-button>
    <wc-button type="text" size="large" tabindex="0" onclick="test(this)">text button</wc-button>
    <p><b>x-large</b></p>
    <wc-button icon="all" size="x-large" tabindex="0">default button</wc-button>
    <wc-button type="filled" size="x-large" icon="explore" tabindex="0">filled button</wc-button>
    <wc-button type="tonal" size="x-large" tabindex="0">tonal button</wc-button>
    <wc-button type="outlined" size="x-large" tabindex="0">outlined button</wc-button>
    <wc-button type="text" size="x-large" tabindex="0" onclick="test(this)">text button</wc-button>
  </section>

  <section>
    <h3>5. 圆形（Round）: </h3>
    <wc-button icon="all" tabindex="0" round></wc-button>
    <wc-button icon="all" type="filled" icon="explore" tabindex="0" round></wc-button>
    <wc-button icon="all" type="tonal" tabindex="0" round></wc-button>
    <wc-button icon="all" type="outlined" tabindex="0" round></wc-button>
    <wc-button icon="all" type="text" tabindex="0" round onclick="test(this)"></wc-button>
  </section>

  <section>
    <h3>5. 主题（Theme）: </h3>
    <p><b>default</b></p>
    <wc-button icon="all" tabindex="0">default</wc-button>
    <wc-button icon="all" type="filled" icon="explore" tabindex="0">filled</wc-button>
    <wc-button icon="all" type="tonal" tabindex="0">tonal</wc-button>
    <wc-button icon="all" type="outlined" tabindex="0">outlined</wc-button>
    <wc-button icon="all" type="text" tabindex="0" onclick="test(this)">text</wc-button>
    <p><b>success</b></p>
    <wc-button icon="all" tabindex="0" theme="success">default</wc-button>
    <wc-button icon="all" type="filled" icon="explore" tabindex="0" theme="success">filled</wc-button>
    <wc-button icon="all" type="tonal" tabindex="0" theme="success">tonal</wc-button>
    <wc-button icon="all" type="outlined" tabindex="0" theme="success">outlined</wc-button>
    <wc-button icon="all" type="text" tabindex="0" theme="success" onclick="test(this)">text</wc-button>
    <p><b>warn</b></p>
    <wc-button icon="all" tabindex="0" theme="warn">default</wc-button>
    <wc-button icon="all" type="filled" icon="explore" tabindex="0" theme="warn">filled</wc-button>
    <wc-button icon="all" type="tonal" tabindex="0" theme="warn">tonal</wc-button>
    <wc-button icon="all" type="outlined" tabindex="0" theme="warn">outlined</wc-button>
    <wc-button icon="all" type="text" tabindex="0" theme="warn" onclick="test(this)">text</wc-button>
    <p><b>error</b></p>
    <wc-button icon="all" tabindex="0" theme="error">default</wc-button>
    <wc-button icon="all" type="filled" icon="explore" tabindex="0" theme="error">filled</wc-button>
    <wc-button icon="all" type="tonal" tabindex="0" theme="error">tonal</wc-button>
    <wc-button icon="all" type="outlined" tabindex="0" theme="error">outlined</wc-button>
    <wc-button icon="all" type="text" tabindex="0" theme="error" onclick="test(this)">text</wc-button>
  </section>