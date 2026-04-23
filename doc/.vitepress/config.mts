import { defineConfig } from 'vitepress'
import { enUS, enUSSidebar, enUSSearch } from './locales/en-US'
import { zhCN, zhCNSidebar, zhCNSearch } from './locales/zh-CN'
import { zhHant, zhHantSidebar, zhHantSearch } from './locales/zh-Hant'

const socialLinks = [
  { icon: 'github', link: 'https://github.com/ZhiJingHub' }
]

export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: 'docs',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://docs.iwexe.top'
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
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    socialLinks,
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    sidebar: {
      '/en-US/': enUSSidebar,
      '/zh-CN/': zhCNSidebar,
      '/zh-Hant/': zhHantSidebar
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          en_US: enUSSearch,
          zh_CN: zhCNSearch,
          zh_Hant: zhHantSearch
        }
      }
    }
  },

  locales: {
    'en-US': enUS,
    'zh-CN': zhCN,
    'zh-Hant': zhHant
  }
})
