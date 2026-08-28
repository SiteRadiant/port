const fs = require('fs');
const urls = [
  '/',
  '/services',
  '/about',
  '/faq',
  '/privacy',
  '/terms-and-conditions',
  '/website-development',
  '/landing-page-development',
  '/ecommerce-development',
  '/lms-development',
  '/website-cost-india',
  '/website-vs-landing-page'
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

urls.forEach(url => {
  xml += `  <url>
    <loc>https://www.siteradiant.co.in${url === '/' ? '' : url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : (url.includes('development') ? '0.9' : '0.8')}</priority>
  </url>\n`;
});

xml += `</urlset>\n`;
fs.writeFileSync('public/sitemap.xml', xml);
console.log('sitemap updated');
