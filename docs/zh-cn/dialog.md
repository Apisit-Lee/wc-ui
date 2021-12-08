# wc-dialog

一个弹出窗口组件。

## 属性

### portal

默认情况下，弹窗会在声明处渲染组件；如果想在其他位置渲染，可以通过设置`portal`属性为目标位置的CSS选择器。例如，将该属性设置为'body'可以让弹窗渲染在body下，将该属性设置为'#container'，可以让弹窗渲染在一个id为'container'的元素内。

### visible

控制弹窗是否可见。

### canceltext

取消按钮的文案。

### oktext

确定按钮的文案。

### escapable

点击`ESC`键是否可以关闭弹窗，值为**true**时可关闭。

### closable

如果该属性值为**true**，弹窗的右上角会出现一个关闭按钮。这个属性还控制着`escapable`属性，如果该值为**false**，那么escapable就失效了。

### fullscreen

控制弹窗是否全屏展示。

### fullscreentrigger

如果该值为**true**，弹窗右上角会出现一个切换全屏状态的按钮。

### title

弹窗的标题文案。

### content

弹窗的正文内容。

### footer

如果`footer`值为**true**，弹窗的底部栏会显示出来，反之则隐藏底部栏。

## Examples


```html
<style>
    [theme=kris] {
        --primary-color: #7139f5;
        --primary-color-10: #7139f51a;
        --primary-color-40: #7139f566;
        --primary-color-90: #45209b;
    }
</style>
<div class="main">
    <wc-button onclick="showDialog1()">show dialog 1</wc-button>
    <wc-dialog id="dialog" portal="body:after" fullscreen title="<wc-icon type='all' style='color: #1792ff;'></wc-icon> GOOD PICS" style="width: 500px;">
        <wc-button-group style="margin: 0 auto;display: block;position: sticky;top: 0;background-color: #ffffff;">
          <wc-button type="filled" data-target=".main" onclick="onClick(this)">parentNode</wc-button>
          <wc-button data-target="body" onclick="onClick(this)">body</wc-button>
          <wc-button theme="kris" icon="wang" onclick="onClick(this)">noop</wc-button>
          <wc-button theme="kris" onclick="showDialog2()">show dialog 2</wc-button>
        </wc-button-group>
        <div style="margin: 0 auto;width: 500px;">
          <p><wc-icon type="all"></wc-icon>你知道吗？有一张图片很好看。。。</p>
          <img id="img" src="../img/logo.png" style="max-width: 180px;margin: 0 auto;display: block;"/>
          <p>你看吧，是不是很好看～</p>
        </div>
    </wc-dialog>
</div>
<div class="main2" style="width: 500px;">
    <wc-button onclick="showDialog2()">show dialog 2</wc-button>
    <wc-dialog id="dialog2" portal="body:after" fullscreentrigger="false" closable="false" style="max-height: 200px;">
        <h2 slot="header">Dialog 2</h2>
        <div style="width: 450px;">
          <wc-button-group style="margin: 0 auto;display: block;position: sticky;top: 0;background-color: #ffffff;">
            <wc-button theme="success" type="filled" data-target=".main2" onclick="onClick2(this)">parentNode</wc-button>
            <wc-button theme="success" data-target="body" onclick="onClick2(this)">body</wc-button>
            <wc-button theme="success" onclick="onClick2(this)">noop</wc-button>
            <wc-button theme="success" onclick="showDialog1()">show dialog 1</wc-button>
          </wc-button-group>
          <p>此功能某些浏览器尚在开发中，请参考浏览器兼容性表格以得到在不同浏览器中适合使用的前缀。由于该功能对应的标准文档可能被重新修订，所以在未来版本的浏览器中该功能的语法和行为可能随之改变。</p>
          <p>在这里，我们不会详细解释元素的功能细节，你可以在源码中了解它的工作方式。这里的真正不同点在于元素继承的是HTMLUListElement (en-US) 接口，而不是HTMLElement。所以它拥有元素所有的特性，以及在此基础上我们定义的功能，这是与独立元素（standalone element）不同之处。这也是为什么我们称它为 customized built-in元素，而不是一个autonomous元素。</p>
        </div>
    </wc-dialog>
</div>
<wc-button onclick="showDialog3()">show dialog by function</wc-button>
```

