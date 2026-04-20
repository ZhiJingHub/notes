---
title: Markdown Examples
---

# Markdown Extension Examples

VitePress comes with built-in Markdown extensions.

## Syntax Highlighting

VitePress uses [Shiki](https://github.com/shikijs/shiki) to highlight language syntax in Markdown code blocks, with support for many programming languages.

```js
export default {
  data() {
    return { msg: 'Hello World' }
  }
}
```

```html
<ul>
  <li v-for="i in 5" :key="i">{{ i }}</li>
</ul>
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
