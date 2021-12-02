# wc-icon-source

A component for importing icon svg source file and namespace it.

## Attributes

### src

The URL of svg file.

### name

The unique namespace or alias for the svg file.

## Examples

Import a svg file as default:

```html
<wc-icon-source src="./iconfont/icons.svg"></wc-icon-source>
```

Import a svg file and set namespace:

```html
<wc-icon-source src="./iconfont/icons.svg" name="emoji"></wc-icon-source>
```
