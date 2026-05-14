const fs = require('fs')
const path = require('path')

const sitemapPath = path.join(__dirname, '..', 'doc', '.vitepress', 'dist', 'sitemap.xml')

if (!fs.existsSync(sitemapPath)) {
  console.log('sitemap.xml not found')
  process.exit(0)
}

let content = fs.readFileSync(sitemapPath, 'utf8')
if (content.includes('xml-stylesheet')) {
  content = content.replace(/\n<\?xml-stylesheet[^?]*\?>/g, '')
  fs.writeFileSync(sitemapPath, content)
  console.log('sitemap.xsl removed')
} else {
  console.log('sitemap.xml unchanged')
}