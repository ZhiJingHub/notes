export default {
  async fetch(request, env, ctx) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method Not Allowed', { status: 405 })
    }

    const url = new URL(request.url)

    if (url.pathname === '/') {
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

      const redirectUrl = new URL(target, request.url)
      return Response.redirect(redirectUrl, 302)
    }

    const response = await env.ASSETS.fetch(request)

    if (response.status === 404) {
      const notFoundUrl = new URL('/404.html', request.url)
      const notFoundResponse = await env.ASSETS.fetch(new Request(notFoundUrl, request))
      const headers = new Headers(notFoundResponse.headers)
      headers.set('Cache-Control', 'public, max-age=0, must-revalidate')
      return new Response(notFoundResponse.body, { status: 404, statusText: 'Not Found', headers })
    }

    if (url.pathname.startsWith('/pagefind/')) {
      const headers = new Headers(response.headers)
      headers.set('Cache-Control', 'public, max-age=3600')
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers })
    }

    const staticExtensions = ['.js', '.css', '.woff2', '.woff', '.ttf', '.eot', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.webp']
    const isStaticAsset = url.pathname.startsWith('/assets/') || staticExtensions.some(ext => url.pathname.endsWith(ext))

    if (isStaticAsset) {
      const headers = new Headers(response.headers)
      headers.set('Cache-Control', 'public, max-age=31536000, immutable')
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers })
    }

    if (response.headers.get('content-type')?.includes('text/html')) {
      const headers = new Headers(response.headers)
      headers.set('Cache-Control', 'public, max-age=0, must-revalidate')
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers })
    }

    return response
  }
}
