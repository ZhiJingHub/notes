const fs = require('fs')
const path = require('path')

const sitemapPath = path.join(__dirname, '..', 'doc', '.vitepress', 'dist', 'sitemap.xml')

if (!fs.existsSync(sitemapPath)) {
  console.log('sitemap.xml not found')
  process.exit(0)
}

let content = fs.readFileSync(sitemapPath, 'utf8')
if (content.includes('xml-stylesheet')) {
  console.log('sitemap.xsl already present')
  process.exit(0)
}

content = content.replace(
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>'
)
fs.writeFileSync(sitemapPath, content)
console.log('sitemap.xsl injected')
