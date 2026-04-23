import type { DefaultTheme } from 'vitepress'

export const enUS: DefaultTheme.Config = {
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
      { text: 'Analytics', link: 'https://u.iwexe.top/share/LFujHhYK7P1QcNCK' },
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
}

export const enUSSidebar = [
  {
    text: 'Examples',
    items: [
      { text: 'Markdown Examples', link: '/en-US/markdown-examples' },
      { text: 'Runtime API Examples', link: '/en-US/api-examples' }
    ]
  },
  {
    text: 'Docker',
    items: [
      { text: 'Qinglong Panel', link: '/en-US/Docker/qinglong-panel' }
    ]
  },
  {
    text: 'About',
    items: [
      { text: 'About This Project', link: '/en-US/about' }
    ]
  }
]

export const enUSSearch = {
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
}
