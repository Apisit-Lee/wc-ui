# About icon

When implementing icon component, it's important of plan. I will use Symbol plan of iconfont, that I choose icons from iconfont and download svg file; add the default svg file in a certain folder; and use it as default & fallback.

There are some questions:

## How users customize icon source?

I think I should provide user ability to change (or add) icon sources (of course in need). Default icon choices certainly won't satisfy all users. So, it comes to HOW?

How users customize icon source? It's popular to import icon files in javascript. I don't like this way. What I build is a componet lib which means the ability of changing source should be more `HTML-like`. So, I decide to add a tag called `wc-icon-source`.

This tag basically has two attributes: `src` and `name`;

The `src` refers to the location of svg file. No matter absolute or relative the src is, it should both work well.

The `name` defines the unique name of this set of svg, it works as a namespace. When duplication accours, the last one will be in use.

e.g. a normal `wc-icon-source` example.

```html
<html>
    <head>
        <wc-icon-source src="path-to-svg-file" name="aUniqueName" />
    </head>
    <body>
        <wc-icon-source src="path-to-anothor-svg-file" name="anothorName" />
    </body>
</html>
```

?> `wc-icon-source` is a logical meta tag, no entity display in view, so it dosen't matter where you place it.

By adding `wc-icon-source` tags users could import several svg file in different names. Then, how to use them?

## How to use customized icons?

Basically, I will start a icon component with these attributes: `source`, `type`, `path`; 'cause the component is based on svg, so `path` is the first-class attribute ignoring `source` and `type`; and if no path is set, the component will use a certain type within a certain source namespace.

For example, I imported two sources in the last example: _aUniqueName_ and _anothorName_. So, there are three sources for me to choose, don't forget the default source. If I want to use an icon called _home_ in default source, I could just set type 'home'; like this `<wc-icon type="home"></wc-icon>`; If I want to use the _home_ icon from _aUniqueName_ source. I should do this: `<wc-icon source="aUniqueName" type="home"></wc-icon>`.

It's easy to use! And it's alse easy to understand! I think it's better than the _so-called popular plan_.