import type { LocaleSpecificConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'

export const zhCN = {
  label: '简体中文',
  lang: 'zh-CN',
  link: '/zh-CN/',
  title: '我的精彩项目',
  description: '一个 VitePress 网站',
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh-CN/' },
      {
        text: '指南',
        items: [
          { text: 'Markdown 示例', link: '/zh-CN/markdown-examples' },
          { text: '运行时 API 示例', link: '/zh-CN/api-examples' }
        ]
      },
      { text: '统计', link: 'https://u.iwexe.top/share/LFujHhYK7P1QcNCK' },
      { text: '关于', link: '/zh-CN/about' }
    ],
    outlineTitle: '目录',
    lastUpdatedText: '最后更新',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言'
  }
} satisfies LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link: string }

export const zhCNSidebar = [
  {
    text: '示例',
    items: [
      { text: 'Markdown 示例', link: '/zh-CN/markdown-examples' },
      { text: '运行时 API 示例', link: '/zh-CN/api-examples' }
    ]
  },
  {
    text: 'Docker',
    items: [
      { text: '青龙面板', link: '/zh-CN/Docker/qinglong-panel' }
    ]
  },
  {
    text: '关于',
    items: [
      { text: '关于本项目', link: '/zh-CN/about' }
    ]
  }
]

export const zhCNSearch = {
  translations: {
    button: {
      buttonText: '搜索',
      buttonAriaLabel: '搜索'
    },
    modal: {
      noResultsText: '无法找到相关结果',
      resetButtonTitle: '清除查询条件',
      footer: {
        selectText: '选择',
        navigateText: '切换',
        closeText: '关闭'
      }
    }
  }
}
