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
}

content = formatXml(content)
fs.writeFileSync(sitemapPath, content)
console.log('sitemap.xml formatted')

function formatXml(xml) {
  let formatted = ''
  let indent = 0

  const parts = xml.replace(/>\s+</g, '><').split(/(<[^>]+>)/).filter(Boolean)

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]

    if (part.startsWith('<?xml')) {
      formatted += part + '\n'
      continue
    }

    if (!part.startsWith('<')) {
      formatted = formatted.trimEnd() + part
      continue
    }

    const isClosing = part.startsWith('</')
    const isSelfClosing = part.endsWith('/>')

    if (isClosing) {
      indent--
    }

    formatted += ' '.repeat(indent * 2) + part

    if (!isClosing && !isSelfClosing && i + 1 < parts.length && !parts[i + 1].startsWith('<')) {
      formatted += parts[i + 1]
      i++
      if (i + 1 < parts.length && parts[i + 1].startsWith('</')) {
        formatted += parts[i + 1]
        i++
      }
      formatted += '\n'
    } else if (!isClosing && !isSelfClosing) {
      formatted += '\n'
      indent++
    } else {
      formatted += '\n'
    }
  }

  return formatted.trimEnd() + '\n'
}