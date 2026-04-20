export function onRequest(context) {
  const { request } = context
  const url = new URL(request.url)
  
  if (url.pathname !== '/') {
    return context.next()
  }

  const acceptLanguage = request.headers.get('accept-language') || ''
  const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim())

  let target = '/en_US/'

  for (const lang of languages) {
    if (lang === 'zh-CN' || lang === 'zh-Hans' || lang.startsWith('zh-Hans')) {
      target = '/zh_CN/'
      break
    }
    if (lang === 'zh-TW' || lang === 'zh-HK' || lang === 'zh-MO' || 
        lang === 'zh-Hant' || lang.startsWith('zh-Hant')) {
      target = '/zh_Hant/'
      break
    }
    if (lang.startsWith('zh') && !lang.startsWith('zh-Hans') && !lang.startsWith('zh-Hant')) {
      const region = lang.split('-')[1]
      if (region === 'TW' || region === 'HK' || region === 'MO') {
        target = '/zh_Hant/'
      } else {
        target = '/zh_CN/'
      }
      break
    }
  }

  return Response.redirect(new URL(target, request.url), 302)
}
