import { h, onMounted, watch, ref } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useData, useRouter } from 'vitepress'
import './style.css'

const HomeLinkHandler = {
  setup() {
    const { lang, site } = useData()
    const router = useRouter()
    
    const getLocaleLink = () => {
      const locales = site.value.locales
      if (locales && locales[lang.value]) {
        return locales[lang.value].link || '/'
      }
      return '/'
    }
    
    onMounted(() => {
      const updateHomeLinks = () => {
        const homeLinks = document.querySelectorAll('a[href="/"]')
        const localeLink = getLocaleLink()
        homeLinks.forEach((link) => {
          link.setAttribute('href', localeLink)
          link.addEventListener('click', (e) => {
            e.preventDefault()
            router.go(localeLink)
          }, { once: true })
        })
      }
      
      updateHomeLinks()
      
      watch(() => router.route.path, () => {
        setTimeout(updateHomeLinks, 100)
      })
    })
    
    return () => null
  }
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(HomeLinkHandler)
    })
  },
  enhanceApp({ app, router, siteData }) {
  }
} satisfies Theme
