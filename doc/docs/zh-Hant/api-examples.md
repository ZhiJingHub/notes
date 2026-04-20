---
title: 執行時 API 範例
---

# 執行時 API 範例

此頁面示範了 VitePress 提供的一些執行時 API 的用法。

主要的 `useData()` API 可用於存取目前頁面的網站、主題和頁面資料。它可在 `.md` 和 `.vue` 檔案中使用：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 結果

### 主題資料
<pre>{{ theme }}</pre>

### 頁面資料
<pre>{{ page }}</pre>

### 頁面 Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 結果

### 主題資料
<pre>{{ theme }}</pre>

### 頁面資料
<pre>{{ page }}</pre>

### 頁面 Frontmatter
<pre>{{ frontmatter }}</pre>

## 更多

查看文件了解 [完整的執行時 API 列表](https://vitepress.dev/reference/runtime-api#usedata)。
