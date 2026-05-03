import type { LocaleSpecificConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'

export const zhHant = {
  label: '繁體中文',
  lang: 'zh-Hant',
  link: '/zh-Hant/',
  title: '我的精彩專案',
  description: '一個 VitePress 網站',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/zh-Hant/' },
      {
        text: '指南',
        items: [
          { text: 'Markdown 範例', link: '/zh-Hant/markdown-examples' },
          { text: '執行時 API 範例', link: '/zh-Hant/api-examples' }
        ]
      },
      { text: '統計', link: 'https://u.iwexe.top/share/LFujHhYK7P1QcNCK' },
      { text: '關於', link: '/zh-Hant/about' }
    ],
    outlineTitle: '目錄',
    lastUpdatedText: '最後更新',
    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    },
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式',
    sidebarMenuLabel: '選單',
    returnToTopLabel: '返回頂部',
    langMenuLabel: '切換語言'
  }
} satisfies LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link: string }

export const zhHantSidebar = [
  {
    text: '範例',
    items: [
      { text: 'Markdown 範例', link: '/zh-Hant/markdown-examples' },
      { text: '執行時 API 範例', link: '/zh-Hant/api-examples' }
    ]
  },
  {
    text: 'Docker',
    items: [
      { text: '青龍面板', link: '/zh-Hant/Docker/qinglong-panel' }
    ]
  },
  {
    text: '關於',
    items: [
      { text: '關於本專案', link: '/zh-Hant/about' }
    ]
  }
]