<style>
    [theme=kris] {
        --primary-color: #7139f5;
        --primary-color-10: #7139f51a;
        --primary-color-40: #7139f566;
        --primary-color-90: #45209b;
    }
</style>
<div class="main">
    <wc-button onclick="showDialog1()">show dialog 1</wc-button>
    <wc-dialog id="dialog" portal="body:after" fullscreen title="<wc-icon type='all' style='color: #1792ff;'></wc-icon> GOOD PICS" style="width: 500px;">
        <wc-button-group style="margin: 0 auto;display: block;position: sticky;top: 0;background-color: #ffffff;">
          <wc-button type="filled" data-target=".main" onclick="onClick(this)">parentNode</wc-button>
          <wc-button data-target="body" onclick="onClick(this)">body</wc-button>
          <wc-button theme="kris" icon="wang" onclick="onClick(this)">noop</wc-button>
          <wc-button theme="kris" onclick="showDialog2()">show dialog 2</wc-button>
        </wc-button-group>
        <div style="margin: 0 auto;width: 500px;">
          <p><wc-icon type="all"></wc-icon>你知道吗？有一张图片很好看。。。</p>
          <img id="img" src="../img/logo.png" style="max-width: 180px;margin: 0 auto;display: block;"/>
          <p>你看吧，是不是很好看～</p>
        </div>
    </wc-dialog>
</div>

<div class="main2" style="width: 500px;">
    <wc-button onclick="showDialog2()">show dialog 2</wc-button>
    <wc-dialog id="dialog2" portal="body:after" fullscreentrigger="false" closable="false" style="max-height: 200px;">
        <h2 slot="header">Dialog 2</h2>
        <div style="width: 450px;">
          <wc-button-group style="margin: 0 auto;display: block;position: sticky;top: 0;background-color: #ffffff;">
            <wc-button theme="success" type="filled" data-target=".main2" onclick="onClick2(this)">parentNode</wc-button>
            <wc-button theme="success" data-target="body" onclick="onClick2(this)">body</wc-button>
            <wc-button theme="success" onclick="onClick2(this)">noop</wc-button>
            <wc-button theme="success" onclick="showDialog1()">show dialog 1</wc-button>
          </wc-button-group>
          <p>此功能某些浏览器尚在开发中，请参考浏览器兼容性表格以得到在不同浏览器中适合使用的前缀。由于该功能对应的标准文档可能被重新修订，所以在未来版本的浏览器中该功能的语法和行为可能随之改变。</p>
          <p>在这里，我们不会详细解释元素的功能细节，你可以在源码中了解它的工作方式。这里的真正不同点在于元素继承的是HTMLUListElement (en-US) 接口，而不是HTMLElement。所以它拥有元素所有的特性，以及在此基础上我们定义的功能，这是与独立元素（standalone element）不同之处。这也是为什么我们称它为 customized built-in元素，而不是一个autonomous元素。</p>
        </div>
    </wc-dialog>
</div>
<wc-button onclick="showDialog3()">show dialog by function</wc-button>
<script>
    function showDialog1() {
    const dialog = document.getElementById('dialog');
    if (dialog) {
      dialog.visible = true;
    }
  }
  function onClick(btn) {
    Array.from(btn.parentNode.children).forEach(element => {
      element.type = '';
    });
    btn.type = 'filled';
    if (btn.dataset.target) {
      const dialog = document.getElementById('dialog');
      if (dialog) {
        dialog.portal = btn.dataset.target;
      }
    }
  }
  function showDialog2() {
    const dialog = document.getElementById('dialog2');
    if (dialog) {
      dialog.canceltext = 'Cancel';
      dialog.oktext = null;
      dialog.visible = true;
    }
  }
  function onClick2(btn) {
    Array.from(btn.parentNode.children).forEach(element => {
      element.type = '';
    });
    btn.type = 'filled';
    if (btn.dataset.target) {
      const dialog = document.getElementById('dialog2');
      if (dialog) {
        dialog.portal = btn.dataset.target;
      }
    }
  }

  function showDialog3() {
      WcDialog.error('我是通过WcDialog.error调用的。');
    }
</script>