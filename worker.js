import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  const url = new URL(event.request.url)
  
  if (url.pathname === '/') {
    const acceptLanguage = event.request.headers.get('accept-language') || ''
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
    
    return Response.redirect(new URL(target, event.request.url), 302)
  }
  
  try {
    return await getAssetFromKV(event)
  } catch (e) {
    let notFoundResponse = await getAssetFromKV(event, {
      mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
    })
    return new Response(notFoundResponse.body, {
      ...notFoundResponse,
      status: 404,
    })
  }
}
