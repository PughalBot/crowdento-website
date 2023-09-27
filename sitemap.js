// generate-sitemap.js
const fs = require('fs');
const xmlbuilder = require('xmlbuilder');

const pages = [
  '/',
  '/about',
  '/contact',
  '/wedding',
  '/college',
  '/birthday',
  '/corporate',
  '/services', 
];

function generateSitemap() {
  const root = xmlbuilder.create('urlset', { version: '1.0', encoding: 'UTF-8' });
  root.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

  pages.forEach(page => {
    const url = root.ele('url');
    url.ele('loc', `https://croedento.com${page}`);
    url.ele('changefreq', 'daily');
    url.ele('priority', '0.7');
  });

  const xml = root.end({ pretty: true });
  fs.writeFileSync('public/sitemap.xml', xml);
}

generateSitemap();
