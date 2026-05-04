import { defineConfig } from 'vitepress'
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'
import { enUS, enUSSidebar } from './locales/en-US'
import { zhCN, zhCNSidebar } from './locales/zh-CN'
import { zhHant, zhHantSidebar } from './locales/zh-Hant'

const socialLinks = [
  { icon: 'github', link: 'https://github.com/ZhiJingHub' }
]

export default defineConfig({
  srcDir: 'docs',
  cleanUrls: true,
  lastUpdated: true,

  sitemap: {
    hostname: 'https://docs.iwexe.top',
    lastmodDateOnly: true,
    transformItems: (items) => {
      return items.map((item) => {
        if (item.url.includes('/about')) {
          item.changefreq = 'monthly'
          item.priority = 0.5
        } else if (item.url.endsWith('/en-US/') || item.url.endsWith('/zh-CN/') || item.url.endsWith('/zh-Hant/')) {
          item.changefreq = 'weekly'
          item.priority = 1.0
        } else if (item.url.includes('/Docker/')) {
          item.changefreq = 'monthly'
          item.priority = 0.7
        } else {
          item.changefreq = 'weekly'
          item.priority = 0.8
        }
        return item
      })
    }
  },

  head: [
    [
      'script',
      {
        defer: 'true',
        src: 'https://u.iwexe.top/script.js',
        'data-website-id': '6484dd8a-fde8-4e5d-aa33-19f4f9f9250c'
      }
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://r2.iwexe.top', crossorigin: '' }],
    ['link', { rel: 'dns-prefetch', href: 'https://r2.iwexe.top' }],
    ['link', { rel: 'preconnect', href: 'https://u.iwexe.top' }],
    ['link', { rel: 'dns-prefetch', href: 'https://u.iwexe.top' }],
    ['link', { rel: 'preload', href: 'https://r2.iwexe.top/fonts/HarmonyOS_Sans_SC_Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: 'https://r2.iwexe.top/fonts/HarmonyOS_Sans_SC_Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: 'https://r2.iwexe.top/fonts/JetBrainsMono-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }]
  ],

  themeConfig: {
    socialLinks,
    outline: {
      level: [2, 3]
    },
    sidebar: {
      '/en-US/': enUSSidebar,
      '/zh-CN/': zhCNSidebar,
      '/zh-Hant/': zhHantSidebar
    }
  },

  locales: {
    'en-US': enUS,
    'zh-CN': zhCN,
    'zh-Hant': zhHant
  },

  vite: {
    plugins: [
      pagefindPlugin({
        customSearchQuery: chineseSearchOptimize,
        locales: {
          'en-US': {
            btnPlaceholder: 'Search',
            placeholder: 'Search Docs...',
            emptyText: 'No results',
            heading: 'Total: {{searchResult}} search results.'
          },
          'zh-CN': {
            btnPlaceholder: '搜索',
            placeholder: '搜索文档',
            emptyText: '空空如也',
            heading: '共: {{searchResult}} 条结果'
          },
          'zh-Hant': {
            btnPlaceholder: '搜尋',
            placeholder: '搜尋文檔',
            emptyText: '沒有結果',
            heading: '共: {{searchResult}} 條結果'
          }
        }
      })
    ]
  }
})
