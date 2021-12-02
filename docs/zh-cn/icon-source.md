# wc-icon-source

一个用于加载svg图标文件，并设置其命名空间的组件。

## 属性

### src

svg文件的URL地址。

### name

svg文件的唯一命名空间/别名。

## 示例

加载一个svg文件作为默认图标源：

```html
<wc-icon-source src="./iconfont/icons.svg"></wc-icon-source>
```

加载svg文件并设置命名空间：

```html
<wc-icon-source src="./iconfont/icons.svg" name="emoji"></wc-icon-source>
```
