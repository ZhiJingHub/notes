import { h, onMounted, watch } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useData, useRouter } from 'vitepress'
import './style.css'

const HomeLinkHandler = {
  setup() {
    const { lang } = useData()
    const router = useRouter()
    
    const getLocaleHomeLink = () => {
      const langValue = lang.value
      if (langValue === 'zh-CN') return '/zh-CN/'
      if (langValue === 'zh-Hant') return '/zh-Hant/'
      if (langValue === 'en-US') return '/en-US/'
      return '/'
    }
    
    const updateHomeLinks = () => {
      const localeLink = getLocaleHomeLink()
      const homeLinks = document.querySelectorAll('.VPNavBarTitle a[href="/"]')
      
      homeLinks.forEach((link) => {
        const el = link as HTMLAnchorElement
        if (el.dataset.localeHandled) return
        el.dataset.localeHandled = 'true'
        el.setAttribute('href', localeLink)
        
        el.addEventListener('click', (e) => {
          e.preventDefault()
          router.go(localeLink)
        })
      })
    }
    
    onMounted(() => {
      updateHomeLinks()
      
      watch(() => router.route.path, () => {
        setTimeout(updateHomeLinks, 50)
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
