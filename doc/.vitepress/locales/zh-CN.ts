import { createLocale } from './shared'

const { locale: zhCN, sidebar: zhCNSidebar } = createLocale({
  label: '简体中文',
  lang: 'zh-CN',
  title: '我的精彩项目',
  description: '一个 VitePress 网站',
  nav: {
    home: '首页',
    guide: '指南',
    markdownExamples: 'Markdown 示例',
    apiExamples: '运行时 API 示例',
    analytics: '统计',
    about: '关于'
  },
  sidebar: {
    examples: '示例',
    markdownExamples: 'Markdown 示例',
    apiExamples: '运行时 API 示例',
    docker: 'Docker',
    qinglongPanel: '青龙面板',
    about: '关于',
    aboutProject: '关于本项目'
  },
  outlineTitle: '目录',
  lastUpdatedText: '最后更新',
  prev: '上一页',
  next: '下一页',
  darkModeSwitchLabel: '主题',
  lightModeSwitchTitle: '切换到浅色模式',
  darkModeSwitchTitle: '切换到深色模式',
  sidebarMenuLabel: '菜单',
  returnToTopLabel: '返回顶部',
  langMenuLabel: '切换语言'
})

export { zhCN, zhCNSidebar }
