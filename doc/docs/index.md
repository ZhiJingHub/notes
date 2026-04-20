---
layout: home
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const visited = sessionStorage.getItem('visited')
  if (visited) return
  
  sessionStorage.setItem('visited', 'true')
  
  const langMap = {
    'zh-CN': '/zh_CN/',
    'zh-Hans': '/zh_CN/',
    'zh-Hans-CN': '/zh_CN/',
    'zh-TW': '/zh_Hant/',
    'zh-Hant': '/zh_Hant/',
    'zh-Hant-TW': '/zh_Hant/',
    'zh-HK': '/zh_Hant/',
    'zh-Hant-HK': '/zh_Hant/',
    'zh-MO': '/zh_Hant/',
    'zh-Hant-MO': '/zh_Hant/',
  }
  
  const browserLang = navigator.language
  let target = '/en_US/'
  
  if (langMap[browserLang]) {
    target = langMap[browserLang]
  } else {
    const baseLang = browserLang.split('-')[0]
    if (baseLang === 'zh') {
      const region = browserLang.split('-')[1]
      if (region === 'TW' || region === 'HK' || region === 'MO') {
        target = '/zh_Hant/'
      } else if (region === 'Hant' || region?.startsWith('Hant')) {
        target = '/zh_Hant/'
      } else {
        target = '/zh_CN/'
      }
    }
  }
  
  window.location.href = target
})
</script>

# Redirecting...

You will be redirected to the appropriate language version.
