# wc-icon

A svg icon component.

## Attributes

### source

The svg source name, the `<wc-icon-source>`'s _name_ value, default is `default`. This attribute will define the namespace of svg icons.

?> See more about `<wc-icon-source>` [**here**](/icon-source).

### type

The type name of icon. This name is defined in svg files.

### path

The svg path string.

?> If `path` is set, _source_ and _type_ will not work.

### view

Define the viewBox of svg, default is 1024.


### issourceloaded

Readonly, shows whether the source svg file is loaded.

## Examples

If you have defined an icon source named 'default' and in the svg file there is a symbol whose id is 'smile', you can use it like this:

```html
<wc-icon type="smile"></wc-icon>
```

If you defined the smile icon in a svg file and named the source 'faces', you can:

```html
<wc-icon source="faces" type="smile"></wc-icon>
```

If you use _path_:

```html
<wc-icon path="M512 625.778c-159.289 0-284.444-125.156-284.444-284.445S352.71 56.89 512 56.89s284.444 125.155 284.444 284.444S671.29 625.778 512 625.778z m0-56.89c125.156 0 227.556-102.4 227.556-227.555S637.156 113.778 512 113.778s-227.556 102.4-227.556 227.555S386.844 568.89 512 568.89z"></wc-icon>
```
