# wc-dialog

A popup dialog window.

## Attributes

### portal

The dialog element will render in parent node where you place it by default. If you want to place it in other nodes, you could set this `portal` attribute to the selector string of that node. For example, if you want to place the dialog in body, you could set `portal='body'`; If you want to place it in a div whose id is 'container', you could set `portal='#container'`.

### visible

Visibility of dialog.

### canceltext

The text label of cancel button.

### oktext

The text label of ok button.

### escapable

If the `escapable` is set **true**, you can close the dialog by pressing `ESC` button;

### closable

If the `closabel` is set **true**, you can see a close button on the right top of the dialog. Also, this attribute controls the `escapable` attribute, i.e if `closable` is set **false**, escapable will not work.

### fullscreen

Whether ths dialog is fullscreen.

### fullscreentrigger

If the `fullscreentrigger` is set **true**, you can see a toggle button on the right top of the dialog.

### title

The title of the dialog.

### content

The content of the dialog.

### footer

If `footer` is **true**, the footer part will be visible, or it will be invisible.

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