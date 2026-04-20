import { defineConfig } from 'vitepress'
import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'

const socialLinks = [
  { icon: 'github', link: 'https://github.com/ZhiJingHub' }
]

function loadEnv() {
  const envPath = resolve(process.cwd(), '.env')
  if (!existsSync(envPath)) return {}
  
  const content = readFileSync(envPath, 'utf-8')
  const env: Record<string, string> = {}
  
  content.split('\n').forEach(line => {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...values] = trimmed.split('=')
      if (key) {
        env[key.trim()] = values.join('=').trim()
      }
    }
  })
  
  return env
}

const localEnv = loadEnv()
const umamiScript = process.env.UMAMI_SCRIPT || localEnv.UMAMI_SCRIPT || 'https://u.iwexe.top/script.js'
const umamiWebsiteId = process.env.UMAMI_WEBSITE_ID || localEnv.UMAMI_WEBSITE_ID || ''

export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: 'docs',
  cleanUrls: true,

  head: [
    [
      'script',
      {
        async: '',
        src: umamiScript,
        'data-website-id': umamiWebsiteId
      }
    ]
  ],

  themeConfig: {
    socialLinks,
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    sidebar: {
      '/en-US/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/en-US/markdown-examples' },
            { text: 'Runtime API Examples', link: '/en-US/api-examples' }
          ]
        },
        {
          text: 'About',
          items: [
            { text: 'About This Project', link: '/en-US/about' }
          ]
        }
      ],
      '/zh-CN/': [
        {
          text: '示例',
          items: [
            { text: 'Markdown 示例', link: '/zh-CN/markdown-examples' },
            { text: '运行时 API 示例', link: '/zh-CN/api-examples' }
          ]
        },
        {
          text: '关于',
          items: [
            { text: '关于本项目', link: '/zh-CN/about' }
          ]
        }
      ],
      '/zh-Hant/': [
        {
          text: '範例',
          items: [
            { text: 'Markdown 範例', link: '/zh-Hant/markdown-examples' },
            { text: '執行時 API 範例', link: '/zh-Hant/api-examples' }
          ]
        },
        {
          text: '關於',
          items: [
            { text: '關於本專案', link: '/zh-Hant/about' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          en_US: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Clear search query',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          },
          zh_CN: {
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
          },
          zh_Hant: {
            translations: {
              button: {
                buttonText: '搜尋',
                buttonAriaLabel: '搜尋'
              },
              modal: {
                noResultsText: '無法找到相關結果',
                resetButtonTitle: '清除查詢條件',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換',
                  closeText: '關閉'
                }
              }
            }
          }
        }
      }
    }
  },

  locales: {
    'en-US': {
      label: 'English',
      lang: 'en-US',
      link: '/en-US/',
      title: 'My Awesome Project',
      description: 'A VitePress Site',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en-US/' },
          {
            text: 'Guide',
            items: [
              { text: 'Markdown Examples', link: '/en-US/markdown-examples' },
              { text: 'Runtime API Examples', link: '/en-US/api-examples' }
            ]
          },
          { text: 'About', link: '/en-US/about' }
        ],
        outlineTitle: 'On this page',
        lastUpdatedText: 'Last updated',
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Switch to light mode',
        darkModeSwitchTitle: 'Switch to dark mode',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        langMenuLabel: 'Switch language'
      }
    },
    'zh-CN': {
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
    },
    'zh-Hant': {
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
    }
  }
})
