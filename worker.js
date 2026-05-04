export default {
  async fetch(request) {
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

    return new Response('Not Found', { status: 404 })
  }
}
