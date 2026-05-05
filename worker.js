const ZH_HANT_REGIONS = new Set(['TW', 'HK', 'MO'])
const CACHE_IMMUTABLE = 'public, max-age=31536000, immutable'
const CACHE_HOUR = 'public, max-age=3600'
const CACHE_SHORT = 'public, max-age=60, stale-while-revalidate=300'

function withCacheControl(response, cacheControl) {
  const headers = new Headers(response.headers)
  headers.set('Cache-Control', cacheControl)
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  })
}

function getLocalePath(acceptLanguage) {
  const languages = acceptLanguage.split(',')
  for (const entry of languages) {
    const lang = entry.split(';')[0].trim()
    if (!lang.startsWith('zh')) continue
    const region = lang.split('-')[1]
    return (region && ZH_HANT_REGIONS.has(region)) || lang.includes('Hant')
      ? '/zh-Hant/'
      : '/zh-CN/'
  }
  return '/en-US/'
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/') {
      const target = getLocalePath(request.headers.get('accept-language') || '')
      return Response.redirect(new URL(target, request.url), 302)
    }

    const response = await env.ASSETS.fetch(request)

    if (url.pathname.startsWith('/assets/')) {
      return withCacheControl(response, CACHE_IMMUTABLE)
    }

    if (url.pathname.startsWith('/pagefind/')) {
      return withCacheControl(response, CACHE_HOUR)
    }

    if (response.status === 404) {
      return withCacheControl(response, CACHE_SHORT)
    }

    if (response.headers.get('content-type')?.includes('text/html')) {
      return withCacheControl(response, CACHE_SHORT)
    }

    return response
  }
}
