# wc-button

A choice instead of `<button>` element.

## Attributes

### type

There are five types to chose: default, filled, tonal, outlined and text.

### icon

When `icon` attribute is set, it will render icon in **default** namespace.


### theme

There are four given themes: default, success, warn, error. You can override each theme's color variable, or provide other new theme plans with whatever name you want.

### size

There are five size choices: x-small, small, normal (which is default), large, x-large.

### block

By default, a button element is an _inline element_, you can set attribute block to make it a block.

### round

When `round` attribute is set, the button will force its width and height, and the button shape will be a circle.

### disabled

When `disalbed` attribute is set, the button turns to gray, and all pointer events is not allowed.


## Examples

<section>
    <h3>1. Different types: </h3>
    <wc-button icon="all" tabindex="0">default button</wc-button>
    <wc-button type="filled" icon="explore" tabindex="0">filled button</wc-button>
    <wc-button type="tonal" tabindex="0">tonal button</wc-button>
    <wc-button type="outlined" tabindex="0">outlined button</wc-button>
    <wc-button type="text" tabindex="0">text button</wc-button>
  </section>

  <section>
    <h3>2. Block & inline: </h3>
    <wc-button tabindex="0">inline</wc-button>
    <wc-button icon="discover" tabindex="0" block>block</wc-button>
  </section>

  <section>
    <h3>3. Disabled: </h3>
    <wc-button icon="all" disabled>default button</wc-button>
    <wc-button type="filled" icon="explore" disabled>filled button</wc-button>
    <wc-button type="tonal" disabled>tonal button</wc-button>
    <wc-button type="outlined" disabled>outlined button</wc-button>
    <wc-button type="text" disabled>text button</wc-button>
  </section>

  <section>
    <h3>4. Different sizes: </h3>
    <p><b>x-small</b></p>
    <wc-button icon="all" size="x-small" tabindex="0">default button</wc-button>
    <wc-button type="filled" size="x-small" icon="explore" tabindex="0">filled button</wc-button>
    <wc-button type="tonal" size="x-small" tabindex="0">tonal button</wc-button>
    <wc-button type="outlined" size="x-small" tabindex="0">outlined button</wc-button>
    <wc-button type="text" size="x-small" tabindex="0">text button</wc-button>
    <p><b>small</b></p>
    <wc-button type="filled" size="small" icon="explore" tabindex="0">filled button</wc-button>
    <wc-button type="tonal" size="small" tabindex="0">tonal button</wc-button>
    <wc-button type="outlined" size="small" tabindex="0">outlined button</wc-button>
    <wc-button type="text" size="small" tabindex="0">text button</wc-button>
    <p><b>normal (default)</b></p>
    <wc-button icon="all" tabindex="0">default button</wc-button>
    <wc-button type="filled" icon="explore" tabindex="0">filled button</wc-button>
    <wc-button type="tonal" tabindex="0">tonal button</wc-button>
    <wc-button type="outlined" tabindex="0">outlined button</wc-button>
    <wc-button type="text" tabindex="0">text button</wc-button>
    <p><b>large</b></p>
    <wc-button icon="all" size="large" tabindex="0">default button</wc-button>
    <wc-button type="filled" size="large" icon="explore" tabindex="0">filled button</wc-button>
    <wc-button type="tonal" size="large" tabindex="0">tonal button</wc-button>
    <wc-button type="outlined" size="large" tabindex="0">outlined button</wc-button>
    <wc-button type="text" size="large" tabindex="0">text button</wc-button>
    <p><b>x-large</b></p>
    <wc-button icon="all" size="x-large" tabindex="0">default button</wc-button>
    <wc-button type="filled" size="x-large" icon="explore" tabindex="0">filled button</wc-button>
    <wc-button type="tonal" size="x-large" tabindex="0">tonal button</wc-button>
    <wc-button type="outlined" size="x-large" tabindex="0">outlined button</wc-button>
    <wc-button type="text" size="x-large" tabindex="0">text button</wc-button>
  </section>

  <section>
    <h3>5. Round: </h3>
    <wc-button icon="all" tabindex="0" round></wc-button>
    <wc-button icon="all" type="filled" icon="explore" tabindex="0" round></wc-button>
    <wc-button icon="all" type="tonal" tabindex="0" round></wc-button>
    <wc-button icon="all" type="outlined" tabindex="0" round></wc-button>
    <wc-button icon="all" type="text" tabindex="0"></wc-button>
  </section>

  <section>
    <h3>5. Theme: </h3>
    <p><b>default</b></p>
    <wc-button icon="all" tabindex="0">default</wc-button>
    <wc-button icon="all" type="filled" icon="explore" tabindex="0">filled</wc-button>
    <wc-button icon="all" type="tonal" tabindex="0">tonal</wc-button>
    <wc-button icon="all" type="outlined" tabindex="0">outlined</wc-button>
    <wc-button icon="all" type="text" tabindex="0">text</wc-button>
    <p><b>success</b></p>
    <wc-button icon="all" tabindex="0" theme="success">default</wc-button>
    <wc-button icon="all" type="filled" icon="explore" tabindex="0" theme="success">filled</wc-button>
    <wc-button icon="all" type="tonal" tabindex="0" theme="success">tonal</wc-button>
    <wc-button icon="all" type="outlined" tabindex="0" theme="success">outlined</wc-button>
    <wc-button icon="all" type="text" tabindex="0" theme="success">text</wc-button>
    <p><b>warn</b></p>
    <wc-button icon="all" tabindex="0" theme="warn">default</wc-button>
    <wc-button icon="all" type="filled" icon="explore" tabindex="0" theme="warn">filled</wc-button>
    <wc-button icon="all" type="tonal" tabindex="0" theme="warn">tonal</wc-button>
    <wc-button icon="all" type="outlined" tabindex="0" theme="warn">outlined</wc-button>
    <wc-button icon="all" type="text" tabindex="0" theme="warn">text</wc-button>
    <p><b>error</b></p>
    <wc-button icon="all" tabindex="0" theme="error">default</wc-button>
    <wc-button icon="all" type="filled" icon="explore" tabindex="0" theme="error">filled</wc-button>
    <wc-button icon="all" type="tonal" tabindex="0" theme="error">tonal</wc-button>
    <wc-button icon="all" type="outlined" tabindex="0" theme="error">outlined</wc-button>
    <wc-button icon="all" type="text" tabindex="0" theme="error">text</wc-button>
  </section>