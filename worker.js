export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/') {
      const acceptLanguage = request.headers.get('accept-language') || ''
      const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim())
      const zhHantRegions = ['TW', 'HK', 'MO']

      let target = '/en-US/'

      for (const lang of languages) {
        if (lang.startsWith('zh')) {
          const region = lang.split('-')[1]
          target = (region && zhHantRegions.includes(region)) || lang.includes('Hant')
            ? '/zh-Hant/'
            : '/zh-CN/'
          break
        }
      }

      const redirectUrl = new URL(target, request.url)
      return Response.redirect(redirectUrl, 302)
    }

    const response = await env.ASSETS.fetch(request)

    if (response.status === 404) {
      return withCacheControl(response, 'public, max-age=60, stale-while-revalidate=300')
    }

    if (url.pathname.startsWith('/pagefind/')) {
      return withCacheControl(response, 'public, max-age=3600')
    }

    const staticExtensions = ['.js', '.css', '.woff2', '.woff', '.ttf', '.eot', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.webp']
    if (url.pathname.startsWith('/assets/') || staticExtensions.some(ext => url.pathname.endsWith(ext))) {
      return withCacheControl(response, 'public, max-age=31536000, immutable')
    }

    if (response.headers.get('content-type')?.includes('text/html')) {
      return withCacheControl(response, 'public, max-age=60, stale-while-revalidate=300')
    }

    return response
  }
}

function withCacheControl(response, cacheControl) {
  const headers = new Headers(response.headers)
  headers.set('Cache-Control', cacheControl)
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  })
}
