---
title: Markdown 示例
---

# Markdown 扩展示例

VitePress 内置了 Markdown 扩展功能。

## 语法高亮

VitePress 使用 [Shiki](https://github.com/shikijs/shiki) 来高亮 Markdown 代码块中的语言语法，支持多种编程语言。

```js
export default {
  data() {
    return { msg: '你好世界' }
  }
}
```

```html
<ul>
  <li v-for="i in 5" :key="i">{{ i }}</li>
</ul>
```

## 自定义容器

**输入**

```md
::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险警告。
:::

::: details
这是一个详情块。
:::
```

**输出**

::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险警告。
:::

::: details
这是一个详情块。
:::

## 更多

查看文档了解 [完整的 Markdown 扩展列表](https://vitepress.dev/guide/markdown)。
