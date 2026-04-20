import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: 'docs',

  locales: {
    en_US: {
      label: 'English',
      lang: 'en_US',
      link: '/en_US/',
      title: 'My Awesome Project',
      description: 'A VitePress Site',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en_US/' },
          { text: 'Examples', link: '/en_US/markdown-examples' }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/en_US/markdown-examples' },
              { text: 'Runtime API Examples', link: '/en_US/api-examples' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
      }
    },
    zh_CN: {
      label: '简体中文',
      lang: 'zh_CN',
      link: '/zh_CN/',
      title: '我的精彩项目',
      description: '一个 VitePress 网站',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh_CN/' },
          { text: '示例', link: '/zh_CN/markdown-examples' }
        ],
        sidebar: [
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/zh_CN/markdown-examples' },
              { text: '运行时 API 示例', link: '/zh_CN/api-examples' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
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
    },
    zh_Hant: {
      label: '繁體中文',
      lang: 'zh_Hant',
      link: '/zh_Hant/',
      title: '我的精彩專案',
      description: '一個 VitePress 網站',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/zh_Hant/' },
          { text: '範例', link: '/zh_Hant/markdown-examples' }
        ],
        sidebar: [
          {
            text: '範例',
            items: [
              { text: 'Markdown 範例', link: '/zh_Hant/markdown-examples' },
              { text: '執行時 API 範例', link: '/zh_Hant/api-examples' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
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
    }
  }
})
