import { createLocale } from './shared'

const { locale: zhHant, sidebar: zhHantSidebar } = createLocale({
  label: '繁體中文',
  lang: 'zh-Hant',
  title: '我的精彩專案',
  description: '一個 VitePress 網站',
  nav: {
    home: '首頁',
    guide: '指南',
    markdownExamples: 'Markdown 範例',
    apiExamples: '執行時 API 範例',
    analytics: '統計',
    about: '關於'
  },
  sidebar: {
    examples: '範例',
    markdownExamples: 'Markdown 範例',
    apiExamples: '執行時 API 範例',
    docker: 'Docker',
    qinglongPanel: '青龍面板',
    about: '關於',
    aboutProject: '關於本專案'
  },
  outlineTitle: '目錄',
  lastUpdatedText: '最後更新',
  prev: '上一頁',
  next: '下一頁',
  darkModeSwitchLabel: '主題',
  lightModeSwitchTitle: '切換到淺色模式',
  darkModeSwitchTitle: '切換到深色模式',
  sidebarMenuLabel: '選單',
  returnToTopLabel: '返回頂部',
  langMenuLabel: '切換語言'
})

export { zhHant, zhHantSidebar }
