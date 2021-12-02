# wc-icon

一个基于svg的图标组件。

## 属性

### source

svg源文件的别名，也就是在`<wc-icon-source>`中定义的_name_属性的值，默认值为`default`。这个属性会定义改图标svg源的命名空间。

?> 点击[**这里**](/zh-cn/icon-source)了解更多关于`<wc-icon-source>`的内容。

### type

在svg源文件中定义的图标的类型名。

### path

svg的path值。

?> 如果设置了`path`值，_source_和_type_属性将会失效。

### view

定义svg的viewBox，默认值为1024。


### issourceloaded

只读属性，用于展示源文件是否已加载。

## 示例

如果已定义了源文件的别名为'default'，并且在svg源文件中存在一个id叫做'smile'的symbol，就可以这样使用：

```html
<wc-icon type="smile"></wc-icon>
```

如果这个smile图标的源文件别名为'faces'：

```html
<wc-icon source="faces" type="smile"></wc-icon>
```

如果使用_path_：

```html
<wc-icon path="M512 625.778c-159.289 0-284.444-125.156-284.444-284.445S352.71 56.89 512 56.89s284.444 125.155 284.444 284.444S671.29 625.778 512 625.778z m0-56.89c125.156 0 227.556-102.4 227.556-227.555S637.156 113.778 512 113.778s-227.556 102.4-227.556 227.555S386.844 568.89 512 568.89z"></wc-icon>
```
