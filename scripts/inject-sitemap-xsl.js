const fs = require('fs')
const path = require('path')

const sitemapPath = path.join(__dirname, '..', 'doc', '.vitepress', 'dist', 'sitemap.xml')

try {
  let content = fs.readFileSync(sitemapPath, 'utf8')
  if (!content.includes('xml-stylesheet')) {
    content = content.replace(
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>'
    )
    fs.writeFileSync(sitemapPath, content)
    console.log('sitemap.xsl injected')
  } else {
    console.log('sitemap.xsl already present')
  }
} catch {
  console.log('sitemap.xml not found')
}
