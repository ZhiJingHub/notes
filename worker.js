export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    
    if (url.pathname === '/') {
      const cookie = request.headers.get('cookie') || ''
      const langCookie = cookie.split(';').find(c => c.trim().startsWith('preferred_lang='))
      
      if (langCookie) {
        const preferredLang = langCookie.split('=')[1].trim()
        return Response.redirect(new URL(preferredLang, request.url), 302)
      }

      const acceptLanguage = request.headers.get('accept-language') || ''
      const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim())
      
      let target = '/en-US/'
      
      for (const lang of languages) {
        if (lang === 'zh-CN' || lang === 'zh-Hans' || lang.startsWith('zh-Hans')) {
          target = '/zh-CN/'
          break
        }
        if (lang === 'zh-TW' || lang === 'zh-HK' || lang === 'zh-MO' || 
            lang === 'zh-Hant' || lang.startsWith('zh-Hant')) {
          target = '/zh-Hant/'
          break
        }
        if (lang.startsWith('zh') && !lang.startsWith('zh-Hans') && !lang.startsWith('zh-Hant')) {
          const region = lang.split('-')[1]
          if (region === 'TW' || region === 'HK' || region === 'MO') {
            target = '/zh-Hant/'
          } else {
            target = '/zh-CN/'
          }
          break
        }
      }
      
      const response = Response.redirect(new URL(target, request.url), 302)
      response.headers.set('Set-Cookie', `preferred_lang=${target}; Path=/; Max-Age=31536000; SameSite=Lax`)
      return response
    }
    
    return env.ASSETS.fetch(request)
  }
}
