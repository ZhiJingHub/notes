<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template name="url-group">
    <xsl:param name="icon"/>
    <xsl:param name="title"/>
    <xsl:param name="priority"/>
    <xsl:param name="priority-class"/>

    <xsl:for-each select="sitemap:urlset/sitemap:url[sitemap:priority=$priority]">
      <xsl:if test="position()=1">
        <div class="group">
          <div class="group-title"><xsl:value-of select="$icon"/> <xsl:value-of select="$title"/> <span class="badge">priority <xsl:value-of select="$priority"/></span></div>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>更新频率</th>
                <th>优先级</th>
                <th>最后修改</th>
                <th>多语言</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="../sitemap:url[sitemap:priority=$priority]">
                <tr>
                  <td><a class="url-link"><xsl:attribute name="href"><xsl:value-of select="sitemap:loc"/></xsl:attribute><xsl:value-of select="sitemap:loc"/></a></td>
                  <td><span class="freq"><xsl:value-of select="sitemap:changefreq"/></span></td>
                  <td><span class="priority {$priority-class}"><xsl:value-of select="sitemap:priority"/></span></td>
                  <td><span class="lastmod"><xsl:value-of select="sitemap:lastmod"/></span></td>
                  <td>
                    <div class="alternates">
                      <xsl:for-each select="xhtml:link">
                        <span class="alt-badge"><xsl:value-of select="@hreflang"/></span>
                      </xsl:for-each>
                    </div>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </xsl:if>
    </xsl:for-each>
  </xsl:template>

  <xsl:template match="/">
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Sitemap - docs.iwexe.top</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'HarmonyOS Sans SC', 'HarmonyOS Sans', system-ui, -apple-system, sans-serif;
            background: #f8f9fa;
            color: #1a1a2e;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
          }
          .container {
            max-width: 960px;
            margin: 0 auto;
            padding: 40px 24px;
          }
          header {
            text-align: center;
            margin-bottom: 40px;
          }
          header h1 {
            font-size: 2rem;
            font-weight: 700;
            color: #1a1a2e;
            margin-bottom: 8px;
          }
          header p {
            color: #6b7280;
            font-size: 0.95rem;
          }
          .stats {
            display: flex;
            gap: 16px;
            justify-content: center;
            margin-bottom: 32px;
            flex-wrap: wrap;
          }
          .stat-card {
            background: #fff;
            border-radius: 12px;
            padding: 16px 28px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.06);
            text-align: center;
          }
          .stat-card .num {
            font-size: 1.75rem;
            font-weight: 700;
            color: #3b82f6;
          }
          .stat-card .label {
            font-size: 0.8rem;
            color: #9ca3af;
            margin-top: 2px;
          }
          .group {
            margin-bottom: 24px;
          }
          .group-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: #374151;
            padding: 12px 16px;
            background: #e5e7eb;
            border-radius: 8px 8px 0 0;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .group-title .badge {
            font-size: 0.7rem;
            font-weight: 500;
            background: #3b82f6;
            color: #fff;
            border-radius: 999px;
            padding: 2px 10px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
            border-radius: 0 0 8px 8px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.06);
          }
          thead th {
            background: #f9fafb;
            padding: 10px 16px;
            text-align: left;
            font-size: 0.78rem;
            font-weight: 600;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-bottom: 1px solid #e5e7eb;
          }
          tbody tr {
            transition: background 0.15s;
          }
          tbody tr:hover {
            background: #f0f7ff;
          }
          tbody td {
            padding: 10px 16px;
            font-size: 0.88rem;
            border-bottom: 1px solid #f3f4f6;
          }
          tbody tr:last-child td {
            border-bottom: none;
          }
          a.url-link {
            color: #3b82f6;
            text-decoration: none;
            word-break: break-all;
          }
          a.url-link:hover {
            text-decoration: underline;
          }
          .priority {
            display: inline-block;
            font-weight: 600;
            font-size: 0.82rem;
            padding: 2px 8px;
            border-radius: 4px;
          }
          .priority-high { background: #dcfce7; color: #166534; }
          .priority-mid { background: #dbeafe; color: #1e40af; }
          .priority-low { background: #fef3c7; color: #92400e; }
          .freq { color: #6b7280; font-size: 0.82rem; }
          .lastmod { color: #9ca3af; font-size: 0.82rem; }
          .alternates {
            display: flex;
            gap: 4px;
            flex-wrap: wrap;
          }
          .alt-badge {
            font-size: 0.7rem;
            padding: 1px 6px;
            border-radius: 3px;
            background: #f3f4f6;
            color: #6b7280;
          }
          footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #9ca3af;
            font-size: 0.8rem;
          }
          footer a { color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>🗺️ Sitemap</h1>
            <p>docs.iwexe.top 站点地图</p>
          </header>

          <div class="stats">
            <div class="stat-card">
              <div class="num"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
              <div class="label">总页面数</div>
            </div>
            <div class="stat-card">
              <div class="num"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority='1.0'])"/></div>
              <div class="label">高优先级</div>
            </div>
            <div class="stat-card">
              <div class="num"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:changefreq='monthly'])"/></div>
              <div class="label">月更页面</div>
            </div>
          </div>

          <xsl:call-template name="url-group">
            <xsl:with-param name="icon" select="'🏠'"/>
            <xsl:with-param name="title" select="'首页'"/>
            <xsl:with-param name="priority" select="'1.0'"/>
            <xsl:with-param name="priority-class" select="'priority-high'"/>
          </xsl:call-template>

          <xsl:call-template name="url-group">
            <xsl:with-param name="icon" select="'📄'"/>
            <xsl:with-param name="title" select="'文档页面'"/>
            <xsl:with-param name="priority" select="'0.8'"/>
            <xsl:with-param name="priority-class" select="'priority-mid'"/>
          </xsl:call-template>

          <xsl:call-template name="url-group">
            <xsl:with-param name="icon" select="'🐳'"/>
            <xsl:with-param name="title" select="'Docker 教程'"/>
            <xsl:with-param name="priority" select="'0.7'"/>
            <xsl:with-param name="priority-class" select="'priority-mid'"/>
          </xsl:call-template>

          <xsl:call-template name="url-group">
            <xsl:with-param name="icon" select="'ℹ️'"/>
            <xsl:with-param name="title" select="'关于页面'"/>
            <xsl:with-param name="priority" select="'0.5'"/>
            <xsl:with-param name="priority-class" select="'priority-low'"/>
          </xsl:call-template>

          <footer>
            <p>由 VitePress 自动生成 · <a href="https://docs.iwexe.top">返回首页</a></p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
