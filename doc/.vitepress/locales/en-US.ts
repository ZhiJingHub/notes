import { createLocale } from './shared'

const { locale: enUS, sidebar: enUSSidebar } = createLocale({
  label: 'English',
  lang: 'en-US',
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  nav: {
    home: 'Home',
    guide: 'Guide',
    markdownExamples: 'Markdown Examples',
    apiExamples: 'Runtime API Examples',
    analytics: 'Analytics',
    about: 'About'
  },
  sidebar: {
    examples: 'Examples',
    markdownExamples: 'Markdown Examples',
    apiExamples: 'Runtime API Examples',
    docker: 'Docker',
    qinglongPanel: 'Qinglong Panel',
    about: 'About',
    aboutProject: 'About This Project'
  },
  outlineTitle: 'On this page',
  lastUpdatedText: 'Last updated',
  prev: 'Previous page',
  next: 'Next page',
  darkModeSwitchLabel: 'Theme',
  lightModeSwitchTitle: 'Switch to light mode',
  darkModeSwitchTitle: 'Switch to dark mode',
  sidebarMenuLabel: 'Menu',
  returnToTopLabel: 'Return to top',
  langMenuLabel: 'Switch language'
})

export { enUS, enUSSidebar }
