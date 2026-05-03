import type { LocaleSpecificConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'

interface LocaleTranslations {
  label: string
  lang: string
  title: string
  description: string
  nav: {
    home: string
    guide: string
    markdownExamples: string
    apiExamples: string
    analytics: string
    about: string
  }
  sidebar: {
    examples: string
    markdownExamples: string
    apiExamples: string
    docker: string
    qinglongPanel: string
    about: string
    aboutProject: string
  }
  outlineTitle: string
  lastUpdatedText: string
  prev: string
  next: string
  darkModeSwitchLabel: string
  lightModeSwitchTitle: string
  darkModeSwitchTitle: string
  sidebarMenuLabel: string
  returnToTopLabel: string
  langMenuLabel: string
}

type LocaleConfig = LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link: string }

export function createLocale(t: LocaleTranslations): { locale: LocaleConfig; sidebar: DefaultTheme.Sidebar } {
  const prefix = `/${t.lang}/`

  const locale: LocaleConfig = {
    label: t.label,
    lang: t.lang,
    link: prefix,
    title: t.title,
    description: t.description,
    themeConfig: {
      nav: [
        { text: t.nav.home, link: prefix },
        {
          text: t.nav.guide,
          items: [
            { text: t.nav.markdownExamples, link: `${prefix}markdown-examples` },
            { text: t.nav.apiExamples, link: `${prefix}api-examples` }
          ]
        },
        { text: t.nav.analytics, link: 'https://u.iwexe.top/share/LFujHhYK7P1QcNCK' },
        { text: t.nav.about, link: `${prefix}about` }
      ],
      outlineTitle: t.outlineTitle,
      lastUpdatedText: t.lastUpdatedText,
      docFooter: {
        prev: t.prev,
        next: t.next
      },
      darkModeSwitchLabel: t.darkModeSwitchLabel,
      lightModeSwitchTitle: t.lightModeSwitchTitle,
      darkModeSwitchTitle: t.darkModeSwitchTitle,
      sidebarMenuLabel: t.sidebarMenuLabel,
      returnToTopLabel: t.returnToTopLabel,
      langMenuLabel: t.langMenuLabel
    }
  }

  const sidebar: DefaultTheme.Sidebar = [
    {
      text: t.sidebar.examples,
      items: [
        { text: t.sidebar.markdownExamples, link: `${prefix}markdown-examples` },
        { text: t.sidebar.apiExamples, link: `${prefix}api-examples` }
      ]
    },
    {
      text: t.sidebar.docker,
      items: [
        { text: t.sidebar.qinglongPanel, link: `${prefix}Docker/qinglong-panel` }
      ]
    },
    {
      text: t.sidebar.about,
      items: [
        { text: t.sidebar.aboutProject, link: `${prefix}about` }
      ]
    }
  ]

  return { locale, sidebar }
}
