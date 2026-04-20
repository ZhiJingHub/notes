---
title: Markdown 範例
---

# Markdown 擴展示例

VitePress 內建了 Markdown 擴充功能。

## 語法高亮

VitePress 使用 [Shiki](https://github.com/shikijs/shiki) 來高亮 Markdown 程式碼區塊中的語言語法，支援多種程式語言。

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

## 自訂容器

**輸入**

```md
::: info
這是一個資訊框。
:::

::: tip
這是一個提示。
:::

::: warning
這是一個警告。
:::

::: danger
這是一個危險警告。
:::

::: details
這是一個詳情區塊。
:::
```

**輸出**

::: info
這是一個資訊框。
:::

::: tip
這是一個提示。
:::

::: warning
這是一個警告。
:::

::: danger
這是一個危險警告。
:::

::: details
這是一個詳情區塊。
:::

## 更多

查看文件了解 [完整的 Markdown 擴充列表](https://vitepress.dev/guide/markdown)。
